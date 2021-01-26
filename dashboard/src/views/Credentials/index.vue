<template>
  <div>
    <div class="flex justify-center w-full h-28 bg-brand-main">
      <HeaderLogged />
    </div>

    <div class="flex flex-col justify-center items-center h-64 bg-brand-gray">
      <h1 class="text-4xl font-black text-center text-gray-800">Credenciais</h1>
      <p class="text-lg font-regular text-center text-gray-800">Guia de instalação e geração de suas credenciais.</p>
    </div>
  </div>
</template>

<script>
import HeaderLogged from "../../components/HeaderLogged/index.vue";

export default {
  components: {
    HeaderLogged,
  },
};
</script>