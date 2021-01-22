<template>
  <div>
    <ModalFactory />
    <router-view />
  </div>
</template>

<script>
import ModalFactory from "./components/ModalFactory/index";
export default {
  components: {
    ModalFactory,
  },
};
</script>
