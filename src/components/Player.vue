<template>
  <div class="player">
    <iframe
      v-if="playerEnabled"
      class="iframe"
      title="iframe"
      width="620"
      height="340"
      :src="url"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
</template>

<script>
export default {
  name: 'Player',
  computed: {
    url() {
      return `https://www.youtube.com/embed/${this.$store.state.currentVideo}`;
    },
    playerEnabled() {
      return !!this.$store.state.currentVideo;
    },
  },
  methods: {},
};
</script>

<style scoped>
.player {
    width: 793px;
    height: 533px;
    background: url('../assets/player/player.png');
    background-size: 100%;
    overflow: hidden;
}
.player:after {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: -1;
    content: '';
    background:
        transparent url('../assets/background/background.png') repeat top left;
}
.iframe {
    margin: 100px 0px 0px 1px;
}
</style>
