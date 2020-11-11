import { createApp } from "vue";
import "./styles.css";
import App from "./App.vue";
import { apolloClient } from "./lib/apollo";
import { DefaultApolloClient } from "@vue/apollo-composable";
import router from "./router";

createApp(App)
  .use(router)
  .provide(DefaultApolloClient, apolloClient)
  .mount("body");
