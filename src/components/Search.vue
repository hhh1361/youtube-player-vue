<template>
  <input
    class="search"
    @keyup="setList"
    @change="setList"
  >
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
      if (this.searchText !== e.target.value) {
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
      this.searchText = e.target.value;
      const videos = await getVideos(e.target.value);
      this.$store.dispatch('setList', videos);
    },
  },
};
</script>

<style scoped>
</style>
