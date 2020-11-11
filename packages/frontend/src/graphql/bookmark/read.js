import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";

const bookmarkQuery = gql`
  query bookmark($id: ID!) {
    bookmark(id: $id) {
      id
      url
      canonicalUrl
      article {
        id
        title
        excerpt
        content
      }
    }
  }
`;

export default (variables) => useQuery(bookmarkQuery, variables);
