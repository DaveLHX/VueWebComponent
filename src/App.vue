<template>
 <v-app id="inspire" :dark="isDark">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense v-for="item in menuItems" :key=item.title>
      <v-list-tile  @click="" :to="item.route">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="blue" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>CSAR</v-toolbar-title> <v-switch
            label="Toggle dark them"
            v-model="isDark"
          ></v-switch>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout        >
          <v-flex >
           <router-view/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="blue" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>


<script>
export default {
  data: () => ({
    isDark: false,
    drawer: null,
    menuItems: [
      { title: "Requests", icon: "list_alt", route: "/" }, // todo:use the router alias?
      { title: "Request Form", icon: "assignment", route: "requestform" }
    ]
  }),
  props: {
    source: String
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
