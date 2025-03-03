import mongoose from "mongoose";


interface IReportstructure {    
    _id: string,
    staffID: string,
    attributeName: string,
    attributeType: any,
    required: boolean,
    unique: boolean,
}

const reportStructureSchema = new mongoose.Schema<IReportstructure>({
    staffID: { type: String, required: true },
    attributeName: { type: String, required: true },
    attributeType: { type: String, required: true },
    required: { type: Boolean, required: true },
    unique: { type: Boolean, required: true },
});

export default mongoose.model<IReportstructure>("Reportstructure", reportStructureSchema, "reportstructure");
