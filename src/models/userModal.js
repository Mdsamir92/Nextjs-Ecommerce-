
import mongoose, { Schema,  } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
   
    isVerified: {
        type: Boolean,
        default: false,
    },
    verifyToken:String,
    verifyTokenExpiry:Date, 
    
  },
  { timestamps: true }
);

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
