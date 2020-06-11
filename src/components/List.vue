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
.list {}
</style>
