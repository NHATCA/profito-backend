import User from "../models/auth";
export const resolvers = {
  Query: {
    async getAccount(root, { _id }) {
      return await User.findById(_id);
    },
    async allAccount() {
        console.log(User.find(),"dsa")
      return await User.find();
    }
  },
  Mutation: {
    async createAccount(root, { input }) {
      console.log(input)
      return await User.create(input);
    },
    async updateAccount(root, { _id, input }) {
      return await User.findOneAndUpdate({ _id }, input, { new: true });
    },
    async deleteAccount(root, { _id }) {
      return await User.findOneAndRemove({ _id });
    }
  }
};