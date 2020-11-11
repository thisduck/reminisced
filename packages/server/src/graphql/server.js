import { gql, ApolloServer } from "apollo-server-express";
import Bookmark from "../models/bookmark";
import ItemData from "../models/item-data";
import { parseAll } from "../lib/page-data";

const typeDefs = gql`
  type Bookmark {
    id: ID!
    url: String!
    canonicalUrl: String!
    article: Article
  }

  type Article {
    id: ID!
    title: String!
    byline: String
    dir: String
    content: String!
    textContent: String!
    length: Int!
    excerpt: String
    siteName: String
  }

  type Query {
    bookmarks: [Bookmark]!
    bookmark(id: ID!): Bookmark!
  }

  type Mutation {
    addBookmark(url: String): Bookmark
  }
`;

const resolvers = {
  Bookmark: {
    article: (parent) => {
      const article = ItemData.findOne({ canonicalUrl: parent.canonicalUrl });
      return article;
    },
  },
  Query: {
    bookmarks: () => Bookmark.find().sort("-createdAt"),
    bookmark: async (_, { id }) => await Bookmark.findById(id)
  },
  Mutation: {
    addBookmark: async (_, { url }, __) => {
      const info = await parseAll(url);
      const canonicalUrl = info.canonicalUrl || url;
      const exists = await ItemData.exists({ canonicalUrl });
      if (!exists) {
        await new ItemData({ ...info.article, canonicalUrl }).save();
      }
      const bookmark = await new Bookmark({ url, canonicalUrl }).save();
      return bookmark;
    },
  },
};

export default function createServer() {
  return new ApolloServer({
    typeDefs,
    resolvers,
    tracing: true,
  });
}
