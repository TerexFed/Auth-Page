<template>
  <div class="profile">
    <h2 v-if="this.error !== ''">Authentication Problem</h2>
    <div class="myprofile" v-else>
      <h2>My Profile</h2>
      <div class="info">
        <div>
          <p>Username: {{ this.response.username }}</p>
          <p>Name: {{ this.response.firstName }}</p>
          <p>Lastname: {{ this.response.lastName }}</p>
          <p>Gender: {{ this.response.gender }}</p>
          <p>Email: {{ this.response.email }}</p>
        </div>
        <img :src="this.response.image" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      response: {},
      error: "",
    };
  },
  mounted() {
    fetch("https://dummyjson.com/auth/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) =>
        data.message ? (this.error = data.message) : (this.response = data)
      );
  },
};
</script>
<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.myprofile {
  display: flex;
  flex-direction: column;
}
.info {
  display: flex;
  align-items: center;
}
h2 {
  color: rgb(33, 36, 61);
  font-size: 44px;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: 0px;
  text-align: left;
}
p {
  color: rgba(0, 0, 0, 0.87);
  font-size: 16px;
  font-weight: bolder;
  line-height: 24px;
  letter-spacing: 0.15px;
  text-align: left;
  height: 40px;
  box-shadow: 0px 2.75px 9px 0px rgba(0, 0, 0, 0.19),
    0px 0.25px 3px 0px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 0 20px 0 15px;
}
img {
  margin-left: 150px;
}
</style>
