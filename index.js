const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const typeDefs = require("./graphql/typeDefs")

require("dotenv").config();

const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers
});

mongoose
  .connect(process.env.URI, { useNewUrlParser: true })
  .then(() => {
    console.log("\nSUCCESS: CONNECTED TO DATABASE");
    return server.listen({ port: 5000 });
  })
  .then(res => {
    console.log(`\nSERVER RUNNING AT ${res.url}`);
  });
