// users.controller.js
import { asyncHandler } from "../utils/asynchandler.js";
import * as UserService from "../services/user.service.js";

export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, dept, isAdmin, procurement } = req.body;

  const { user, token } = await UserService.registerUserService(
    { name, email, password, dept, isAdmin, procurement },
    res
  );

  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    dept: user.dept,
    procurement: user.procurement,
    isAdmin: user.isAdmin,
    token,
  });
});

export const signIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const { user, token } = await UserService.signInService(email, password, res);

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    dept: user.dept,
    isAdmin: user.isAdmin,
    procurement: user.procurement,
    token,
  });
});

export const listUsers = asyncHandler(async (req, res) => {
  const users = await UserService.listUsersService();

  res.json({ msg: "All users", count: users.length, users });
});

export const editUserClr = asyncHandler(async (req, res) => {
  const updateData = req.body;

  const updatedUser = await UserService.editUserService(
    req.params.id,
    updateData
  );

  res.json({
    _id: updatedUser._id,
    name: updatedUser.name,
    dept: updatedUser.dept,
    isAdmin: updatedUser.isAdmin,
  });
});
