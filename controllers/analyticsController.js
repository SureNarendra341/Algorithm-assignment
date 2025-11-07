import User from "../models/User.js";
import File from "../models/File.js";

// Users by organization
export const usersByOrganization = async (req, res) => {
  try {
    const result = await User.aggregate([
      {
        $lookup: {
          from: "organizations",
          localField: "organizationId",
          foreignField: "_id",
          as: "organization",
        },
      },
      { $unwind: "$organization" },
      {
        $group: {
          _id: "$organization.name",
          userCount: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          organization: "$_id",
          userCount: 1,
        },
      },
    ]);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Organization files analytics
export const organizationFiles = async (req, res) => {
  try {
    const result = await File.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "uploadedBy",
          foreignField: "_id",
          as: "user",
        },
      },
      { $unwind: "$user" },
      {
        $lookup: {
          from: "organizations",
          localField: "user.organizationId",
          foreignField: "_id",
          as: "organization",
        },
      },
      { $unwind: "$organization" },
      {
        $group: {
          _id: "$organization.name",
          totalFiles: { $sum: 1 },
          uploadedBy: { $addToSet: "$user.name" },
        },
      },
      {
        $project: {
          _id: 0,
          organization: "$_id",
          totalFiles: 1,
          uploadedBy: 1,
        },
      },
    ]);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
