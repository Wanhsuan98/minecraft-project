<template>
  <div class="container contactForm">
    <h3>Login</h3>
    <div class="inputBox">
      <input type="text" placeholder="Account" v-model="user.Account" />
    </div>
    <div class="inputBox">
      <input type="password" placeholder="Password" v-model="user.Password" />
    </div>
    <div class="inputBox">
      <input type="submit" value="Login" @click="Login(user)" />
    </div>
  </div>
  <router-link to="/editor">編輯最新消息</router-link>
  <br />
  <router-link to="/allnews">查看最新消息</router-link>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      user: {
        Account: "",
        Password: "",
      },
    };
  },
  methods: {
    ...mapActions(["Login"]),
  },
};
</script>

<style scoped>
.contactForm {
  padding: 75px 50px;
  background: #fff;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin-top: 50px;
}
.contactForm h3 {
  color: #111;
  font-size: 1.2em;
  margin-bottom: 20px;
  font-weight: 500;
}
.contactForm .inputBox {
  position: relative;
  width: 100%;
  margin-bottom: 20px;
}
.contactForm .inputBox input {
  width: 100%;
  border: 1px solid #555;
  padding: 10px;
  color: #111;
  outline: none;
  font-size: 16px;
  font-weight: 300;
  resize: none;
}
.contactForm .inputBox input[type="submit"] {
  font-size: 1em;
  color: #fff;
  background: #52975f;
  display: inline-block;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  transition: 0.5s;
  max-width: 100px;
  font-weight: 500;
  border: none;
  cursor: pointer;
}
</style>
