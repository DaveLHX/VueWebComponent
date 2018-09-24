<template>
<section>
 <h1>Rations</h1>

 <form v-on:submit.prevent="addItem">
     <button type="submit">Add Item</button>
  </form>
<span class="panel" >
<h2>This panel is bound to the model</h2>
<ul>
  <li v-for="item in items">
    {{ item.year }}
    <input type="Text" v-model="item.text">
    <input type="checkbox" v-model="item.active">
    <button v-on:click="del(item)">X</button>
  </li>
</ul>
</span >


<span class="panel">
<h2>This panel is bound to the same data</h2>
<ul>
  <li v-for="item in items">
    {{ item.year }}
      <input type="Text" v-model="item.text">
    <input type="checkbox" v-model="item.active">
  </li>
</ul>
</span >


<div class="data">
<h2>This is the json data</h2>
  {{items}}
</div>

</section>

</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          year: "2012",
          active: false,
          text: "make a list"
        },
        {
          year: "2013",
          active: true,
          text: "delete the list"
        }
      ]
    };
  },
  methods: {
    addItem() {
      const newitem = {
        year: `${2012 + this.items.length}`,
        active: true,
        text: `item ${this.items.length + 1}`
      };

      this.items.push(newitem);
    },
    del(item) {
      const index = this.items.indexOf(item);
      if (index > -1) {
        this.items.splice(index, 1);
      }
    }
  }
};
</script>
