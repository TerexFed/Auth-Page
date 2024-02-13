<template>
  <div class="homepage">
    <div class="content">
      <h2>Home page</h2>
      <p class="text">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
      <button @click="navigate">Authorization</button>
    </div>
    <homepagepic></homepagepic>
  </div>
</template>
<script>
import {} from 'vue-router'
import homepagepic from '../assets/homepagepic.vue'
export default {
    components: {homepagepic},
    methods: {
      navigate(){
        this.$router.push('/login')
      }
    },
};
</script>
<style scoped>
.homepage {
  display: flex;
  justify-content: center;
  align-items: center;
}
.text {
  width: 497px;
  font-weight: 400;
}
button {
  width: 208px;
  height: 43px;
  border: none;
  border-radius: 2px;
  background: rgb(255, 100, 100);
  color: rgb(255, 255, 255);
  font-size: 20px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0px;
  cursor: pointer;
}
</style>
