import User from "../models/User.js";

export const createUser = async (req, res) => {
  try {
    const { name, email, organizationId, role } = req.body;
    const user = new User({ name, email, organizationId, role });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
