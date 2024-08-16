import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const newUser = await request.json();
  try {
    const db = await connectDB();
    const userCollection = db.collection("users");
    const exist = await userCollection.findOne({ email: newUser.email });
    if (exist) {
      return NextResponse.json({ messgae: "Users Exists" }, { status: 304 });
    }
    const hashedPassword = bcrypt.hashSync(newUser.password, 14);
    const res = await userCollection.insertOne({
      ...newUser,
      password: hashedPassword,
    });
    return NextResponse.json({ messgae: "User created" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ messgae: "Something went wrong" }, { status: 404 });
  }
};
