"use server";

import connectToDB from "@/database";
import { AIDSSemester,AIMLSemester } from "@/models/semester";
import { revalidatePath } from "next/cache";
import Joi from "joi";
import mongoose from "mongoose";

const AddNewCourse = Joi.object({
  name : Joi.string().required(),
  code : Joi.string().required(),
});

const AddNewNews = Joi.object({
  label : Joi.string().required(),
});


export async function addaidsnews(newsdata,getCurrentSem,pathToRevalidate){
  try{
  await connectToDB();

  const { label } = newsdata;

  const { error } = AddNewNews.validate({
    label,
  });

  if (error) {
    return {
      success: false,
      message: error.details[0].message,
    };
  }

  const newlycreatednewsitem = await AIDSSemester.updateOne(
    { number: getCurrentSem },             
    { $push: { news : newsdata  } }        
  );
  

  if (newlycreatednewsitem) {
    revalidatePath(pathToRevalidate);
    return {
      success: true,
      message: "News added successfully",
    };
  } else {
    return {
      success: false,
      message: "Something went wrong ! Please try again",
    };
  }
} catch (error) {
  return {
    success: false,
    message: "Something went wrong ! Please try again",
  };
}


}

export async function addaimlnews(newsdata,getCurrentSem,pathToRevalidate){
  try{
  await connectToDB();

  const { label } = newsdata;

  const { error } = AddNewNews.validate({
    label,
  });

  if (error) {
    return {
      success: false,
      message: error.details[0].message,
    };
  }

  const newlycreatednewsitem = await AIMLSemester.updateOne(
    { number: getCurrentSem },             
    { $push: { news:newsdata  } }        
  );

  if (newlycreatednewsitem) {
    revalidatePath(pathToRevalidate);
    return {
      success: true,
      message: "News added successfully",
    };
  } else {
    return {
      success: false,
      message: "Something went wrong ! Please try again",
    };
  }
} catch (error) {
  return {
    success: false,
    message: "Something went wrong ! Please try again",
  };
}


}

export async function deleteaidsnews(getCurrentNewslabel,getCurrentSem,pathToRevalidate) {
  try {
    await connectToDB();


    if (!getCurrentNewslabel) {
      return {
        success: false,
        message: "News ID is required",
      };
    }

    const deleteNewsByID = await AIDSSemester.findOneAndUpdate(
      {
        number: getCurrentSem, 
      },
      {
        $pull: { 
          news: { label : getCurrentNewslabel } 
        }
      },
      { new: true } 
    );


    if (deleteNewsByID) {
      revalidatePath(pathToRevalidate);
      return {
        success: true,
        message: "News is deleted successfully",
      };
    }
    return {
      success: false,
      message: "Something went wrong! Please try again",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong! Please try again",
    };
  }
}

export async function deleteaimlnews(getCurrentNewslabel,getCurrentSem,pathToRevalidate) {
  try {
    await connectToDB();


    if (!getCurrentNewslabel) {
      return {
        success: false,
        message: "News ID is required",
      };
    }

    const deleteNewsByID = await AIMLSemester.findOneAndUpdate(
      {
        number: getCurrentSem, 
      },
      {
        $pull: { 
          news: { label : getCurrentNewslabel } 
        }
      },
      { new: true } 
    );

    if (deleteNewsByID) {
      revalidatePath(pathToRevalidate);
      return {
        success: true,
        message: "News is deleted successfully",
      };
    }
    return {
      success: false,
      message: "Something went wrong! Please try again",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong! Please try again",
    };
  }
}


export async function fetchaidssemesters() {
  try {
    await connectToDB();

    const semesters = await AIDSSemester.find({}).lean();

    const plainSemesters = semesters.map((semester) => ({
      ...semester,
      _id: semester._id.toString(),
      subjects: semester.subjects.map((subject) => ({
        ...subject,
        _id: subject._id.toString(),
      })),
      news: semester.news.map((newsItem) => ({
        ...newsItem,
        _id: newsItem._id.toString(),
      })),
    }));
    

    return plainSemesters;

  } catch (error) {
    console.error("Error fetching AIDSSemesters:", error);
    return [];
  }
}

export async function fetchaimlsemesters() {
  try {
    await connectToDB();

    const semesters = await AIMLSemester.find({}).lean();

    const plainSemesters = semesters.map((semester) => ({
      ...semester,
      _id: semester._id.toString(),
      subjects: semester.subjects.map((subject) => ({
        ...subject,
        _id: subject._id.toString(),
      })),
      news: semester.news.map((newsItem) => ({
        ...newsItem,
        _id: newsItem._id.toString(),
      })),
    }));
    

    return plainSemesters;

  } catch (error) {
    console.error("Error fetching AIMLSemesters:", error);
    return [];
  }
}

export async function addnewaidssemesters(extractCourseData,getCurrentSem,pathToRevalidate) {
  try {
    await connectToDB();

    const { name,code } = extractCourseData;

    const { error } = AddNewCourse.validate({
      name,
      code,
    });

    if (error) {
      return {
        success: false,
        message: error.details[0].message,
      };
    }

    const newlyCreatedCourseItem = await AIDSSemester.updateOne(
      { number: getCurrentSem }, 
      { $push: { subjects: extractCourseData } } 
    );
    
    if (newlyCreatedCourseItem) {
      revalidatePath(pathToRevalidate);
      return {
        success: true,
        message: "Course added successfully",
      };
    } else {
      return {
        success: false,
        message: "Something went wrong ! Please try again",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong ! Please try again",
    };
  }
}

export async function addnewaimlsemesters(extractCourseData,getCurrentSem,pathToRevalidate) {
  try {
    await connectToDB();

    const { name,code } = extractCourseData;

    const { error } = AddNewCourse.validate({
      name,
      code,
    });

    if (error) {
      return {
        success: false,
        message: error.details[0].message,
      };
    }

    const newlyCreatedCourseItem = await AIMLSemester.updateOne(
      { number: getCurrentSem }, 
      { $push: { subjects: extractCourseData } } 
    );

    if (newlyCreatedCourseItem) {
      revalidatePath(pathToRevalidate);
      return {
        success: true,
        message: "Course added successfully",
      };
    } else {
      return {
        success: false,
        message: "Something went wrong ! Please try again",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong ! Please try again",
    };
  }
}

export async function updateaidssemesters(getCurrentCourseID,getCurrentSem,extractCourseData,pathToRevalidate) {
  try {
    await connectToDB();

    const courseID = new mongoose.Types.ObjectId(getCurrentCourseID);

    if (!getCurrentSem) {
      return {
        success: false,
        message: "Sem ID is required",
      };
    }

    const {name,code} = extractCourseData;
    const { error } = AddNewCourse.validate({
      name,
      code,
    });

    if (error) {
      return {
        success: false,
        message: error.details[0].message,
      };
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
      revalidatePath(pathToRevalidate);
      return {
        success: true,
        message: "Sem is updated successfully",
      };
    } else {
      return {
        success: false,
        message: "Something went wrong ! Please try again",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong ! Please try again",
    };
  }
}

export async function updateaimlsemesters(getCurrentCourseID,getCurrentSem,extractCourseData,pathToRevalidate) {
  try {
    await connectToDB();

    const courseID = new mongoose.Types.ObjectId(getCurrentCourseID);


    if (!getCurrentSem) {
      return {
        success: false,
        message: "Sem ID is required",
      };
    }

    const {name,code} = extractCourseData;

    const { error } = AddNewCourse.validate({
      name,
      code,
    });

    if (error) {
      return {
        success: false,
        message: error.details[0].message,
      };
    }

    const updateByCourseID = await AIMLSemester.findOneAndUpdate(
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
      revalidatePath(pathToRevalidate);
      return {
        success: true,
        message: "Sem is updated successfully",
      };
    } else {
      return {
        success: false,
        message: "Something went wrong ! Please try again",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong ! Please try again",
    };
  }
}

export async function deleteaidssemesters(getCurrentCourseID,getCurrentSem,pathToRevalidate) {
  try {
    await connectToDB();

    const courseID = new mongoose.Types.ObjectId(getCurrentCourseID);

    if (!getCurrentCourseID) {
      return {
        success: false,
        message: "Course ID is required",
      };
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
      revalidatePath(pathToRevalidate);
      return {
        success: true,
        message: "Course is deleted successfully",
      };
    }
    return {
      success: false,
      message: "Something went wrong! Please try again",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong! Please try again",
    };
  }
}

export async function deleteaimlsemesters(getCurrentCourseID,getCurrentSem,pathToRevalidate) {
  try {
    await connectToDB();

    const courseID = new mongoose.Types.ObjectId(getCurrentCourseID);

    if (!getCurrentCourseID) {
      return {
        success: false,
        message: "Course ID is required",
      };
    }

    const deleteSubjectByID = await AIMLSemester.findOneAndUpdate(
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
      revalidatePath(pathToRevalidate);
      return {
        success: true,
        message: "Course is deleted successfully",
      };
    }
    return {
      success: false,
      message: "Something went wrong! Please try again",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong! Please try again",
    };
  }
}