'use client'

import {  DropdownMenu,DropdownMenuTrigger,DropdownMenuContent,DropdownMenuItem } from "../../../components/ui/dropdown-menu"
import {  ChevronDown,CalendarClock } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { useContext } from "react";
import { SemInfoContext } from "../context";


const scheduledropdown = [
  {
    label : "Class Time Table",
    caller : "timetable"
  },
  {
    label : "Academic Calender",
    caller : "calender"
  },
  {
    label : "Syllabus",
    caller : "syllabus"
  },
  {
    label : "CIE1 Schedule",
    caller : "cie1"
  },
  {
    label : "CIE2 Schedule",
    caller : "cie2"
  },
  {
    label : "SEE Schedule",
    caller : "see"
  },
  
];


export function Semdropdown({semesters}){

  const {  setSeminfo,seminfo,openDialog2,setOpenDialog2 ,setImgSrc,imgsrc } = useContext(SemInfoContext);
   
  function handleimage(call) {
    if (call === "syllabus") {
      let syllabusURL = "";    
        syllabusURL = semesters
          .filter((sem) => sem.number === seminfo)
          .map((sem) => sem.imagelinks[call]);
      
      window.open(syllabusURL, "_blank");
    } else {
      semesters
        .filter((sem) => sem.number === seminfo)
        .map((sem) => {
          setImgSrc(sem.imagelinks[call]);
          setOpenDialog2(true);
        });
    }
  }
  
  return (
    <div className="relative w-full mb-4">
  <div className="flex justify-center">
    <DropdownMenu>
      <DropdownMenuTrigger className="font-bold text-white text-2xl lg:flex focus:outline-none hover:text-gray-500 border-2 border-amber-400 shadow-md transition-all p-1 rounded-lg">
        <div className="flex shrink-0 items-center focus:outline-none">
          <p>{seminfo} Semester</p>
          <ChevronDown className="h-4 w-4 ml-1" /> 
        </div>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent className="w-full max-h-60 bg-slate-900 rounded-md shadow-lg border border-white overflow-y-auto p-2 min-w-[200px]">
          {semesters
          .filter((sem) => sem.number !== seminfo)
          .map((sem, index, array) => ( 
            <DropdownMenuItem 
              key={sem.number} 
              className="p-3 relative text-white text-xl font-bold transition-all duration-200 cursor-pointer"
              onClick={() => setSeminfo(sem.number)}
            >
              <div className="mx-auto">
                {sem.number}
              </div>
              {index < array.length - 1 && ( 
                <div className="absolute left-1/2 transform -translate-x-1/2 w-9/10 border-b-2 border-white mt-12" />
              )}
            </DropdownMenuItem>
          ))
          }
      </DropdownMenuContent>
    </DropdownMenu>
  </div>

  <div className="absolute right-0 top-0">
  <DropdownMenu>
    <DropdownMenuTrigger className="font-bold text-white text-2xl flex focus:outline-none hover:text-gray-500 border-2 border-amber-400 shadow-md transition-all p-1 rounded-lg">
      <div className="flex shrink-0 items-center focus:outline-none">
        <CalendarClock className="lg:hidden h-8 w-8 mr-1" />
        <p className="hidden lg:flex">Schedule</p>
        <ChevronDown className="hidden lg:flex h-4 w-4 ml-1" />
      </div>
    </DropdownMenuTrigger>

    <DropdownMenuContent className="w-full max-h-56 bg-slate-900 rounded-md shadow-lg border border-white overflow-y-auto p-2 min-w-[200px]">
      {scheduledropdown.map((item, index, array) => (
        <DropdownMenuItem
          key={item.label}
          className="p-3 relative text-white text-lg font-bold transition-all duration-200 cursor-pointer"
          onClick={() => handleimage(item.caller)}
        >
          <div className="mx-auto">{item.label}</div>
          {index < array.length - 1 && (
            <div className="absolute left-1/2 transform -translate-x-1/2 w-9/10 border-b-2 border-white mt-[52px]" />
          )}
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
</div>

</div>
  

  );
}
