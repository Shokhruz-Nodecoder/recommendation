import { Schema } from 'mongoose';

export const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    interest: {
      type: [{ type: String }],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
