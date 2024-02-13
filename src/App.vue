<template>
  <div class="header">
    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/users">Users</router-link>
      <router-link to="/profile">Profile</router-link>
    </div>
  </div>
  <router-view class="rv"></router-view>
  <div class="footer">
    <div class="icons">
      <Facebook class="icon"></Facebook>
      <Instagram class="icon"></Instagram>
      <Twitter class="icon"></Twitter>
      <LinkedIn class="icon"></LinkedIn>
    </div>
    <sup>Copyright ©2020 All rights reserved</sup>
  </div>
</template>
<script>
import { RouterLink, RouterView } from "vue-router";
import Facebook from "./assets/Facebook.vue";
import Instagram from "./assets/Instagram.vue";
import Twitter from "./assets/Twitter.vue";
import LinkedIn from "./assets/LinkedIn.vue";
export default {
  components: { Facebook, Instagram, Twitter, LinkedIn },
};
</script>
<style>
body {
  font-family: Heebo;
  margin: 0;
  padding: 0;
}
h2 {
  color: rgb(33, 36, 61);
  font-size: 44px;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: 0px;
  text-align: left;
}
a {
  color: rgb(0, 0, 0);
  font-size: 20px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0px;
  text-align: right;
  text-decoration: none;
}
p {
  color: rgb(33, 36, 61);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
}
sup {
  color: rgb(33, 36, 61);
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: center;
}
.header {
  display: flex;
  justify-content: flex-end;
}
.links {
  display: flex;
  justify-content: space-evenly;
  width: 20vw;
  margin-right: 117px;
  margin-top: 30px;
}
.rv{
  margin: 80px 0 200px 0;
}
.icons{
  display: flex;
  justify-content: center;
}
.icon{
  margin: 0 20px 0 20px;
}
.footer {
  height: 182px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
