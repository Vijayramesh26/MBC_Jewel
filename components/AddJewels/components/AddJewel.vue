<template>
  <div>
    <v-card
      height="90vh"
      :width="$vuetify.display.mdAndDown ? '80%' : '70%'"
      class="ma-auto rounded mt-5"
      elevation="0"
    >
      <v-layout row wrap class="mb-5 pl-4 pt-4">
        <b class="mt-2">
          <v-icon class="mx-1 mb-2">mdi-tag-plus</v-icon>Add Products
        </b>
      </v-layout>
      <v-card elevation="0">
        <v-row wrap lg-nowrap class="d-flex justify-center align-center">
          <v-col lg="6" cols="12" >
            <v-file-input
              ref="fileInput"
              accept="image/*"
              style="display: none"
              @change="onFileChange"
            ></v-file-input>
            <div @click="triggerFileInput">
              <img
                :src="imageUrl"
                alt="Click to upload"
                :width="$vuetify.display.mdAndDown ? '100%' : '90%'"
              />
            </div>
          </v-col>
          <v-col lg="6" cols="12">
            <v-card class="py-5" elevation="0">
              <v-row lg="2">
                <v-text-field
                  label="Jewels Title"
                  placeholder="Jewels Title"
                  class="mx-4"
                  variant="outlined"
                ></v-text-field
              ></v-row>
              <v-row lg="2">
                <v-text-field
                  type="number"
                  label="Jewel Price"
                  placeholder="Rs. 20000"
                  class="mx-4"
                  variant="outlined"
                ></v-text-field>
              </v-row>
              <v-row lg="2">
                <v-text-field
                  label="Other Info"
                  placeholder="Additional details"
                  class="mx-4"
                  variant="outlined"
                ></v-text-field
              ></v-row>
              <v-row lg="2" class="d-flex justify-center">
                <v-btn variant="outlined">Add Product</v-btn></v-row
              >
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageUrl:
        "https://tse3.mm.bing.net/th?id=OIP.IhiqRWFamp-enjV2csKdzwHaE8&pid=Api&P=0&h=220", // Default image URL
      file: null,
    };
  },
  methods: {
    // Method to trigger the file input dialog
    triggerFileInput() {
      this.$refs.fileInput.$el.querySelector("input").click();
    },
    // Method to handle the file change event
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrl = e.target.result; // Update the image URL to the new image
        };
        reader.readAsDataURL(file); // Read the new file as a data URL
      }
    },
  },
};
</script>
