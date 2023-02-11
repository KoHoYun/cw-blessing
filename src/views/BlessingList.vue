<template>
  <div>
    <v-btn>+</v-btn>
      2023년 02월
    <v-btn>></v-btn>
    <div>
      <v-card
        class="mx-auto"
      >
        <v-list three-line>
          <template v-for="(item, index) in blessingList">
            <v-divider :key="index"></v-divider>
            <v-list-item
              :key="item.name"
              @click="showDetail()"
            >
              <v-list-item-icon>
                축복
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-html="item.name"></v-list-item-title>
                <v-list-item-subtitle v-html="item.thank1"></v-list-item-subtitle>
                <v-list-item-subtitle v-html="item.thank2"></v-list-item-subtitle>
                <v-list-item-subtitle v-html="item.thank3"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-card>
    </div>
  </div>
</template>

<script>
import api from '@/api'
export default {
  name: 'BlessingList',
  data() {
    return {
      blessingList: [],
    }
  },
  created() {
    this.getBlessingList();
  },
  methods: {
    showDetail() {
        this.$router.push('register')
    },
    async getBlessingList() {
      await api.getBlessingList().then(res => {
        console.log(res.data)
        this.blessingList = res.data;
      });
    },
  }
}
</script>
