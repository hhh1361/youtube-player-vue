<template>
  <b-container
    fluid
    class="list-item"
  >
    <div class="list-item_author">
      {{ author }}
    </div>
    <div
      class="list-item_preview"
      :style="{ backgroundImage: `url('${snippet.thumbnails.high.url}')` }"
      @click="chooseVideo"
    />
    <div class="list-item_description">
      {{ description }}
    </div>
  </b-container>
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
  computed: {
    author() {
      return this.snippet.channelTitle;
    },
    description() {
      return this.snippet.title;
    },
  },
  methods: {
    chooseVideo() {
      console.log(this.snippet);
      this.$store.commit('chooseVideo', this.id.videoId);
    },
  },
};
</script>

<style scoped>
.list-item_preview {
  width: 280px;
  height: 210px;
  background-size: 100%;
  margin: -20px 0;
  box-shadow: 0px 0px 10px 0px black;
}
.list-item {
  width: 310px;
  margin-bottom: 70px;
  background: rgba(0, 0, 0, 0.664);
  border-radius: 30px;
  box-shadow: 0 0 20px 0px black;
  color: rgba(255, 255, 255, 0.582);
}
.list-item_author {
  font-weight: bold;
  font-size: 22px;
}
@media (max-width: 768px) {
  .list-item {
    margin-bottom: 170px;
  }
  .list-item_preview {
    width: 560px;
    height: 420px;
    background-size: 100%;
    margin: auto;
    box-shadow: 0px 0px 10px 0px black;
  }
  .list-item_author {
    font-weight: bold;
    font-size: 50px;
  }
  .list-item_description {
    font-size: 30px;
  }
}
</style>
