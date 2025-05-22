import "./assets/main.css";
import { createApp, nextTick } from "vue";
import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import { Toast, ToastService } from "primevue";

import { VueQueryPlugin } from "@tanstack/vue-query";
import { createQueryClient } from "./shared/api/query-client";
import { setQueryClient } from "./shared/api/queryClientStore";

const app = createApp(App);

app.use(ToastService);
// eslint-disable-next-line vue/multi-word-component-names
app.component("Toast", Toast);
const queryClient = createQueryClient();
setQueryClient(queryClient);

app.use(VueQueryPlugin, { queryClient });
app.use(PrimeVue, {
	theme: {
		preset: Aura,
	},
});

app.use(router);

nextTick(() => {
	const queryClient = createQueryClient();
	app.use(VueQueryPlugin, { queryClient });

	app.mount("#app");
});
