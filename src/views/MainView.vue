<template>
  <div class="main">
      <v-btn class="margin-bottom" block color="primary" x-large @click="registerBlessing">제출하기</v-btn>
      <v-btn block color="primary" outlined x-large @click="goList">목록보기</v-btn>
  </div>
</template>

<script>
export default {
  name: 'MainView',
  data() {
    return {
    }
  },
  create() {
  },
  methods: {
    registerBlessing() {
        this.$router.push('register')
    },
    goList() {
        this.$router.push('list')
    }
  }
}
</script>
