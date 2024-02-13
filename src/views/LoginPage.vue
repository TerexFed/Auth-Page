<template>
  <div class="cont">
    <form @submit="$event.preventDefault()">
      <div class="top">
        <p>Authorization</p>
        <p style="color: red" v-if="this.res.message">{{ this.res.message }}</p>
      </div>
      <div class="fields">
        <label>Login</label>
        <input type="text" v-model="login" />
        <label>Password</label>
        <input type="text" v-model="password" />
      </div>
      <button @click="auth(login, password)">Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      login: "",
      password: "",
      res: {},
    };
  },
  methods: {
    auth(log, pas) {
      fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: log,
          password: pas,
        }),
      })
        .then((res) => res.json())
        .then((data) => ((this.res = data), this.res.token ? localStorage.setItem('token', this.res.token) : localStorage.removeItem('token')));
    },
  },
};
</script>
<style scoped>
.cont {
  display: flex;
  flex-direction: column;
  align-items: center;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
  height: 277px;
  border-radius: 10px;
  box-shadow: 0px 2.75px 9px 0px rgba(0, 0, 0, 0.19),
    0px 0.25px 3px 0px rgba(0, 0, 0, 0.04);
}
p {
  color: rgba(0, 0, 0, 0.87);
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: 0.15px;
  text-align: left;
}
.top {
  width: 80%;
  display: flex;
  justify-content: space-between;
}
.fields {
  display: flex;
  flex-direction: column;
}
label {
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.6);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.25px;
  text-align: left;
}
input {
  height: 30px;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 2.75px 9px 0px rgba(0, 0, 0, 0.19),
    0px 0.25px 3px 0px rgba(0, 0, 0, 0.04);
}
button {
  margin-top: 20px;
  color: rgba(0, 0, 0, 0.6);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.25px;
  background: transparent;
  border: none;
  cursor: pointer;
}
</style>
