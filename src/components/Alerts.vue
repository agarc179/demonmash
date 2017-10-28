<template>
  <div class="waiting">
    Not yet available
    <head>
    <title>Crime list</title>
    </head>
    <body>
      <div id="app">
        <li v-for="element in list">
          <h1>{{list.description}}</h1>
          <h2>{{list.block}}</h2>
          <h3>{{list.date}}</h3>
          <h4>{{list.arrest}}</h4>
        </li>
      </div>
    </body>
  </div>
</template>
<script>
export default {
}
</script>

<script>
 var link = 'https://data.cityofchicago.org/resource/crimes.json'
 var data = {
   list: null
 }

new Vue ({
  el: '#app',
  data: data

 Vue.http.get(link).then(function(response){
   data.list =response.data;
}, function(error){
  console.log(error.statusText);
});
});


</script>
<style scoped>
  .waiting {
    padding: 10px;
    color: #555;
  }
</style>