<template>
  <div class="list">
    <ul v-if="list.length">
      <ListItem
        v-for="item in list"
        :id="item.id"
        :key="item.id.videoId"
        :snippet="item.snippet"
        :etag="item.etag"
      >
        />
      </listitem>
    </ul>
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
  overflow: auto;
  height: 600px;
}
  ::-webkit-scrollbar {
  width: 20px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: rgba(255, 0, 0, 0.135);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #b300003f;
}
</style>
