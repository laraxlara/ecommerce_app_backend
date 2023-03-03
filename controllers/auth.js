import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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

/* Signin */
export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const customer = await Customer.findOne({ email: email });
    if (!customer)
      return res.status(400).json({ msg: "Profile does not exist." });

    const isMatch = await bcrypt.compare(password, customer.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });

    const token = jwt.sign({ id: customer._id }, process.env.JWT_SECRET);
    delete customer.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
