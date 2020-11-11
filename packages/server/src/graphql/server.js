import { gql, ApolloServer } from "apollo-server-express";
import Bookmark from "../models/bookmark";

const typeDefs = gql`
  type Bookmark {
    id: ID!
    url: String!
  }

  type Query {
    bookmarks: [Bookmark]!
  }

  type Mutation {
    addBookmark(url: String): Bookmark
  }
`;

const resolvers = {
  Query: {
    bookmarks: () => Bookmark.find().sort("-createdAt"),
  },
  Mutation: {
    addBookmark: async (_, { url }, __) => {
      const bookmark = await new Bookmark({ url }).save();
      return bookmark;
    },
  },
};

const extensions = [() => new ApolloLogExtension({})];

export default function createServer() {
  return new ApolloServer({
    typeDefs,
    resolvers,
    tracing: true,
  });
}
