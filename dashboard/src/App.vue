<template>
  <div>
    <ModalFactory />
    <router-view />
  </div>
</template>

<script>
import { watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ModalFactory from "./components/ModalFactory/index";
import services from './services/index';

export default {
  components: {
    ModalFactory,
  },
  setup () {
    const router = useRouter();
    const route = useRoute();

    watch(() => route.path, async () => {
      if (route.meta.hasAuth) {
        const token = window.localStorage.getItem('token');

        if (!token) {
          router.push({ name: 'Home' });
        }

        const { data } = await services.users.getMe();
        console.log('data', data)
      }
    });
  }
};
</script>
