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
  props: {
    etag: {
      type: String,
      default: '',
      required: true,
    },
    id: {
      type: Object,
      default: () => {},
      required: true,
    },
    snippet: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
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
  margin: 30px 0;
  box-shadow: 0px 0px 10px 0px black;
}
@media (max-width: 768px) {
  .listItem {
    width: 560px;
    height: 420px;
    background-size: 100%;
    margin: auto;
    box-shadow: 0px 0px 10px 0px black;
  }

}
</style>
