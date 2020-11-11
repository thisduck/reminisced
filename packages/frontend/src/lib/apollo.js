import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";

let host = "http://localhost:4000/graphql";

if (window) {
  host = `http://${window.location.host.split(":")[0]}:4000/graphql`;
}

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: host,
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});
