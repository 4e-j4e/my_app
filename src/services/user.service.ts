import pool from "@/configs/database";
import User from "@/types/user";
import { RowDataPacket } from "mysql2";

const getUsers = async (): Promise<User[]> => {
    try {
        const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM users");
        return rows as User[]; 
    } catch (error) {
        console.error("Database error:", error);
        throw new Error("Failed to fetch users");
    }
};

export { getUsers };
