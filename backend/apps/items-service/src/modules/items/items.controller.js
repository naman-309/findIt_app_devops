import { createItem, getAllItems } from "./items.service.js";

export const createItemController = async (req, res, next) => {
    try {
        const { title, description, type, location } =
            req.validated.body;

        const item = await createItem({
            userId: req.user.userId,
            title,
            description,
            type,
            location,
        });

        return res.status(201).json({
            success: true,
            message: "Item created successfully",
            data: item,
        });
    } catch (error) {
        next(error);
    }
};


export const getAllItemsController = async (req, res, next) => {
    try {
        const items = await getAllItems();

        return res.status(200).json({
            success: true,
            count: items.length,
            data: items,
        });
    } catch (error) {
        next(error);
    }
};