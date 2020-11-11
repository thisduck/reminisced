import { createApp } from "vue";
import "./styles.css";
import App from "./App.vue";
import { apolloClient } from "./lib/apollo";
import { DefaultApolloClient } from "@vue/apollo-composable";

createApp(App).provide(DefaultApolloClient, apolloClient).mount("body");
