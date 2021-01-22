<template>
  <div>
    <CustomHeader @create-account="handleAccountCreate" @login="handleLogin" @createAccount="handleAccountCreate" />
    <Contact />
    <div class="flex justify-center py-10 bg-brand-gray">
      <p class="font-medium text-center text-gray-800">
        feedbacker &#169; 2021
      </p>
    </div>
  </div>
</template>

<script>
import CustomHeader from "./CustomHeader";
import Contact from "./Contact";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import useModal from '../../hooks/useModal';

export default {
  components: { CustomHeader, Contact },
  setup() {
    const router = useRouter();
    const modal = useModal();

    onMounted(() => {
      const token = window.localStorage.getItem("token");

      if (token) {
        router.push({ name: 'Feedbacks' });
      }
    });

    function handleLogin() {
      modal.open({
        component: "ModalLogin"
      });
    }

    function handleAccountCreate() {
      modal.open({
        component: "ModalCreateAccount"
      });
    }

    return {
      handleLogin,
      handleAccountCreate,
    };
  },
};
</script>
