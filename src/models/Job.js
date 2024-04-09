import { Schema } from "mongoose";



export const JobSchema = new Schema({
  company: { type: String, required: true, minLength: 0, maxLength: 100 },
  jobTitle: { type: String, required: true, minLength: 0, maxLength: 100 },
  hours: { type: Number, required: true, min: 1, max: 168 },
  rate: { type: Number, required: true, min: 0, max: 1000000 },
  imgUrl: { type: String, required: true, maxLength: 500 },
  description: { type: String, required: true, maxLength: 500 },
  creatorId: { type: Schema.ObjectId, required: true, ref: 'Account' }
}, { timestamps: true, toJSON: { virtuals: true } })