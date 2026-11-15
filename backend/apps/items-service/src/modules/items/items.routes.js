import { Router } from "express";
import { verifyToken } from "../../middlewares/auth.middleware.js";
import { createItemController, getAllItemsController, searchItemsController } from "./items.controller.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { createItemSchema, searchItemsSchema } from "./items.schemas.js";
const router = Router();

router.get("/test-auth", verifyToken, (req, res) => {
    return res.status(200).json({
        success: true,
        message: "JWT verified by Items Service",
        user: req.user,
    });

});

router.get("/", getAllItemsController);
router.post(
    "/",
    verifyToken,
    validate(createItemSchema),
    createItemController
);

//search 

router.get(
    "/search",
    validate(searchItemsSchema),
    searchItemsController
);
export default router;