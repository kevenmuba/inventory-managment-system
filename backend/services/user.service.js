// user.service.js
import User from "../models/userModal.js";
import generateToken from "../utils/generateToken.js";

export const registerUserService = async (userData, res) => {
  const { email } = userData;

  const existUser = await User.findOne({ email });
  if (existUser) {
    throw new Error("User Already Exist");
  }

  const user = await User.create(userData);
  if (!user) {
    throw new Error("Invalid data, try again");
  }

  const token = generateToken(res, user._id);
  return { user, token };
};

export const signInService = async (email, password, res) => {
  const user = await User.findOne({ email });
  if (user && (await user.comparePassword(password))) {
    const token = generateToken(res, user._id);
    return { user, token };
  } else {
    throw new Error("Invalid Email And Password !!");
  }
};

export const listUsersService = async () => {
  return await User.find({});
};

export const editUserService = async (userId, updateData) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not Found");
  }

  Object.assign(user, updateData); // Update only the fields that are provided
  return await user.save();
};
