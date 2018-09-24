<template>
      <!-- <ul>
        <li v-for="product in products" :key=product.name>
            {{ product.quantity}} {{ product.name}}
        </li>
    </ul>-->
     <v-data-table
    :headers="headers"
    :items="products"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td class="text-xs-left">{{ props.item.id }}</td>
      <td class="text-xs-left">{{ props.item.name}}</td>
    </template>
  </v-data-table>
</template>
<script>
export default {
  data() {
    return {
      products: [],
      headers: [
        {
          text: 'Id',
          align: 'left',
          sortable: true,
          value: 'id',
        },
        { text: 'Name', value: 'name' },
      ],
    };
  },
  created() {
    fetch('https://api.myjson.com/bins/74l63')
      .then(response => response.json())
      .then((json) => { this.products = json.products; });
  },
};
</script>

