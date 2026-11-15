import { Router } from "express";
import { verifyToken } from "../../middlewares/auth.middleware.js";
import { createItemController } from "./items.controller.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { createItemSchema } from "./items.schemas.js";

const router = Router();

router.get("/test-auth", verifyToken, (req, res) => {
    return res.status(200).json({
        success: true,
        message: "JWT verified by Items Service",
        user: req.user,
    });

});

router.post(
    "/",
    verifyToken,
    validate(createItemSchema),
    createItemController
);
export default router;