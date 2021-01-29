<template>
  <component :is="name" v-bind="$props" />
</template>

<script>
import Loading from './Loading.vue';
import Copy from './Copy.vue';
import ChevronDown from './ChevronDown.vue';

export default {
  props: {
    name: { type: String, required: true }
  },
  components: {
    Loading,
    Copy,
    ChevronDown
  }
}
</script>

<style>

</style>