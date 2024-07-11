import { Request, Response } from "express";
import userModel from "../models/user.model";

const createCurrentUser = async (req: Request, res: Response) => {
  try {
    const { auth0Id } = req.body;
    const existingUser = await userModel.findOne({ auth0Id });

    if (existingUser) {
      return res.status(200).send();
    }
    const newUser = new userModel(req.body);
    const savedUser = await newUser.save();
    return res.status(201).json(savedUser.toObject);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "error creating User" });
  }
};

export default {
  createCurrentUser,
};
