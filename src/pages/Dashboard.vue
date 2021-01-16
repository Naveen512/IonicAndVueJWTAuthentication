<template>
  <master-layout pageTitle="Dashboard">
    <ion-card>
      <ion-card-header>
        <ion-card-title>Welcome!</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <ion-item>
          <ion-label>Owner Name:</ion-label>
          <ion-label>{{ authData.userName }}</ion-label>
        </ion-item>
      </ion-card-content>
    </ion-card>
    <ion-card>
      <ion-card-header>
        <ion-button expand="full" @click="showTodos()">Show Todos</ion-button>
        <ion-card-title>Here all your todos</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <ion-item v-for="(todo,index) in allTodos" :key="index">
          <ion-label>{{todo}}</ion-label>
        </ion-item>
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
  IonButton
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
    IonButton
  },
  computed: {
    ...mapGetters("auth", {
      authData: "getAuthData",
    }),
    ...mapGetters("todo",{
      allTodos:"getAllTodos"
    })
  },
  methods:{
    ...mapActions('todo',{
      fetchTodos:"fetchTodos"
    }),
    async showTodos(){
      await this.fetchTodos();
    }
  }
};
</script>