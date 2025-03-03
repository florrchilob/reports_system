import mongoose, { Schema, Document } from "mongoose";

enum UserType {
    REPORTER = 1,
    TEAM_MANAGER = 2,
    REGIONAL_MANAGER = 3,
    SYSTEM_ADMIN = -1
}


interface IUser {
    mail: string,
    _id: string,
    staffID: string,
    userType: UserType,
    personalID: number,
}

const userSchema = new Schema<IUser>(
    {
    mail: { type: String, required: true, unique: true },
    staffID: { type: String, required: true },
    userType: { type: Number, required: true },
    personalID: { type: Number, required: true, unique: true }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export const User = mongoose.model<IUser>("User", userSchema, "users");