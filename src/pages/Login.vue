<template>
  <master-layout pageTitle="Login Form">
    <ion-card>
      <ion-card-header>
        <ion-card-title>SignIn</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <ion-item>
          <ion-label position="floating">User Name</ion-label>
          <ion-input v-model="userInfo.username"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Password</ion-label>
          <ion-input type="password" v-model="userInfo.password"></ion-input>
        </ion-item>
        <ion-button expand="full" @click="login()">Login</ion-button>
      </ion-card-content>
    </ion-card>
  </master-layout>
</template>
<script>
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
} from "@ionic/vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
  },
  data() {
    return {
      userInfo: {
        username: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapGetters("auth", {
      loginStatus: "getLoginStatus",
    }),
  },
  methods: {
    ...mapActions("auth", {
      loginUser: "loginUser",
    }),
    async login() {
      if (this.userInfo.username && this.userInfo.password) {
        await this.loginUser(this.userInfo);
        if(this.loginStatus === "success"){
            this.$router.push("/dashboard");
        }else{
            alert('falied to login')
        }
      }
    },
  },
};
</script>