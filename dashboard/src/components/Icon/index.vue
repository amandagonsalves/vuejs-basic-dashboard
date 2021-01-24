<template>
  <component :is="name" v-bind="$props" />
</template>

<script>
import Loading from './Loading.vue';

export default {
  props: {
    name: { type: String, required: true }
  },
  components: {
    Loading
  }
}
</script>

<style>

</style>