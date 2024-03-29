import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";

const bookmarksQuery = gql`
  query bookmarks {
    bookmarks {
      id
      url
      article {
        id
        title
        excerpt
      }
    }
  }
`;

export default () => useQuery(bookmarksQuery);
