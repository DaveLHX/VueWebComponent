<template>
<!-- This template is used to generate the web component that can be used in a HTML file.  It should not be referenced in the vue application -->
<section>
<!-- Thee stylesheets are added here so that they are included in the shadow dom when the webcontrol is created -->
<!-- <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet"> -->

 <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet"> 
<!-- <style src="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"></style> -->
<link href="https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css" rel="stylesheet">  

<!-- vuetify controls must be inside a v-app tag -->
  
    <!-- <link href="./icons.css" rel="stylesheet"> -->
    <request-form></request-form>
 

</section>
</template>
<!-- this last one worked but the mateiral icons stopped working -->
 <!-- <style src="../../node_modules/vuetify/dist/vuetify.min.css"></style> -->


<script>
// @import is CSS/SASS syntax to include other files.
// import is modern ES6 syntax to include modules.
// require is AMD/CMD syntax currently used by Node.

// import 'vuetify/dist/vuetify.min.css'   THIS does not work
// import '@/../node_modules/vuetify/dist/vuetify.min.css';
// import "../../node_modules/vuetify/dist/vuetify.min.css";
//require("@/../node_modules/vuetify/dist/vuetify.min.css");

//these two seem to work kind of...in chrome but IE wont show.  Probably including these is not a good idea anyway because of size and caching etc...
//should be left to the page to load the proper JS.
// require("@/../node_modules/vuetify/dist/vuetify.min.js");
// require("@/assets/webcomponents-loader.js");
//https://github.com/vuejs-templates/webpack/issues/604
import RequestForm from "@/components/RequestForm.vue";

//import Vuetify from "vuetify"; //this command means we dont have to add a link to the .js in the page (but its huge)

export default {
  components: { RequestForm }
};
</script>


