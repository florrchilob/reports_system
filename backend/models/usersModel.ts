import mongoose, { Schema, Document } from "mongoose";

interface IUser {
    mail: String;
    dbID: string;
    staffID: string;
    userType: number;
    personalID: number;
} 

const userSchema = new Schema<IUser>({
    mail: String,
    dbID: String,
    staffID: String,
    userType: Number,
    personalID: Number
});

export const User = mongoose.model<IUser>("User", userSchema, "users");