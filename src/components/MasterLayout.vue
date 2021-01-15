<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ pageTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot> </slot>
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonPage,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle
} from "@ionic/vue";
export default {
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
  },
  props: ["pageTitle"],
  
};
</script>
<style scoped>
ion-toolbar{
    --background: var(--ion-color-primary);
    --color: var(--ion-color-primary-contrast)
}
</style>