import User from "../models/auth";
import jwt from 'jsonwebtoken'
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

export const resolvers = {
  Query: {
    async getAccount(root, account) {
      return await User.find();

    },
    async allAccount() {
      return await User.find();
    }
  },
  Mutation: {
    async createAccount(root, { user }) {
      return await User.create(user);
    },
    async updateAccount(root, { _id, input }) {
      return await User.findOneAndUpdate({ _id }, input, { new: true });
    },
    async deleteAccount(root, { _id }) {
      return await User.findOneAndRemove({ _id });
    }
  }
};