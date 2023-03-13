import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    surname: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
      unique: true,
    },
    // imagePath: {
    //   type: String,
    //   default: "",
    // },
    address: {
      type: String,
    },
    contact: {
      type: Number,
    },
    refreshToken: {
      type: String,
    },
    roles: {
      User: {
        type: Number,
        default: 2001,
      },
      Admin: {
        type: Number,
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
