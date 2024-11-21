"use client"; // This directive ensures the component runs on the client side

import { useState, useEffect,useMemo } from "react";
import Branchcard from "../branchcard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useContext } from 'react';
import { SemInfoContext } from "../context";
import { useRouter } from "next/navigation";


export default function TextAnimation({aidssemesters,aimlsemesters}) {
  const [letters, setLetters] = useState([]);
  const [firstLine, setFirstLine] = useState([]); // First line of text
  const [secondLine, setSecondLine] = useState([]); // Second line of text
  const [inputcourse , setInputcourse] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const { setSelectedCardData,setOpenDialog,setSeminfo,setBranchdrop } = useContext(SemInfoContext);

  const router = useRouter();

  const filteredCourses = useMemo(() => {
    if (!inputcourse.trim()) return [];

    return [...aidssemesters, ...aimlsemesters]
      .flatMap((semester) => semester.subjects)
      .filter((course) =>
        course?.name?.toLowerCase().includes(inputcourse.toLowerCase())
      );
  }, [inputcourse]);

  function handlesearch(courseCode){
    const datasets = [aidssemesters, aimlsemesters]; 

    for (const dataset of datasets) {
      for (const semester of dataset) {
        const course = semester.subjects.find((subject) => subject.code === courseCode);
        if (course) {
          setInputcourse("");
          setSelectedCardData({
            name: course.name,
            code: course.code,
            credits: course.credits,
            incharge: course.incharge,
            linker: course.linker,
            ...(course.pyqlink && { pyqlink: course.pyqlink }),
            ...(course.lablink && { lablink: course.lablink }),
          });          
          setOpenDialog(true);
          setSeminfo(semester.number);
          const path = semester.path;
          setBranchdrop(path === "/aids" ? "AI&DS" : "AI&ML");
          router.push(path);
          return; 
        }
      }
    }
  }

  useEffect(() => {
    const firstText = "  NoteRIT-AI";
    const secondText = " Branch Portal";

    // Combine both lines for animation
    const fullText = [...firstText.split(""), ...secondText.split("")];

    let index = 0;

    const interval = setInterval(() => {
      if (index < fullText.length) {
        if (fullText[index] === "<br>") {
          setFirstLine([...firstText.split("")]); // Complete first line when hitting the break
        } else if (index < firstText.length) {
          setFirstLine((prev) => [...prev, fullText[index]]);
        } else {
          setSecondLine((prev) => [...prev, fullText[index]]);
        }
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="lg:w-1/2 flex flex-col justify-center items-start space-y-8 p-8">
      <h1 className="text-4xl mr-8 md:mx-auto md:text-7xl font-bold leading-tight max-w-full font-mono">
        <div>
          {firstLine.map((letter, index) => (
            <span
              key={`first-${index}`}
              className={`inline-block opacity-0 transform translate-y-3 animate-reveal ${
                letter === " " ? "w-2" : ""
              }${index < 8 ? 'text-orange-700' : ''}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>
        <div>
          {secondLine.map((letter, index) => (
            <span
              key={`second-${index}`}
              className={`inline-block opacity-0 transform translate-y-3 animate-reveal ${
                letter === " " ? "w-2" : ""
              }`}
              style={{
                animationDelay: `${(firstLine.length + index) * 0.05}s`,
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>
      </h1>
    <div className="relative flex flex-col items-center lg:items-start ml-8 lg:ml-16">
  <div className="relative w-48 sm:w-sm md:w-[280px] lg:w-[380px]">
    <Input
      type="text"
      placeholder="Search course"
      value={inputcourse}
      onChange={(event) => setInputcourse(event.target.value)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => {
        setTimeout(() => {
          setIsFocused(false);
        }, 300); 
      }}  
      className="text-green-800 w-full p-2 sm:p-3 md:p-3 lg:p-3 bg-transparent border-2 border-black rounded-md shadow-sm focus:outline-none focus:border-black focus:ring-0 placeholder:text-gray-700"
    />
    <button onClick={() =>  {
    if (filteredCourses.length > 0) {
      handlesearch(filteredCourses[0].code);
    }
    }} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black p-1.5 rounded-full shadow-sm transition duration-200">
      <Search className="h-4 w-4 text-black"/>
    </button>
  </div>
  
    {isFocused && inputcourse && (
      <div className="absolute top-full mt-2 w-full bg-gray-200 border-2 border-black px-4 pt-1 rounded-md shadow-lg min-h-[50px] max-h-[200px] overflow-y-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg z-10">
        {filteredCourses.length === 0 ? (
        <div className="text-green-800 pt-2 pb-1">No such course found</div>
      ) : (
        filteredCourses.map((filteredCourse) => (
         <div key={filteredCourse._id} onClick = {() => handlesearch(filteredCourse.code)} className= "flex flex-row py-2 border-b-2 border-black text-green-800 hover:text-green-600 transition duration-200 hover:cursor-pointer z-20">
           <div>
             {filteredCourse.name}
           </div>
           <div className = "ml-1 text-green-600">
             {filteredCourse.code}
           </div>
          </div>
        ))
      )}
    </div>
     )}
  
    </div>
      <Branchcard />
    </div>
  );
  
}
