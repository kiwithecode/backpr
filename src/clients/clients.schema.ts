import { Schema } from 'mongoose';

export const ClientSchema = new Schema({
  name: { type: String, required: true },
  cedula: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  dob: { type: Date, required: true },
  contractType: { type: String, required: true },
});
