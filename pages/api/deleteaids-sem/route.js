import connectToDB from "@/database";
import { AIDSSemester } from "@/models/semester";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function DELETE(req) {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const getCurrentSem = searchParams.get("sem");
    const getCurrentcourseID = searchParams.get("_id");

    const courseID = new mongoose.Types.ObjectId(getCurrentcourseID);

    if (!getCurrentcourseID) {
      return NextResponse.json({
        success: false,
        message: "Course ID is required",
      });
    }

    const deleteSubjectByID = await AIDSSemester.findOneAndUpdate(
      {
        number: getCurrentSem, 
      },
      {
        $pull: { 
          subjects: { _id: courseID } 
        }
      },
      { new: true } 
    );

    if (deleteSubjectByID) {
      return NextResponse.json({
        success: true,
        message: "Course is deleted successfully",
      });
    }
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
}