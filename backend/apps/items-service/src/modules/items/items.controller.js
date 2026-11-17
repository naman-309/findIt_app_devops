import { createItem, getAllItems, searchItems, getItemById } from "./items.service.js";

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

// search 
export const searchItemsController = async (req, res, next) => {
    try {
        const { search } = req.validated.query;

        const items = await searchItems(search);

        return res.status(200).json({
            success: true,
            count: items.length,
            data: items,
        });
    } catch (error) {
        next(error);
    }
};


export const getItemByIdController = async (req, res, next) => {
    try {
        const { id } = req.validated.params;

        const item = await getItemById(id);

        if (!item) {
            return res.status(404).json({
                success: false,
                message: "Item not found",
            });
        }

        return res.status(200).json({
            success: true,
            data: item,
        });
    } catch (error) {
        next(error);
    }
};