const express = require("express");
const app = express();
const { graphqlHTTP } = require("express-graphql");
const graphql=require('graphql')
const schema = require("./index");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000)