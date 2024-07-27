<template>
    <div>
        <!-- <AddJewelscomponentsPreviewImage></AddJewelscomponentsPreviewImage> -->
        <AddJewelsComponentsAddJewel></AddJewelsComponentsAddJewel>
         <!-- ldflvm -->
    </div>
</template>

<!-- 
<template>
    <v-container>
      <v-row>
        <v-col>
          <v-file-input
            v-model="image"
            label="Upload Image"
            accept="image/*"
            @change="previewImage"
          ></v-file-input>
          <v-img
            v-if="imageData"
            :src="imageData"
            aspect-ratio="1.0"
            max-width="300"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        image: null,
        imageData: null,
      };
    },
    methods: {
      previewImage(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.imageData = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      },
    },
  };
  </script> -->