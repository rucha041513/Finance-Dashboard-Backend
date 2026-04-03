import { registerUser, loginUser } from "../services/userService.js";

export const register = async (req, res) => {
  try {
    const user = await registerUser(req.body);
    res.status(201).json(user);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const login = async (req, res) => {
  try {
    const token = await loginUser(req.body);
    res.json({ token });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
