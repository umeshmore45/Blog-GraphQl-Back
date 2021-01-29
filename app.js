const express = require("express");
const dotenv = require("dotenv");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./schema/schema");
dotenv.config({ path: "./config.env" });

mongoose
  .connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    const app = express();

    app.use(
      "/graphql",
      graphqlHTTP({
        schema,
        graphiql: true,
      })
    );

    app.listen(process.env.PORT, () => {
      console.log(`On Port http://localhost:${process.env.PORT}/`);
    });
  })
  .catch((e) => {
    console.log(e);
    return e;
  });
