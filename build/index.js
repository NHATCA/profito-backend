"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _schema = require("./schema");

var _schema2 = _interopRequireDefault(_schema);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('express-graphql'),
    graphqlHTTP = _require.graphqlHTTP;

var app = (0, _express2.default)();
var PORT = 4300;
var URI = "mongodb+srv://GraphQL_Blog:HelloworlD@cluster0.qvr6v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use((0, _cors2.default)());

app.get("/", function (req, res) {
  res.json({
    message: "Notetaking API v1"
  });
});
app.use("/graphql2", graphqlHTTP({
  schema: _schema2.default,
  graphiql: true
}));
app.listen(PORT, function () {
  console.log("Server is listening on PORT " + PORT);
});
//# sourceMappingURL=index.js.map