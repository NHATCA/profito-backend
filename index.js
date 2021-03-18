import express from "express";
import mongoose from "mongoose";
import noteSchema from "./src/schema/note";
import userSchema from './src/schema/auth'
import cors from "cors";
import {mergeSchemas} from 'graphql-tools'

const { graphqlHTTP } = require('express-graphql');


const app = express();
const PORT = process.env.PORT || 4300;
const passWord = `HelloworlD`
const URI = `mongodb+srv://GraphQL_Blog:${passWord}@cluster0.qvr6v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`


const schema = mergeSchemas({
  schemas: [
    noteSchema,
    userSchema,
  ],
});
mongoose.Promise = global.Promise;
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "API"
  });
});
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);
app.listen(PORT, () => {
  console.log(`Server is listening on PORT http://localhost:${PORT}/graphql`);
});