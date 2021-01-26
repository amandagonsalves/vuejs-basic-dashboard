<template>
  <div>
    <div class="flex justify-center w-full h-28 bg-brand-main">
      <HeaderLogged />
    </div>

    <div class="flex flex-col justify-center items-center h-64 bg-brand-gray">
      <h1 class="text-4xl font-black text-center text-gray-800">Credenciais</h1>
      <p class="text-lg font-regular text-center text-gray-800">
        Guia de instalação e geração de suas credenciais.
      </p>
    </div>

    <div class="flex justify-center w-full">
      <div class="flex flex-col w-4/5 max-w-6xl py-10">
        <h1 class="text-3xl font-black text-brand-darkgray">
          Instalação e configuração
        </h1>
        <p class="mt-10 text-lg text-gray-800 font-regular">
          Esta aqui é a sua chave de api
        </p>

        <div
          class="flex py-3 pl-5 pr-20 mt-2 rounded bg-brand-gray w-1/2"
        >
          <span>
            {{ store.User.currentUser.apiKey }}
          </span>

          <div class="flex ml-20 mr-1">
            <Icon
              name="copy"
              :color="brandColors.graydark"
              size="24"
              class="cursor-pointer"
            />

            <Icon
              name="loading"
              :color="brandColors.graydark"
              size="24"
              class="cursor-pointer ml-3"
            />
          </div>
        </div>

        <p class="mt-5 text-lg text-gray-800 font-regular">
          Coloque o script abaixo no seu site para começar a receber feedbacks
        </p>

        <div class="py-3 pl-5 pr-20 mt-2 rounded bg-brand-gray w-2/3 overflow-x-scroll">
          <pre>&lt;script src="https://amandagonsalves-feedbacker-widget.netlify.app?api_key={{ store.User.currentUser.apiKey }}"&gt;&lt;/script&gt;</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderLogged from "../../components/HeaderLogged/index.vue";
import Icon from '../../components/Icon/index';
import useStore from "../../hooks/useStore";
import palette from "../../../palette";

export default {
  components: {
    HeaderLogged,
    Icon
  },
  setup() {
    const store = useStore();

    return {
      store,
      brandColors: palette.brand,
    };
  },
};
</script>