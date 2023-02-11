<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="main-header">
        축복셀
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.main-header {
  font-weight: bold;
  font-size: 1.5em;
}
</style>