<script setup>
import { ref, onMounted, defineProps } from "vue";
// Props
const props = defineProps(["bread", "message", "isSelfClosing"]);

// Methods
function close() {
  // Vue will remove this toast instance when the v-if is false
  isMounted.value = false;
  // but we need to remove the parent div from the DOM ourselves
  parentReference.value.remove();
}

// Data
const isMounted = ref(true);
const parentReference = ref(null);
const toasty = ref(null);

//Lifecycle
onMounted(() => {
  // Once added to the DOM, we need to get a reference to the parent node,
  // the div added from the $toast method that we need to later remove from the DOM
  parentReference.value = toasty.value.parentNode;
});

// You could add a time to your props to make it configurable
if (props.isSelfClosing) {
  setTimeout(() => {
    isMounted.value = false;
  }, 3000);
}
</script>
<template>
  <div v-if="isMounted" ref="toasty" class="toast">
    <h1>Toast Message</h1>
    <p v-if="bread">{{ bread }}</p>
    <p v-if="message">{{ message }}</p>
    <button v-if="!isSelfClosing" @click="close">X</button>
  </div>
</template>

<style scoped>
button {
  position: absolute;
  top: 10px;
  right: 10px;
}

h1 {
  margin-top: 10px;
}
</style>
