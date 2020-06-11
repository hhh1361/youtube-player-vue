<template>
  <div
    class="listItem"
    :style="{ backgroundImage: `url('${snippet.thumbnails.high.url}')` }"
    @click="chooseVideo"
  />
</template>

<script>
export default {
  name: 'ListItem',
  props: ['etag', 'id', 'snippet'],
  computed: {},
  methods: {
    chooseVideo() {
      console.log(this.snippet);
      this.$store.dispatch('chooseVideo', this.id.videoId);
    },
  },
};
</script>

<style scoped>
.listItem {
  width: 280px;
  height: 210px;
  background-size: 100%;
}
</style>
