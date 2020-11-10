import express from "express";
import mongoose from "mongoose";
import createServer from "./graphql/server";
import morgan from "morgan";

async function main() {
  const app = express();
  const server = createServer();
  app.use(morgan("combined"));

  server.applyMiddleware({
    app,
    cors: true,
  });

  await mongoose.connect("mongodb://localhost:27017/reminisce_development", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const port = 4000;
  app.listen({ port }, "0.0.0.0", () => {
    console.log(
      `Server started.  http://localhost:${port}${server.graphqlPath}`
    );
  });
}

main();
