<template>
  <div class="wrapper">
    <header />
    <div class="main-container">
      <div class="d-flex align-center mt-5 justify-space-around">
        <v-btn color="yellow">
          <a href="http://localhost:6001/login/oauth2/code/kakao">kakao</a>
        </v-btn>
        <v-btn color="red"
          ><a href="http://localhost:6001/login/oauth2/code/google"
            >google</a
          ></v-btn
        >
        <v-btn color="gray"
          ><a href="http://localhost:6001/login/oauth2/code/github"
            >github</a
          ></v-btn
        >
        <v-btn color="green"
          ><a href="http://localhost:6001/login/oauth2/code/naver"
            >naver</a
          ></v-btn
        >
        <v-btn color="blue"
          ><a href="http://localhost:6001/login/oauth2/code/facebook"
            >facebook</a
          ></v-btn
        >
        <v-btn color="pink"
          ><a href="http://localhost:6001/login/oauth2/code/github"
            >test</a
          ></v-btn
        >
      </div>
    </div>
    <footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import LayoutHeader from "@/components/layout/Header.vue";
import LayoutFooter from "@/components/layout/Footer.vue";

@Component({
  components: {
    LayoutHeader,
    LayoutFooter
  }
})
export default class HomeView extends Vue {}
</script>
<style>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
.main-container {
  flex: 1;
}
</style>
