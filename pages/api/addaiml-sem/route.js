import connectToDB from "@/database";
import { AIMLSemester } from "@/models/semester";
import Joi from "joi";
import { NextResponse } from "next/server";

const AddNewCourse = Joi.object({
  name : Joi.string().required(),
  code : Joi.string().required(),
});

export async function POST(req) {
  try {
    await connectToDB();

    const { searchParams } = new URL(req.url);
    const getCurrentSem = searchParams.get("sem");

    const extractCourseData = await req.json();
    const { name,code } = extractCourseData;

    const { error } = AddNewCourse.validate({
      name,
      code,
    });

    if (error) {
      return NextResponse.json({
        success: false,
        message: error.details[0].message,
      });
    }

    const newlyCreatedCourseItem = await AIMLSemester.updateOne(
      { number: getCurrentSem }, 
      { $push: { subjects: extractCourseData } } 
    );

    if (newlyCreatedCourseItem) {
      return NextResponse.json({
        success: true,
        message: "Course added successfully",
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