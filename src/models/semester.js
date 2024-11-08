import mongoose from "mongoose";

const SemSchema = new mongoose.Schema({
  number : String,
  path :  String,
  imagelinks : {
      timetable :  String,
      calender :  String,
      syllabus :  String,
      cie1 :  String,
      cie2 :  String,
      see :  String
    },
  news : [
    {
      label : String,
      link : String
    }
  ],
  subjects : [
    {
      name :  String,
      code :  String,
      credits :  String,
      incharge :  String,
      linker :  String,
      pyqlink :  String,
      lablink :  String
    }
    ]
});

export const AIMLSemester = mongoose.models.AIMLSemester || mongoose.model("AIMLSemester", SemSchema,"aimlsem");
export const AIDSSemester = mongoose.models.AIDSSemester || mongoose.model("AIDSSemester", SemSchema,"aidssem");

