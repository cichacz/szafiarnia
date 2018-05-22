import FirebaseDAO from "@/dao/FirebaseDAO";

declare module 'vue/types/vue' {
  //Declare augmentation for Vue
  interface Vue {
    readonly $dao: FirebaseDAO
  }
}