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
} from "@ionic/vue";
import { mapGetters } from "vuex";
export default {
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
  },
  computed: {
    ...mapGetters("auth", {
      authData: "getAuthData",
    }),
  },
};
</script>