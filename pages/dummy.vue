<!-- <template>
    <v-container>
      <v-row>
        <v-col v-for="i in numberOfCards" :key="i" :cols="12" :md="12 / numberOfCards">
          <resolution-card />
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import ResolutionCard from '~/components/ResolutionCard/Card.vue';
  
  export default {
    components: {
      ResolutionCard
    },
    data() {
      return {
        numberOfCards: 1
      };
    },
    mounted() {
      this.updateNumberOfCards();
      window.addEventListener('resize', this.updateNumberOfCards);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.updateNumberOfCards);
    },
    methods: {
      updateNumberOfCards() {
        const width = window.innerWidth;
        if (width >= 1200) {
          this.numberOfCards = 5;
        } else if (width >= 960) {
          this.numberOfCards = 4;
        } else if (width >= 720) {
          this.numberOfCards = 3;
        } else if (width >= 480) {
          this.numberOfCards = 2;
        } else {
          this.numberOfCards = 1;
        }
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
   -->




   <template>
    <v-container>
      <v-form>
        <div v-for="(row, rowIndex) in rows" :key="rowIndex" class="row">
          <v-row>
            <v-col
              v-for="(field, fieldIndex) in row.fields"
              :key="fieldIndex"
              cols="12"
              sm="6"
              md="3"
            >
              <v-text-field v-model="field.value" :label="field.label"></v-text-field>
            </v-col>
          </v-row>
        </div>
        <v-btn @click="addRow">Add Row</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        rows: [
          { fields: this.createFields() }
        ],
      };
    },
    methods: {
      createFields() {
        return [
          { label: 'Field 1', value: '' },
          { label: 'Field 2', value: '' },
          { label: 'Field 3', value: '' },
          { label: 'Field 4', value: '' },
        ];
      },
      addRow() {
        this.rows.push({ fields: this.createFields() });
      },
    },
  };
  </script>
  
  <style scoped>
  .row {
    margin-bottom: 20px;
  }
  </style>
  