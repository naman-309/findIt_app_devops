export const registerUser = async (req, res, next) => {
    try {
        const { name, email } = req.validated.body;

        res.status(200).json({
            success: true,
            message: "Validation successful. Ready for database integration.",
            data: {
                name,
                email,
            },
        });
    } catch (error) {
        next(error);
    }
};