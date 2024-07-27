<template>
    <div>
      <v-card
        height="90vh"
        width="80%"
        class="ma-auto rounded mt-5"
        elevation="0"
      >
        <v-layout row wrap class="mb-5 pl-4 pt-4">
          <b class="mt-2">
            <v-icon class="mx-1 mb-2">mdi-tag-plus</v-icon>Add Products
          </b>
        </v-layout>
        <v-card
          :height="$vuetify.display.mdAndDown ? '90vh' : '75vh'"
          elevation="0"
          style="border: 3px solid black"
          :width="$vuetify.display.mdAndDown ? '100%' : '30%'"
        >
          <v-sheet class="d-flex flex-nowrap">
            <v-row no-gutters>
              <v-col cols="12" class="pa-5  d-flex align-center justify-center">
                <v-file-input
               class="custom-file-input"
                  v-model="image"
                  label="Upload Image"
                  accept="image/*"
                  @change="previewImage"
                  prepend-icon=""
                  prepend-inner-icon="mdi-folder-image"
                  placeholder="Select your files"
                  variant="outlined"
                ></v-file-input>
                <!-- v-if="disableFilefield" -->

                <!-- <v-hover v-slot="{ isHovering, props }" open-delay="200">
                  <v-img
                    v-bind="props"
                    :class="{ 'on-hover': isHovering }"
                    v-if="imageData"
                    accept="image/*"
                    :src="imageData"
                    aspect-ratio="1.0"
                      @change="previewImage"
                    max-width="500"
                    height="200"
                  >
                    <v-icon
                      v-if="isHovering"
                      class="close-icon"
                      @click="handleClose"
                    >
                      mdi-close
                    </v-icon>
                  </v-img>
                  <span
                    class="d-flex justify-center mt-5"
                    v-if="fileNameDisable"
                  >
                    {{ fileName }}
                  </span>
                </v-hover> -->
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Jewels Title"
                  placeholder="Jewels Title"
                  class="mx-4"
                  variant="outlined"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  type="number"
                  label="Jewel Price"
                  placeholder="Rs. 20000"
                  class="mx-4"
                  variant="outlined"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Other Info"
                  placeholder="Additional details"
                  class="mx-4"
                  variant="outlined"
                ></v-text-field>
              </v-col>
              <v-col class="d-flex justify-center">
                <v-btn variant="outlined">Add Product</v-btn>
              </v-col>
            </v-row>
          </v-sheet>
        </v-card>
      </v-card>
    </div>
  </template>
  
  <script>
  import defaultImage from '@/assets/download.jpeg'; // Import default image
  
  export default {
    data() {
      return {
        image: null,
        imageData: defaultImage, // Set default image path
        fileName: "",
        disableFilefield: false,
        fileNameDisable: false,
      };
    },
    methods: {
      previewImage(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.imageData = e.target.result;
            this.fileName = file.name;
          };
          reader.readAsDataURL(file);
          this.disableFilefield = false;
          this.fileNameDisable = false;
        }
      },
      handleClose() {
        this.imageData = defaultImage; // Reset to default image
        this.fileName = "";
        this.disableFilefield = true;
        this.fileNameDisable = true;
      },
    },
  };
  </script>
  
  <style>
  .close-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
  .on-hover {
    filter: brightness(0.7);
  }
  .custom-file-input {
  height: 400px; /* Adjust the width as needed */
  width:20px;
}
  </style>
  

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