import mongoose from "mongoose";
import Customer from "./Customer.js";
import Role from "./Role.js";
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.customer = Customer;
db.role = Role;

db.ROLES = ["customer", "admin"];

export default db;
