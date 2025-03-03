import mongoose from "mongoose";

interface IStaff {
    _id: string;
    name: string;
}

const staffSchema = new mongoose.Schema<IStaff>({
    name: { type: String, required: true }
});

export default mongoose.model<IStaff>("Staff", staffSchema, "staffs");