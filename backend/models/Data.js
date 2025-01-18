import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  phone: { type: Number, required: true },
});

export const Data = mongoose.model("Data", dataSchema);
