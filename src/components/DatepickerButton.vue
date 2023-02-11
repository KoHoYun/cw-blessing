<template>
  <div>
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-right="40"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="dateVar"
          prepend-icon="mdi-calendar"
          readonly
          outlined
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="dateVar"
        locale="ko-kr"
        :type="calType"
        @input="menu = false"
      ></v-date-picker>
    </v-menu>
  </div>
</template>
<script>
  export default {
    props: {
      date: {
        type: String,
        require: false,
        default: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
      },
      type: {
        type: String,
        require: false,
        default: ''
      }
    },
    computed: {
      dateVar: {
        get() {
          return this.date;
        },
        set(newVal) {
          console.log(newVal)
          this.$emit('setDate', newVal);
        }
      },
      calType: {
        get() {
          return this.type;
        }
      }
    },
    data() {
      return {
        menu: false,
      }
    },
  }
</script>
