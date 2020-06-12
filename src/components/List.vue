<template>
  <div
    class="list"
    @scroll="loadMoreVideos"
  >
    <ListItem
      v-for="item in list"
      :id="item.id"
      :key="item.id.videoId"
      :snippet="item.snippet"
      :etag="item.etag"
    >
      />
    </listitem>
  </div>
</template>

<script>
import ListItem from './ListItem.vue';
import getVideos from '../api/getVideos';

export default {
  name: 'List',
  components: {
    ListItem,
  },
  computed: {
    list() {
      return this.$store.state.list;
    },
    text() {
      return this.$store.state.searchInfo.searchText;
    },
    token() {
      return this.$store.state.searchInfo.nextPageToken;
    },
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
  methods: {
    async loadMoreVideos(e) {
      if (!this.isLoading) {
        const element = e.target;
        if (element.scrollTop + element.clientHeight >= element.scrollHeight - 500) {
          this.$store.commit('isLoading', true);
          const response = await getVideos(this.text, this.token);
          this.$store.commit('addVideos', response.items);
          this.$store.commit('updateToken', response.nextPageToken);
          this.$store.commit('isLoading', false);
        }
      }
    },
  },
};
</script>

<style scoped>
.list {
  padding: 25px;
  overflow: auto;
  height: 550px;
}
  ::-webkit-scrollbar {
  width: 20px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: rgba(197, 197, 197, 0.192);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #7e7e7e85;
}
@media (max-width: 768px) {
  .list {
    width: 768px;
    height: 920px;
  }
}
</style>
