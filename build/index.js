'use strict';

var express = require('express');

var _require = require('express-graphql'),
    graphqlHTTP = _require.graphqlHTTP;

var _require2 = require('graphql'),
    buildSchema = _require2.buildSchema;

// Construct a schema, using GraphQL schema language


var schema = buildSchema('\n  type Query {\n    hello: String\n  }\n');

// The root provides a resolver function for each API endpoint
var root = {
  hello: function hello() {
    return 'Hello world!';
  }
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
//# sourceMappingURL=index.js.map