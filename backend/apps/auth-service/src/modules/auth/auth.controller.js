
import bcrypt from "bcrypt";
import { createUser } from "./auth.service.js";

export const registerUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.validated.body;

        // 1. Hash the password
        const passwordHash = await bcrypt.hash(password, 12);

        // 2. Save user in PostgreSQL
        const user = await createUser({
            name,
            email,
            passwordHash,
        });

        // 3. Send response
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: user,
        });
    } catch (error) {
        if (error.code === "23505") {
            return res.status(409).json({
                success: false,
                message: "Email already registered",
            });
        }

        next(error);
    }
};


