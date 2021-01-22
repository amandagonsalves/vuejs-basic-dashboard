<template>
  <header class="header">
    <div class="flex flex-col w-4/5 max-w-6xl">
      <div class="w-28 lg:w-36">
        <img
          class="w-full"
          src="../../assets/images/logo_white.png"
          alt="logo"
        />
      </div>
      <div class="flex">
        <button
          class="px-6 py-2 font-bold rounded-full text-white focus:outline-none"
        >
          Crie uma conta
        </button>
        <button
          class="px-6 py-2 font-bold bg-white rounded-full text-brand-main focus:outline-none"
        >
          Entrar
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.header {
  @apply bg-brand-main w-full flex justify-center;
  height: 700px;
}
</style>
