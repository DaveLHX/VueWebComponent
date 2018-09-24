<template>
<section>
  <h1>Please complete the activity details</h1>


<v-form v-model="valid">
    
    <v-text-field
      v-model="activityItem.name"
      :rules="nameRules"
      :counter="20"
      label="Name"
      required
    ></v-text-field>
     <v-text-field
      v-model="activityItem.location"
      label="Location"
      required
    ></v-text-field>
     <v-textarea
      v-model="activityItem.description"
      label="Description"
      required
    ></v-textarea>


  </v-form>
  </section>
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

