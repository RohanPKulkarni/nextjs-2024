'use client'


import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../../../components/ui/sheet";
import { Button } from "../../../components/ui/button";
import { AlignJustify, Moon , House , ChevronDown , Search} from "lucide-react";
import {  DropdownMenu,DropdownMenuTrigger,DropdownMenuContent,DropdownMenuItem } from "../../../components/ui/dropdown-menu";
import { Input } from "../../../components/ui/input" ;
import { useState,useMemo,useEffect } from 'react';
import { aidssemesters , aimlsemesters } from "../sem-dropdown";
import { useContext } from 'react';
import { SemInfoContext } from "../context";
import { useRouter } from "next/router";





function Header() {

  const [inputcourse , setInputcourse] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const { setSeminfo } = useContext(SemInfoContext);
  

  const [branchdrop, setBranchdrop] = useState(
    () => localStorage.getItem('branchdrop') || 'Branch'
  );
  
  useEffect(() => {
    localStorage.setItem('branchdrop', branchdrop);
  }, [branchdrop]);

  const menuItems = [
    
    {
      label: "Branch",
      path: "/branch",
      show: true,
    },
    
    {
      label: "Options",
      path: "/options",
      show: true,

    },
    
  ];

  const branchItems = [
    {
      label : "AI&DS",
      path : "/aids"
    },
    {
      label : "AI&ML",
      path : "/aiml"
    },
    
  ];

  const optionsItems = [
    {
      label : "login",
      path : "/login"
    },
    {
      label : "sign-up",
      path : "/sign-up"
    },
    {
      label : "settings",
      path : "/settings"
    },
    {
      label : "contribute",
      path : "/contribute"
    },
    
  ];

  const filteredCourses = useMemo(() => {
    if (!inputcourse.trim()) return []; // Return empty array if search input is blank

    return [...aidssemesters, ...aimlsemesters]
      .flatMap((semester) => semester.subjects)
      .filter((course) => 
        course?.name?.toLowerCase().includes(inputcourse.toLowerCase())
      );
  }, [inputcourse]); // Recompute only when inputcourse changes

  function handlesearch(courseCode){
    const datasets = [aidssemesters, aimlsemesters]; // Combine both datasets
    const router = useRouter();

    for (const dataset of datasets) {
      for (const semester of dataset) {
        const course = semester.subjects.find((subject) => subject.code === courseCode);
        if (course) {
          setSeminfo(semester.number);
          const path = semester.path; // Get the path
          router.push(path);
          return; // Exit loop if found
        }
      }
    }
  }

 

  return (
    <div>
     <header className="flex h-16 w-full shrink-0 items-center justify-between border-b border-black shadow-sm m-0 pb-4 mb-4 bg-transparent">

<div onClick={() => setBranchdrop("Branch")}> 
  <Link href={"/"} className="lg:hidden transition duration-200">
    <House className="h-8 w-8" />
  </Link>

  <div onClick={() => setBranchdrop("Branch")}>
    <Link className="hidden font-bold text-2xl lg:flex mr-6 text-gray-900 hover:text-gray-700 transition duration-200" href={"/"}>
      Home
    </Link>
  </div>
</div>    

<div className="relative flex flex-col items-center lg:items-start lg:ml-80 ml-8 sm:ml-32 md:ml-32">
  <div className="relative w-full w-xs sm:w-sm md:w-[280px] lg:w-[380px]">
    <Input
      type="text"
      placeholder="Search for a course"
      value={inputcourse}
      onChange={(event) => setInputcourse(event.target.value)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className="w-full p-3 bg-transparent border-2 border-black rounded-md shadow-sm focus:outline-none focus:border-gray-600 focus:ring-0 placeholder-black-800"
    />
    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full shadow-sm transition duration-200">
      <Search className="h-4 w-4"/>
    </button>
  </div>
  
  {isFocused && inputcourse && (
   <div  onClick = {() => console.log("hi")} className="absolute top-full mt-2 w-full bg-gradient-to-r from-blue-400 to-green-300 border-2 border-black px-4 pt-1 rounded-md shadow-lg min-h-[50px] max-h-[180px] overflow-y-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg z-10">
   {filteredCourses.length === 0 ? (
     <div className="text-black-600 pt-2"  onClick = {() => console.log("hi")}>No such course found</div>
   ) : (
     filteredCourses.map((filteredCourse) => (
      <div key={filteredCourse.name} onClick = {() => console.log("hi")} className= "py-2 border-b-2 border-black bg-red-500 text-black-800 hover:text-gray-500 transition duration-200 hover:cursor-pointer z-20">
         {filteredCourse.name}
       </div>
    
     ))
   )}
 </div>
  )}
</div>

<div className="flex shrink-0 items-center ml-auto">
  <div className="mr-3 sm:mr-2 md:mr-4">
    <DropdownMenu>
      <DropdownMenuTrigger className="font-bold text-2xl lg:flex text-gray-900 hover:text-gray-700 focus:outline-none">
        <div className="flex shrink-0 items-center ">
          <p className="text-black bg-transparent hover:text-gray-700">{branchdrop}</p>
          <ChevronDown className="h-4 w-4" /> 
        </div>
      </DropdownMenuTrigger>
      
      
      <DropdownMenuContent className="max-h-48 overflow-y-auto bg-gradient-to-r from-blue-400 to-green-300 rounded-md shadow-lg border border-black ">
      {branchdrop === "Branch" ? (
          branchItems.map((branchItem, index, array) => (
            <Link href={branchItem.path} passHref key={branchItem.label}>  
              <DropdownMenuItem 
                className="flex justify-center items-center cursor-pointer relative" 
                onClick={() => setBranchdrop(branchItem.label)}
              >
                <div className="h-full p-2 text-black font-bold text-xl transition duration-200">
                  {branchItem.label}
                </div>
                {/* Render the border div only if this is not the last item */}
                {index < array.length - 1 && ( // Check if it's not the last index
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-9/10 border-b-2 border-black mt-14" />
                )}
              </DropdownMenuItem>
            </Link>
          ))
        ) : (
          branchItems
            .filter((branchItem) => branchItem.label !== branchdrop)
            .map((branchItemm) => (
              <Link href={branchItemm.path} passHref>
              <DropdownMenuItem className="flex justify-center cursor-pointer" key={branchItemm.label}>
                  <div 
                    onClick={() => setBranchdrop(branchItemm.label)} 
                    className="p-2 text-black font-bold text-xl transition duration-200 "
                  >
                    {branchItemm.label}
                  </div>
              </DropdownMenuItem>
              </Link>
            ))
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  </div>

  <div>
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="lg:hidden h-8 w-8 text-gray-800" />
      </SheetTrigger>
      <SheetContent side="right" className="bg-white border border-black rounded-md shadow-lg">
        <div className="grid gap-2 py-6">
          {optionsItems.map((optionsItem) => (
            <Link
              key={optionsItem.label}
              href={optionsItem.path}
              className="flex w-full items-center py-2 text-lg font-semibold text-gray-800 hover:bg-gray-200 transition duration-200"
            >
              {optionsItem.label}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>

    <Sheet>
      <SheetTrigger asChild>
        <div className="ml-10 hidden font-bold text-2xl lg:flex hover:cursor-pointer text-gray-900 hover:text-gray-700 focus:outline-none">
          <div>Menu</div>
        </div>
      </SheetTrigger>
      <SheetContent side="right" className="bg-white border border-black rounded-md shadow-lg">
        <div className="grid gap-2 py-6">
          {optionsItems.map((optionsItem) => (
            <Link
              key={optionsItem.label}
              href={optionsItem.path}
              className="flex w-full items-center py-2 text-lg font-semibold text-gray-800 hover:bg-gray-200 transition duration-200"
            >
              {optionsItem.label}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>   
  </div> 
</div>
</header>

    </div>

  );
}

export default Header;
