import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  role: {
    type: String,
    emum: ["Customer", "Admin", "DeliveryPartner"],
    default: "Customer",
  },
  isActivated: {
    type: Boolean,
    default: false,
  },
});

//

const CustomerSchema = new mongoose.Schema({
  ...userSchema.obj,
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    default: "Customer",
    enum: ["Customer"],
  },
  liveLocation: {
    latitude: { type: Number },
    longitude: { type: Number },
  },
  address: {
    type: String,
  },
});

//
const DeliveryPartnerSchema = new mongoose.Schema({
  ...userSchema.obj,
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "DeliveryPartner",
    enum: ["DeliveryPartner"],
  },
  liveLocation: {
    latitude: { type: Number },
    longitude: { type: Number },
  },
  address: {
    type: String,
  },
  branch: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Branch",
  },
});

//

const AdminSchema = new mongoose.Schema({
  ...userSchema.obj,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "Admin",
    enum: ["Admin"],
  },
});

export const Customer = mongoose.model("Customer", CustomerSchema);
export const DeliveryPartner = mongoose.model(
  "DeliveryPartner",
  DeliveryPartnerSchema
);
export const Admin = mongoose.model("Admin", AdminSchema);
