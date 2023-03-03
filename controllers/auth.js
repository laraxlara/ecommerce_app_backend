import bcrypt from "bcrypt";
import jwt from "jwt";
import Customer from "../models/Customer.js";

/* Registration */
export const register = async (req, res) => {
  try {
    const {
      name,
      surname,
      email,
      password,
      imagePath,
      address,
      contact,
      roles,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const newCustomer = new Customer({
      name,
      surname,
      email,
      password: hashedPassword,
      imagePath,
      address,
      contact,
      roles,
    });
    const savedCustomer = await newCustomer.save();
    res.status(201).json(savedCustomer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
