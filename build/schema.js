"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphqlTools = require("graphql-tools");

var _resolvers = require("./resolvers");

var typeDefs = "\n type Note {\n  _id: ID!\n  title: String!,\n  date: Date,\n  content: String!\n }\n scalar Date\n type Query {\n  getNote(_id: ID!): Note\n  allNotes: [Note]\n }\n input NoteInput {\n \ttitle: String!\n \tcontent: String!\n }\n input NoteUpdateInput {\n  title: String\n  content: String\n }\n type Mutation {\n  createNote(input: NoteInput) : Note\n  updateNote(_id: ID!, input: NoteUpdateInput): Note\n  deleteNote(_id: ID!) : Note\n }\n";

var schema = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: typeDefs,
  resolvers: _resolvers.resolvers
});

exports.default = schema;
//# sourceMappingURL=schema.js.map