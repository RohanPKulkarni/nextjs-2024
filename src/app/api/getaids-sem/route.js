import connectToDB from "@/database";
import { AIDSSemester } from "@/models/semester";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();
    const extractAllSemestersFromDatabase = await AIDSSemester.find({});

    if (extractAllSemestersFromDatabase) {
      return NextResponse.json({
        success: true,
        data: extractAllSemestersFromDatabase,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong! Please try again later",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again later",
    });
  }
}