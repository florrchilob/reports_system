import mongoose from "mongoose";

interface IReport {
    _id: string,
    staffID: string,
    createdAt: Date
}

const reportSchema = new mongoose.Schema<IReport>({
    staffID: { type: String, required: true },
    createdAt: { type: Date, required: true, validate: [(val: Date) => val <= new Date(), 'Date cannot be in the future'] }
});

export default mongoose.model<IReport>("Report", reportSchema, "reports");