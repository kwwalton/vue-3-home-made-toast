<script setup>
import { ref, defineEmits } from "vue";

function formHandler(event) {
  emit("submit", {
    bread: selectedBread.value,
    message: message.value,
    isSelfClosing: isSelfClosing.value === "true" ? true : false,
  });
  resetForm();
}

function resetForm() {
  message.value = "";
  selectedBread.value = "";
  isSelfClosing.value = "false";
}

const emit = defineEmits(["submit"]);
const message = ref("");
const selectedBread = ref("");
const isSelfClosing = ref("false"); // using a string here because the form will give us back a string anyway and then we convert to boolean for the emit
</script>

<template>
  <form @submit.prevent="formHandler">
    <h2>Set your toast properties.</h2>
    <label for="message">Message:</label>
    <input
      id="message"
      name="message"
      type="text"
      placeholder="add message here"
      v-model="message"
    />

    <label for="bread">Bread:</label>
    <select v-model="selectedBread">
      <option disabled value="">Please select one</option>
      <option>Rye</option>
      <option>Wheat</option>
      <option>Pumpernickel</option>
    </select>

    <fieldset>
      <legend>Is this a self closing toast?</legend>

      <input
        type="radio"
        id="self-close-yes"
        value="true"
        v-model="isSelfClosing"
      />
      <label for="self-close-yes">Yes</label>

      <input
        type="radio"
        id="self-close-no"
        value="false"
        v-model="isSelfClosing"
      />
      <label for="self-close-no">No</label>
    </fieldset>

    <button type="submit">Add Toast</button>
  </form>
</template>

<style scoped>
form {
  background-color: var(--color-background-soft);
  padding: 15px;
}

select {
  margin-top: 10px;
}

button {
  margin-top: 10px;
}
</style>
