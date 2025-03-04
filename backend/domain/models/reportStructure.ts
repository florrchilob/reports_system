import mongoose from "mongoose";


interface IReportstructure {    
    _id: string,
    teamID: string,
    attributeName: string,
    attributeType: string | number | Date | boolean,
    required: boolean,
    unique: boolean,
}

const reportStructureSchema = new mongoose.Schema<IReportstructure>({
    teamID: { type: String, required: true },
    attributeName: { type: String, required: true },
    attributeType: { type: mongoose.Schema.Types.Mixed, required: true },
    required: { type: Boolean, required: true },
    unique: { type: Boolean, required: true },
});

export default mongoose.model<IReportstructure>("Reportstructure", reportStructureSchema, "reportstructure");
