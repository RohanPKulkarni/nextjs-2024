import connectToDB from "@/database";
import { AIDSSemester } from "@/models/semester";
import Joi from "joi";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

const EditSem = Joi.object({
  name : Joi.string().required(),
  code : Joi.string().required(),
});

export async function PUT(req) {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const getCurrentSem = searchParams.get("sem");
    const getCurrentCourseID = searchParams.get("_id");

    const courseID = new mongoose.Types.ObjectId(getCurrentCourseID);


    if (!getCurrentSem) {
      return NextResponse.json({
        success: false,
        message: "Sem ID is required",
      });
    }

    const extractCourseData = await req.json();
    const {name,code} = extractCourseData;
    const { error } = EditSem.validate({
      name,
      code,
    });

    if (error) {
      return NextResponse.json({
        success: false,
        message: error.details[0].message,
      });
    }



    const updateByCourseID = await AIDSSemester.findOneAndUpdate(
      {
        number: getCurrentSem, 
        "subjects._id": courseID 
      },
      { 
        $set: { 
          "subjects.$": extractCourseData 
        }
      },
      { new: true } 
    );
    

    if (updateByCourseID) {
      return NextResponse.json({
        success: true,
        message: "Sem is updated successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong ! Please try again",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again",
    });
  }
}