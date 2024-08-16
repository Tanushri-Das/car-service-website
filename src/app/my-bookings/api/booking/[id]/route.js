import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export const DELETE = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = await db.collection("bookings");
  try {
    const res = await bookingsCollection.deleteOne({
      _id: new ObjectId(params.id),
    });
    return Response.json({
      message: "deleted booking successfully",
      response: res,
    });
  } catch (error) {
    return Response.json({ message: "Something went wrong" });
  }
};

export const PATCH = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  const updateDoc = await request.json();
  try {
    const res = await bookingsCollection.updateOne(
      { _id: new ObjectId(params.id) },
      {
        $set: {
          ...updateDoc,
        },
      },
      {
        upsert: true,
      }
    );
    return Response.json({
      message: "Updated bookings successfully",
      response: res,
    });
  } catch (error) {
    return Response.json({ message: "Something went wrong" });
  }
};

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = await db.collection("bookings");
  try {
    const res = await bookingsCollection.findOne({
      _id: new ObjectId(params.id),
    });
    return Response.json({
      message: "booking found",
      data: res,
    });
  } catch (error) {
    return Response.json({ message: "Something went wrong" });
  }
};
