import { Schema, model, models } from "mongoose";

export interface IUserDocument {
  name: string;
  email: string;
  password: string;
  role: "USER" | "ADMIN";
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUserDocument>(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    name: {
      type: String,
      required: [true, "Fullname is required"],
      minLength: [3, "fullname must be at least 3 characters"],
      maxLength: [25, "fullname must be at most 25 characters"],
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"], // Restrict to allowed values
      default: "USER", // Set default role to 'USER'
    },
  },
  {
    timestamps: true,
  }
);

const User = models?.User || model<IUserDocument>("User", UserSchema);
export default User;
