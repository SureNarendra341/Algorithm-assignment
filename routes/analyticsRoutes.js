import express from "express";
import { usersByOrganization, organizationFiles } from "../controllers/analyticsController.js";
const router = express.Router();

router.get("/users-by-organization", usersByOrganization);
router.get("/organization-files", organizationFiles);

export default router;
