<template>
    <div>
      <v-carousel show-arrows="hover" hide-delimiters height="800">
        <v-carousel-item src="https://demo.codezeel.com/prestashop/PRS15/PRS150362/modules/cz_imageslider/views/img/sample-2.jpg" cover>
          <template v-slot:default>
            <v-row class="fill-height" align="center">
              <v-container class="text-center">
                    <!-- content -->
              </v-container>
            </v-row>
          </template>
        </v-carousel-item>
        <v-carousel-item src="https://demo.codezeel.com/prestashop/PRS15/PRS150362/modules/cz_imageslider/views/img/sample-1.jpg" cover>
          <template v-slot:default>
            <v-row class="fill-height" align="center">
              <v-container class="text-center">
                <!-- content -->
              </v-container>
            </v-row>
          </template>
        </v-carousel-item>
        <v-carousel-item src="https://demo.codezeel.com/prestashop/PRS15/PRS150362/modules/cz_imageslider/views/img/sample-3.jpg" cover>
          <template v-slot:default>
            <v-row class="fill-height" align="center">
              <v-container class="text-center">
                   <!-- content -->
              </v-container>
            </v-row>
          </template>
        </v-carousel-item>
      </v-carousel>
      <v-card width="80%" class="ma-auto rounded my-5" elevation="0"> 
            <v-item-group selected-class="bg-primary">
    <v-container>
      <v-row class="pt-5">
        <v-col
          v-for="NewItem,Index in NewItems" :key="Index"
          cols="12"
          md="4"
        >
          <v-item >
            <v-card
              class="d-flex align-center"
               dark
              @click="toggle"
            >
             <v-img :src="NewItem.image"></v-img>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
  
    
  
        <!-- <v-row class="my-5">  
            <v-col lg="4" sm="12" md="12" class="d-flex align-center"
            > 
          ></v-col>
          <v-col lg="8" sm="12" md="12">
            
          </v-col>
        </v-row>  -->
  
        <!-- <v-row class="d-flex">
          <v-col xs="12" cols="12">
            
          </v-col>
          <v-col cols="12">
            
          </v-col>
        </v-row> -->
  
         
      </v-card>
    </div>
  </template>
  <script>
export default{
    name:"Carousel",
    data(){
        return{
            NewItems:[{
                image:"https://demo.codezeel.com/prestashop/PRS15/PRS150362/modules/cz_categoryimagelist/views/img/17-cz_categoryimagelist.jpg",
                endpoint:"",
            },
            {
                image:"https://demo.codezeel.com/prestashop/PRS15/PRS150362/modules/cz_categoryimagelist/views/img/18-cz_categoryimagelist.jpg",
                endpoint:"",
            },
            {
                image:"https://demo.codezeel.com/prestashop/PRS15/PRS150362/modules/cz_categoryimagelist/views/img/27-cz_categoryimagelist.jpg",
                endpoint:"",
            }]
        }
    }
}</script>
  