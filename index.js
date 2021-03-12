import express from "express";
import mongoose from "mongoose";
import schema from "./src/schema";
import cors from "cors";
const { graphqlHTTP } = require('express-graphql');


const app = express();
const PORT = process.env.PORT || 4300;
const URI = "mongodb+srv://GraphQL_Blog:HelloworlD@cluster0.qvr6v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


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