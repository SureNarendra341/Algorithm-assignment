import Organization from "../models/Organization.js";

export const createOrganization = async (req, res) => {
  try {
    const { name } = req.body;
    const org = new Organization({ name });
    await org.save();
    res.status(201).json(org);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
