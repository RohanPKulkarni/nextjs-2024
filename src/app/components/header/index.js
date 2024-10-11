'use client'


import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../../../components/ui/sheet";
import { Button } from "../../../components/ui/button";
import { AlignJustify, Moon , House , ChevronDown , Search} from "lucide-react";
import {  DropdownMenu,DropdownMenuTrigger,DropdownMenuContent,DropdownMenuItem } from "../../../components/ui/dropdown-menu";
import { Input } from "../../../components/ui/input" ;
import { useState,useMemo } from 'react';
import { aidssemesters , aimlsemesters } from "../sem-dropdown";




function Header() {

  const [inputcourse , setInputcourse] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [branchdrop , setBranchdrop] = useState("Branch");
  

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
      label : "AIDS",
      path : "/aids"
    },
    {
      label : "AIML",
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

  

  return (
    <div>
    <header className=" flex h-16 w-full shrink-0 items-center justify-between border-b border-gray-300 shadow-sm shadow-down-only m-0 pb-4 mb-4">
     
      <div> 
        <Link href={"/"}  className="lg:hidden">
          <House className="h-8 w-8"/>
        </Link>
  
        <div onClick={() => setBranchdrop("Branch")}>
          <Link className="hidden font-bold text-2xl lg:flex mr-6" href="/">
            Home
          </Link>
        </div>

      </div>    

      <div className="relative flex flex-col items-center lg:items-start lg:ml-96 ml-8 sm:ml-32 ">
      <div className="relative w-full w-xs sm:w-sm md:w-md lg:w-lg">
        <Input
          type="text"
          placeholder="Search for a course"
          value={inputcourse}
          onChange={(event) => setInputcourse(event.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50"
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-600 text-white p-2 rounded-full shadow-sm">
          <Search className="h-4 w-4" />
        </button>
      </div>
      {isFocused && inputcourse && (
        <div className="absolute top-full mt-2 w-full bg-gray-100 px-4 py-3 rounded-md shadow-lg min-h-[50px] max-h-[180px] overflow-y-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          {filteredCourses.length === 0 ? (
            <div>No such course found</div> // Display when no matching courses
          ) : (
            filteredCourses.map((filteredCourse) => (
              <div key={filteredCourse.name} className="py-2 border-b border-gray-300 last:border-b-0">
                {filteredCourse.name}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  

      
      <div className="flex shrink-0 items-center ml-auto ">
        <div className="mr-3 sm:mr-2 md:mr-4">
          <DropdownMenu >
            <DropdownMenuTrigger className="font-bold text-2xl lg:flex">
              <div className="flex shrink-0 items-center ">
                <p>{branchdrop}</p>
                <ChevronDown className="h-4 w-4"/> 
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="max-h-48 overflow-y-auto">
            {branchdrop === "Branch" ? (
              branchItems.map((branchItem) => (
                <DropdownMenuItem className="flex justify-center" key={branchItem.label}>
                  <Link href={branchItem.path} passHref>
                    <Button onClick={() => setBranchdrop(branchItem.label)}>{branchItem.label}</Button>
                  </Link>
                </DropdownMenuItem>
              ))
            ) : (
              branchItems
                .filter((branchItem) => branchItem.label !== branchdrop)
                .map((branchItemm) => (
                  <DropdownMenuItem className="flex justify-center" key={branchItemm.label}>
                    <Link href={branchItemm.path} passHref>
                      <Button onClick={() => setBranchdrop(branchItemm.label)}>{branchItemm.label}</Button>
                    </Link>
                  </DropdownMenuItem>
                ))
            )}
       
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <div>
          <Sheet>
              <SheetTrigger asChild>
                <AlignJustify className="lg:hidden h-8 w-8" />
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-2 py-6">
                  {optionsItems.map((optionsItem) =>
                    (
                      <Link
                        href={optionsItem.path}
                        className="flex w-full items-center py-2 text-lg font-semibold"
                      >
                        {optionsItem.label}
                      </Link>
                    ) 
                  )}
                
                </div>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
              <div className="ml-10 hidden font-bold text-2xl lg:flex lg:flex hover : cursor-pointer">
                  <div>Menu</div>
              </div>
                
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-2 py-6">
                  {optionsItems.map((optionsItem) =>
                    (
                      <Link
                        href={optionsItem.path}
                        className="flex w-full items-center py-2 text-lg font-semibold"
                      >
                        {optionsItem.label}
                      </Link>
                    ) 
                  )}
                
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
