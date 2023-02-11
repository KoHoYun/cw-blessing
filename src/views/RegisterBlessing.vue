<template>
  <div class="main">
    <div class="section">
      <div class="section-title">* 이름</div>
      <v-text-field
        placeholder="이름"
        v-model="blessingInfo.name"
        :rules="rules.basic"
        hide-details="auto"
        outlined
        clearable
      ></v-text-field>
    </div>

    <div class="section">
      <div class="section-title">* 해당 셀을 선택하세요.(가족셀, 축복셀)</div>
      <v-radio-group
        v-model="blessingInfo.cellType"
        row
      >
        <v-radio
          label="가족셀"
          value="F"
        ></v-radio>
        <v-radio
          label="축복셀"
          value="B"
        ></v-radio>
      </v-radio-group>

      <div v-if="blessingInfo.cellType==='F'">
        <div class="sub-title">• 이름</div>
        <v-text-field
          placeholder="이름"
          v-model="blessingInfo.name"
          hide-details="auto"
          readonly
          outlined
          clearable
        ></v-text-field>
      </div>

      <div v-else-if="blessingInfo.cellType==='B'">
        <div class="sub-title">• 인도자 이름</div>
        <v-text-field
          placeholder="인도자 이름 (ex. 홍길동)"
          v-model="blessingInfo.leaderName"
          :rules="rules.blessingCell"
          hide-details="auto"
          outlined
          clearable
        ></v-text-field>
        <div class="sub-title">• 참석자 이름</div>
        <v-text-field
          placeholder="참석자 이름 (ex. 김철수, 김영희)"
          v-model="blessingInfo.participatantName"
          :rules="rules.blessingCell"
          hide-details="auto"
          outlined
          clearable
        ></v-text-field>
      </div>
    </div>

    <div class="section">
      <div class="date">
        <div class="section-title">* 날짜</div>
        
        <datepicker-button :date="blessingInfo.gijunDate" @setDate="setDate"></datepicker-button>
        <div>- 가급적 주일 저녁 7시에 드립니다. <br/>(부득이한 경우에만 변경)</div>
      </div>
    </div>

    <div class="section">
      <div class="time">
        <div class="section-title">* 시간</div>
        <v-text-field
          placeholder="시간 (ex. 저녁 7시)"
          v-model="blessingInfo.time"
          :rules="rules.basic"
          hide-details="auto"
          outlined
          clearable
        ></v-text-field>
      </div>

    </div>

    <div class="section">    
      <div class="section-title">* 말씀나눔</div>
      <v-text-field
        placeholder="나눈 말씀을 자유롭게 적어주세요."
        v-model="blessingInfo.bibleSharing"
        :rules="rules.basic"
        hide-details="auto"
        outlined
        clearable
      ></v-text-field>
    </div>

    <div class="section">
      <div class="section-title">* 축복기도</div>
      <v-checkbox label="가족을 위해" false-value="N" true-value="Y" v-model="blessingInfo.prayFamilyYn"></v-checkbox>
      <v-checkbox label="탑리더를 위해" false-value="N" true-value="Y" v-model="blessingInfo.prayTopLeaderYn"></v-checkbox>
      <v-checkbox label="셀리더를 위해" false-value="N" true-value="Y" v-model="blessingInfo.prayLeaderYn"></v-checkbox>
      <v-checkbox label="사랑하는 이웃, 친구를 위해" false-value="N" true-value="Y" v-model="blessingInfo.prayFriendYn"></v-checkbox>
      <v-text-field
        v-if="blessingInfo.prayFriendYn == 'Y'"
        placeholder="기도 대상자 (ex. 내 친구 000)"
        v-model="blessingInfo.prayFriendDesc"
        :rules="rules.prayFriendDesc"
        hide-details="auto"
        outlined
        clearable
      ></v-text-field>
    </div>

    <div class="section">
      <div class="section-title">* 감사제목</div>
        <div class="sub-title">• 1)</div>
        <v-text-field
          placeholder="감사제목"
          v-model="blessingInfo.than1"
          hide-details="auto"
          outlined
          clearable
        ></v-text-field>
        <div class="sub-title">• 2)</div>
        <v-text-field
          placeholder="감사제목"
          v-model="blessingInfo.thank2"
          hide-details="auto"
          outlined
          clearable
        ></v-text-field>
        <div class="sub-title">• 3)</div>
        <v-text-field
          placeholder="감사제목"
          v-model="blessingInfo.thank3"
          hide-details="auto"
          outlined
          clearable
        ></v-text-field>
      </div>
      <v-btn block color="primary" x-large @click="submit">제출하기</v-btn>
  </div>
</template>

<script>
import DatepickerButton from '@/components/DatepickerButton.vue'
import api from '@/api'
export default {
  name: 'RegisterBlessing',
  components: {
    DatepickerButton

  },
  data() {
    return {
      today: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      blessingInfo: {
        blessingSeq: null,
        gijunDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        dayOfWeek: '',
        name: '',
        cellType: '',
        leaderName: '',
        participatantName: '',
        time: '',
        bibleSharing: '',
        prayFamilyYn: 'N',
        prayTopLeaderYn: 'N',
        prayLeaderYn: 'N',
        prayFriendYn: 'N',
        prayFriendDesc: '',
        thank1: '',
        thank2: '',
        thank3: ''
      },
      rules: {
        basic: [
          value => !!value || '내용을 입력해주세요.',
        ],
        blessingCell: [
          value => (!!value && this.blessingInfo.blessingCellYn) || '내용을 입력해주세요.',
        ],
        prayFriendDesc: [
          value => (!!value && this.blessingInfo.prayFriendYn) || '내용을 입력해주세요.',
        ]
      }
    }
  },
  create() {
  },
  methods: {
    setDate(value) { 
      console.log(value)
      this.blessingInfo.gijunDate = value;
    },
    submit() {
      this.blessingInfo.gijunDate = this.blessingInfo.gijunDate.replaceAll('-', '');
      api.registerBlessing(this.blessingInfo).then(res => {
        if (res) {
          console.log(res)
        }
      });
    }
  }
}
</script>

<style>
.main {
  margin: 0 25px 25px;
}
.section {
  padding: 20px 0;
  border-bottom: 1px gray dotted;
}

.section-title {
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 1.1em;
}
.sub-title {
  font-weight: bold;
  margin: 10px 0 7px 0;
  font-size: 0.9em;
}
.margin-bottom {
  margin-bottom: 5px;
}
.table-info {
  width: 100%;
  text-align: center;  
}
</style>