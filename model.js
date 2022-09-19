import mongoose from 'mongoose';

// Define schema
const Schema = mongoose.Schema;

const UserRegistration = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String
});

// Compile model from schema
const usersModel = mongoose.model("users", UserRegistration);

export default usersModel;