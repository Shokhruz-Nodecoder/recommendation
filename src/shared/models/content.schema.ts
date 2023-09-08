import { Schema } from 'mongoose';


export const ContentSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
    likes : {
        type : Number
    }
  },
  {
    timestamps: true,
  },
);