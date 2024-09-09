import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel", required: true },
}, { collection: "modules" });

export default moduleSchema;
