import ToastMessage from "../components/ToastMessage.vue";
import { createApp } from "vue";

// Add one wrapper div to the DOM to put all the toasts into
const toastWrapper = document.createElement("div");
toastWrapper.id = "toasts-wrapper";
document.body.prepend(toastWrapper);
let toastCount = 0;

export default {
  install: (app, options) => {
    app.config.globalProperties.$toast = (options) => {
      // Options are an object passed in the $toast({ bread: 'pumpernickel', message:'blah blah blah', isSelfClosing: false })
      // When adding a new toast, we'll add a div inside the toast wrapper div
      const newToastDiv = document.createElement("div");
      newToastDiv.id = `toast-${toastCount}`;
      toastWrapper.prepend(newToastDiv);
      const newToast = createApp(ToastMessage, {
        bread: options.bread,
        message: options.message,
        isSelfClosing: options.isSelfClosing,
      });
      newToast.mount(newToastDiv);
      toastCount++;
    };
  },
};
