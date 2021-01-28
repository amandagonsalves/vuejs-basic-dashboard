<template>
  <div>
    <div class="flex justify-center w-full h-28 bg-brand-main">
      <HeaderLogged />
    </div>

    <div class="flex flex-col items-center justify-center h-64 bg-brand-gray">
      <h1 class="text-4xl font-black text-center text-gray-800">Feedbacks</h1>
      <p class="text-lg text-center text-gray-800 font-regular">
        Detalhes de todos os feedbacks recebidos
      </p>
    </div>

    <div class="flex justify-center w-full pb-20">
      <div class="w-4/5 max-w-6xl py-10 grid grid-cols-4 gap-2">
        <div>
          <h1 class="text-3xl font-black brand-darkgray">Listagem</h1>
          <suspense>
            <template #default>
              <Filters />
            </template>
            <template #fallback>
              loading...
            </template>
          </suspense>
        </div>
        <div class="px-10 pt-20 col-span-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Filters from './Filters';
import HeaderLogged from "../../components/HeaderLogged";

export default {
  components: {
    HeaderLogged,
    Filters
  }
};
</script>

<style>
</style>