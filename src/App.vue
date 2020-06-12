<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col cols="8">
          <Player />
        </b-col>
        <b-col>
          <Search />
          <List />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Player from './components/Player.vue';
import List from './components/List.vue';
import Search from './components/Search.vue';


export default {
  name: 'App',
  components: {
    Player,
    List,
    Search,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
