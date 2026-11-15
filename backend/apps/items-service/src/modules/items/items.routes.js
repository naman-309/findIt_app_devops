import { Router } from "express";
import { verifyToken } from "../../middlewares/auth.middleware.js";

const router = Router();

router.get("/test-auth", verifyToken, (req, res) => {
    return res.status(200).json({
        success: true,
        message: "JWT verified by Items Service",
        user: req.user,
    });
});

export default router;