<template>
  <div class="list">
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

export default {
  name: 'List',
  components: {
    ListItem,
  },
  computed: {
    list() {
      return this.$store.state.list;
    },
  },
  methods: {},
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
