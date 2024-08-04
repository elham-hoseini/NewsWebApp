'use server';

import { connectDB } from "@/libs/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";


export const createUserAction = async (formData: FormData) => {
  await connectDB();
    const name = formData.get("name");
    const email = formData.get("email");
    const  originalpassword= formData.get("password");
    try {

        const password = await bcrypt.hash(originalpassword as string, 8);
        const newUser = await User.create({
            name,
            email,
            password
        });
       
        newUser.save();
        if (!newUser) return { success: false };

        return { success: true };
    } catch (error) {
        console.log(error);
        return {message: 'error creating user'};
    }
};


export const checkUserEmail = async (formdata: FormData) => {
  await connectDB();
    const { email } = Object.fromEntries(formdata);

try{
    const user = await User.findOne({ email: email as string });
    if (!user) return { success: false };

    return { success: true };
  } catch (error) {
    console.log('checkUserEmail', error);
  }
};