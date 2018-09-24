<template>

  


<v-form v-model="valid">
  <h1>Please complete the activity details</h1>
    <v-container>
      <v-layout row wrap>
         <v-flex xs12 sm6>
    <v-text-field
      v-model="activityItem.name"
      :rules="nameRules"
      :counter="20"
      label="Name"
      required
         outline
    ></v-text-field>
     <v-text-field
      v-model="activityItem.location"
      label="Location"
      required
       prepend-icon="place"
         outline
    ></v-text-field>
    
    </v-flex> 
  
 <v-flex xs12 sm6>
    <v-text-field   
      label="Phone"
      required
        outline
        append-icon="phone"
    ></v-text-field>
   
    </v-flex>    
   

     <v-flex xs12 sm12>
     <v-textarea
      v-model="activityItem.description"
      label="Description"
      required
      outline
    ></v-textarea>
    </v-flex>
   </v-layout>
    </v-container>

  </v-form>
</template>
<script>
export default {
  name: "activity",
  props: ["activityItem"],
  data: () => ({
    valid: false,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => v.length <= 20 || "Name must be less than 10 characters"
    ]
  })
};
</script>

