<template>
  <div id="app">
    <b-container class="app-container">
      <div class="player-section">
        <GoogleOauth />
        <Player />
      </div>
      <div class="search-section">
        <Search />
        <List />
      </div>
    </b-container>
  </div>
</template>

<script>
import Player from './components/Player.vue';
import List from './components/List.vue';
import Search from './components/Search.vue';
import GoogleOauth from './components/GoogleOauth.vue';


export default {
  name: 'App',
  components: {
    Player,
    List,
    Search,
    GoogleOauth,
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
.app-container {
  display: flex;
}
@media (max-width: 768px) {
  .app-container {
    flex-direction: column;
  }
}
</style>
