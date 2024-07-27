<template>
    <v-card class="mx-auto" max-width="400">
      <v-card-title>
        Screen Resolution
      </v-card-title>
      <v-card-text>
        <div>
          Width: {{ "screenWidth" }}px
        </div>
        <div>
          Height: {{ "screenHeight" }}px
        </div>
      </v-card-text>
    </v-card>
  </template>
<!--   
  <script>
  export default {
    data() {
      return {
        screenWidth: 0,
        screenHeight: 0
      }
    },
    mounted() {
      this.updateResolution();
      window.addEventListener('resize', this.updateResolution);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.updateResolution);
    },
    methods: {
      updateResolution() {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
   -->