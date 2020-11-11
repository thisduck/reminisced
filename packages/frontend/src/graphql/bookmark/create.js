import gql from "graphql-tag";
import { useMutation } from "@vue/apollo-composable";

const addBookmarkMutation = gql`
  mutation addBookmark($url: String!) {
    addBookmark(url: $url) {
      id
      url
    }
  }
`;

export default () => useMutation(addBookmarkMutation);
