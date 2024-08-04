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
      <v-row lg="2" class="d-flex justify-end pa-3">
        <v-btn color="amber" @click="addRow" class="text-capitalize"  v-if="
              $vuetify.display.mdAndDown
                ? addJewelArr.length >= 1
                  ? false
                  : true
                : $vuetify.display.lgAndUp
                ? addJewelArr.length >= 4
                  ? false
                  : true
                : false
            "
          ><v-icon class="mx-2">mdi-cart-plus</v-icon>Add Row</v-btn
        >
      </v-row>

      <!-- <v-row>
        <v-col>

        </v-col>
      </v-row> -->
      <v-row wrap lg-nowrap>
        <v-col v-for="(addJewel, rowIndex) in addJewelArr" :key="rowIndex" lg="6" cols="12">
          <v-card class="pa-4" elevation="0">
            <v-row>
              <v-col  >
                <v-file-input
                  :ref="'fileInput' + rowIndex"
                  accept="image/*"
                  style="display: none"
                  @change="onFileChange(rowIndex, $event)"
                ></v-file-input>
                <div @click="triggerFileInput(rowIndex)">
                  <img :src="addJewel.img" alt="Click to upload" width="100%" />
                </div>
                <!-- :width="$vuetify.display.mdAndDown?'100%':'60%'" -->
              </v-col>
              <v-col >
                <v-row>
                  <v-text-field
                    label="Jewels Title"
                    placeholder="Jewels Title"
                    variant="outlined"
                    density="comfortable"
                    v-model="addJewel.name"
                  ></v-text-field>
                </v-row>
                <v-row>
                  <v-text-field 
                    label="Jewel Price"
                    placeholder="Rs. 20000"
                    v-model="addJewel.price"
                    variant="outlined"
                    density="comfortable"
                  ></v-text-field>
                </v-row>
                <v-row>
                  <v-col lg="6">
                    <v-text-field
                      class="mx-auto"
                      label="Discount"
                      v-model="addJewel.other"
                      placeholder="Additional details"
                      variant="outlined"
                      density="comfortable"
                    ></v-text-field>
                  </v-col>
                  <v-col lg="6">
                    <v-text-field
                      class="mx-auto"
                      label="Charges"
                      v-model="addJewel.other"
                      placeholder="Additional details"
                      variant="outlined"
                      density="comfortable"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
              <v-divider></v-divider>
            </v-row>
          </v-card>
        </v-col>
        <!-- <div class="d-flex justify-center mt-4"> -->
          <!-- </div> -->
        </v-row>
        <v-row class="d-flex justify-center">
        <v-btn variant="outlined" @click="addProduct">Add Product</v-btn>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultImageUrl:
        "https://tse3.mm.bing.net/th?id=OIP.IhiqRWFamp-enjV2csKdzwHaE8&pid=Api&P=0&h=220",
      addJewelArr: [],
    };
  },
  methods: {
    triggerFileInput(index) {
      this.$refs["fileInput" + index][0].click();
    },
    onFileChange(rowIndex, event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.addJewelArr[rowIndex].img = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    addRow() {
      this.addJewelArr.push(this.createAddJewel());
    },
    createAddJewel() {
      return {
        name: "",
        price: 0,
        other: "",
        img: this.defaultImageUrl,
      };
    },
    addProduct() {
      console.log(this.addJewelArr);
    },
  },
  mounted() {
    this.addRow();
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
