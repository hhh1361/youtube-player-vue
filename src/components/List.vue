<template>
  <div class="list">
    {{ something }}
  </div>
</template>

<script>
export default {
  name: 'List',
  computed: {
    something() {
      return this.$store.state.list;
    },
  },
  methods: {},
};
</script>

<style scoped>
.list {}
</style>
