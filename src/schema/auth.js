import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "../resolvers/auth";

const typeDefs = `
 type Account {
  _id: ID!
  userName: String!,
  passWord: String!
 }
 type Query {
   getAccount(userName: String!): Account
   allAccount: [Account]
 }
 input AccountInput {
   userName: String!
   passWord: String!
 }
 input AccountUpdate {
   userName: String
   passWord: String
 }
 type Mutation {
   createAccount(user: AccountInput) : Account
   updateAccount(_id: ID!, input: AccountUpdate): Account
   deleteAccount(_id: ID!) : Account
 }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;