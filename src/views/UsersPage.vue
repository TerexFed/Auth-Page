<template>
  <div>
    <ul class="users">
      <li v-for="(user, index) in users" :key="index" class="user">
        <p>{{ `${user.firstName} ${user.lastName} ${user.maidenName}` }}</p>
        <sup>{{ user.email }}</sup>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => (this.users = data.users));
  },
};
</script>
<style>
p {
  font-weight: bold;
}
li {
  list-style-type: none;
}
.users {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.user {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  width: 30vw;
  border-radius: 10px;
  box-shadow: 0px 2.75px 9px 0px rgba(0, 0, 0, 0.19),
    0px 0.25px 3px 0px rgba(0, 0, 0, 0.04);
  margin-bottom: 20px;
  padding: 10px;
}
</style>
