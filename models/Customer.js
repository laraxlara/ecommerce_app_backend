import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema(
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
    imagePath: {
      type: String,
      default: "",
    },
    address: {
      city: {
        type: String,
      },
      street: {
        type: String,
      },
      country: {
        type: String,
      },
    },
    contact: {
      type: Number,
    },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
  },
  { timestamps: true }
);

const Customer = mongoose.model("Customer", CustomerSchema);
export default Customer;
