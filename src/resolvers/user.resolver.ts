import { Request, Response } from 'express';
import UserModel from '../models/user.model';

type Context = {
  req: Request;
  res: Response;
};

const User = {
  Query: {
    findManyUsers: async (root: any, args: any, context: Context) => {
      try {
        const users = await UserModel.find();
        console.log({
          code: 200,
          success: true,
          data: users,
          message: 'success get all users',
        });
        return users;
      } catch (err) {
        throw err;
      }
    },
    findOneUser: async (
      root: any,
      { id }: { id: string },
      context: Context
    ) => {
      try {
        const user = await UserModel.findById(id);
        console.log({
          code: 200,
          success: true,
          data: user,
          message: 'success get user by id',
        });
        return user;
      } catch (err) {
        throw err;
      }
    },
  },
  Mutation: {
    createOneUser: async (
      root: any,
      {
        name,
        email,
        password,
      }: { name: string; email: string; password: string },
      context: Context
    ) => {
      try {
        const user = await UserModel.create({ name, email, password });
        console.log({
          code: 200,
          success: true,
          data: user,
          message: 'success create new user',
        });
        return user;
      } catch (err) {
        throw err;
      }
    },
    updateOneUser: async (
      root: any,
      {
        id,
        name,
        email,
        password,
      }: { id: string; name: string; email: string; password: string },
      context: Context
    ) => {
      try {
        const user = await UserModel.findByIdAndUpdate(id, {
          name,
          email,
          password,
        });
        console.log({
          code: 200,
          success: true,
          data: user,
          message: 'success update user by id',
        });
        return user;
      } catch (err) {
        throw err;
      }
    },
    removeOneUser: async (
      root: any,
      { id }: { id: string },
      context: Context
    ) => {
      try {
        const user = await UserModel.findByIdAndDelete(id);
        console.log({
          code: 200,
          success: true,
          data: user,
          message: 'success delete user by id',
        });
        return user;
      } catch (err) {
        throw err;
      }
    },
  },
};

export default User;
