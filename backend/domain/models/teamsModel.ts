import mongoose from "mongoose";

interface ITeam {
    _id: string;
    name: string;
}

const teamSchema = new mongoose.Schema<ITeam>({
    name: { type: String, required: true }
});

export default mongoose.model<ITeam>("Team", teamSchema, "teams");