import { createApp } from "vue";
import Popup from "./Popup.vue";
import "../src/styles.css";
import { apolloClient } from "../src/lib/apollo";
import { DefaultApolloClient } from "@vue/apollo-composable";

createApp(Popup).provide(DefaultApolloClient, apolloClient).mount("body");
