<template>
  <div class="search-container">
    <input
      class="search"
      placeholder="Type to search..."
      @keyup="setList"
      @change="setList"
    >

    <input
      type="button"
      class="searchSubmit"
      value="Find"
      @change="setList"
    >
  </div>
</template>

<script>
import getVideos from '../api/getVideos';

export default {
  name: 'Search',
  data() {
    return {
      timer: null,
      searchText: null,
    };
  },
  methods: {
    setList(e) {
      clearTimeout(this.timer);
      if (this.searchText !== e.target.value && e.target.value) {
        if (e.type === 'keyup') {
        // setTimeout if onKeyUp
          this.timer = setTimeout(() => {
            this.applyDataFromApi(e);
          }, 2000);
        // no setTimeout if onSubmit
        } else {
          this.applyDataFromApi(e);
        }
      }
    },
    async applyDataFromApi(e) {
      this.$store.commit('isLoading', true);
      this.$store.commit('setList', []);
      this.searchText = e.target.value;
      const videos = await getVideos(e.target.value);
      this.$store.commit('isLoading', false);
      this.$store.commit('setList', videos.items);
      this.$store.commit('setSearchInfo', { searchText: e.target.value, nextPageToken: videos.nextPageToken });
    },
  },
};
</script>

<style scoped>
  .search {
    border: 1px solid rgb(207, 207, 207);
    border-radius: 5px;
    box-shadow: 0 0 25px 0 rgb(122, 122, 122);
    overflow: hidden;
    background: black;
    color: rgba(235, 235, 235, 0.719);
    text-align: center;
    height: 45px;
    line-height: 40px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    width: 300px;
  }
  .searchSubmit {
    width: 40px;
    height: 40px;
    background: url('../assets/icons/search.png') no-repeat;
    border: none;
    background-size: 100%;
    margin: 4px;
    color:rgba(255, 255, 255, 0);
  }
  .search-container {
    margin: 0px auto 20px auto;
    display: flex;
    width: 350px;
    justify-content: center;
  }
  @media (max-width: 768px) {
    .search-container {
      width: 768px;
    }
      .search {
      width: 60%;
      height: 100px;
      line-height: 100px;
      font-size: 35pt;
      margin: auto;
    }
    .searchSubmit {
      margin: 20px auto;
      width: 30%;
      height: 100px;
      background: black;
      border: 1px solid rgb(207, 207, 207);
      border-radius: 5px;
      box-shadow: 0 0 25px 0 rgb(122, 122, 122);
      overflow: hidden;
      color: rgba(235, 235, 235, 0.719);
      text-align: center;
      height: 100px;
      line-height: 100px;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 45pt;
    }
  }
</style>
