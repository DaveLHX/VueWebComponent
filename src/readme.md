#CSAR vue js prototype

##Web Component

- To work in **Edge** you must add a polyfill https://unpkg.com/@webcomponents/webcomponentsjs@2.0.0/webcomponents-loader.js
- https://github.com/webcomponents/webcomponentsjs
- vuetify Styles must be in the shadowdom (when creating a web component)

###Sample HTML code for working web component

<meta charset="utf-8">
<!-- must be first -->
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.0.0/webcomponents-loader.js"></script>

<script src="https://unpkg.com/vue"></script>
<script src="./Request-Form.js"></script>

<!-- must be last -->
<script src="https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.js"></script>

<Request-Form></Request-Form>

When trying to include js as a hyperlink import I get the following
This dependency was not found:

- https://unpkg.com/@webcomponents/webcomponentsjs@2.0.0/webcomponents-loader.js in ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RequestFormForExport.vue?vue&type=script&lang=js&shadow

To install it, you can run: npm install --save https://unpkg.com/@webcomponents/webcomponentsjs@2.0.0/webcomponents-loader.js

But this does not work. I will include it manually

The styles from the theme only work in Edge (when using webcompnents-loader.js), not Chrome.
The styles from the theme are created outside of the shadowdom. If I move them in then they apply to the buttons in Chrome.

issue with vuetify
https://github.com/vuetifyjs/vuetify/issues/5054

questions:
Can I change a vuetify theme if I am not using the cli?
-the main issue is that vuetify adds a style section in the head of the page
Can I use bootstrap and achieve a functional result?
An other library?
