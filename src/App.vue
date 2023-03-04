<script setup>
import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
import { getCurrentInstance } from "vue";
import ToastOptionsForm from "./components/ToastOptionsForm.vue";

// console.log("app", getCurrentInstance().appContext.config.globalProperties);
const $toast = getCurrentInstance().appContext.config.globalProperties.$toast;

// Adds a toast with hard coded values
function addToast() {
  $toast({
    bread: "wheat",
    message: "hard coded message up in here",
    isSelfClosing: false,
  });
}

// Adds a toast with values from the ToastOptionsForm
// the event passed in is an object with keys and values from the form
// in the $toast plugin, we'll use that to populate the props passed into the ToastMessage component
function toastEmitHandler(event) {
  // console.log("toastEmitHandler", event);
  $toast(event);
}
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      <button @click="addToast">Add Toast</button>
    </div>
    <ToastOptionsForm @submit="toastEmitHandler" />
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
