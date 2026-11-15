import bcrypt from "bcrypt";
import { createUser, findUserByEmail, findUserById } from "./auth.service.js";
import { generateToken } from "../../utils/generate-token.js";
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



export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.validated.body;

        // 1. Find user
        const user = await findUserByEmail(email);

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }

        // 2. Compare password
        const isPasswordValid = await bcrypt.compare(
            password,
            user.password_hash
        );

        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }
        const token = generateToken(user.id);

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 24 * 60 * 60 * 1000,
        });

        // 3. Login success
        res.status(200).json({
            success: true,
            message: "Login successful",
            data: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
        });
    } catch (error) {
        next(error);
    }
};

// profole 
export const getProfile = async (req, res, next) => {
    try {
        const user = await findUserById(req.user.userId);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Profile fetched successfully",
            data: user,
        });
    } catch (error) {
        next(error);
    }
};