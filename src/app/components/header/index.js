'use client'


import Link from "next/link";  
import { Sheet, SheetContent, SheetTrigger ,SheetHeader ,SheetTitle ,SheetClose,SheetFooter} from "../../../components/ui/sheet";
import { Button } from "../../../components/ui/button";
import { AlignJustify, Moon , House , ChevronDown , Search} from "lucide-react";
import {  DropdownMenu,DropdownMenuTrigger,DropdownMenuContent,DropdownMenuItem } from "../../../components/ui/dropdown-menu";
import { Input } from "../../../components/ui/input" ;
import { useState,useMemo,useEffect } from 'react';
import { useContext } from 'react';
import { SemInfoContext } from "../context";
import { useRouter } from "next/navigation";


function Header({aidssemesters,aimlsemesters}) {
  
  const [inputcourse , setInputcourse] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [openSheet,setOpenSheet] = useState(false);

  const { setSelectedCardData,setOpenDialog,setSeminfo,branchdrop,setBranchdrop,isauthenticated,setIsAuthenticated } = useContext(SemInfoContext);
  
  const router = useRouter();

  const filteredCourses = useMemo(() => {
    if (!inputcourse.trim()) return [];

    return [...aidssemesters, ...aimlsemesters]
      .flatMap((semester) => semester.subjects)
      .filter((course) =>
        course?.name?.toLowerCase().includes(inputcourse.toLowerCase())
      );
  }, [inputcourse]);


  
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
      label : "Contact",
      path : "/contribute"
    },

  ];
  

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

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isauthenticated'); 
  };

  return (
    <div>
     <header className="flex h-16 w-full shrink-0 items-center justify-between border-b border-white shadow-sm m-0 pb-4 mb-4 bg-transparent">

<div onClick={() => setBranchdrop("Branch")}> 
  <Link href={"/"} className="lg:hidden transition duration-200">
    <div className="text-white">
        <House className="h-9 w-9" />
      </div>
  </Link>

  <div onClick={() => setBranchdrop("Branch")}>
    <Link className="hidden font-bold text-2xl lg:flex mr-6 text-white hover:text-gray-500 transition duration-200" href={"/"}>
      Home
    </Link>
  </div>
</div>    

<div className="relative flex flex-col items-center lg:items-start mx-auto lg:ml-80 sm:ml-32 md:ml-32">
  <div className="relative w-36 sm:w-sm md:w-[280px] lg:w-[380px]">
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
      className="text-white w-full p-2 sm:p-3 md:p-3 lg:p-3 bg-transparent border-2 border-white rounded-md shadow-sm focus:outline-none focus:border-white focus:ring-0 placeholder:text-gray-300"
    />
    <button onClick={() =>  {
    if (filteredCourses.length > 0) {
      handlesearch(filteredCourses[0].code);
    }
    }} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-white text-white p-1.5 rounded-full shadow-sm transition duration-200">
      <Search className="h-4 w-4 text-black"/>
    </button>
  </div>
  
    {isFocused && inputcourse && (
      <div className="absolute top-full mt-2 w-full bg-slate-900 border-2 border-white px-4 pt-1 rounded-md shadow-lg min-h-[50px] max-h-[200px] overflow-y-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg z-10">
        {filteredCourses.length === 0 ? (
        <div className="text-gray-300 pt-2 pb-1">No such course found</div>
      ) : (
        filteredCourses.map((filteredCourse) => (
         <div key={filteredCourse.code} onClick = {() => handlesearch(filteredCourse.code)} className= "flex flex-row py-2 border-b-2 border-white text-white hover:text-gray-500 transition duration-200 hover:cursor-pointer z-20">
           <div>
             {filteredCourse.name}
           </div>
           <div className = "ml-1 text-gray-500">
             {filteredCourse.code}
           </div>
          </div>
        ))
      )}
    </div>
     )}
  
</div>

<div className="flex shrink-0 items-center ml-auto">
  <div className="mr-1 sm:mr-2 md:mr-4 ">
    <DropdownMenu>
      <DropdownMenuTrigger className="font-bold text-2xl lg:flex text-white hover:text-gray-500 focus:outline-none border-2 border-amber-400  shadow-md transition-all p-1 rounded-lg">
        <div className="flex shrink-0 items-center ">
          <p>{branchdrop}</p>
          <ChevronDown className="h-4 w-4 ml-1" /> 
        </div>
      </DropdownMenuTrigger>


      
      <DropdownMenuContent className="max-h-48 overflow-y-auto bg-slate-900 rounded-md shadow-lg border border-white ">
      {branchdrop === "Branch" ? (
          branchItems.map((branchItem, index, array) => (
            <Link href={branchItem.path} passHref key={branchItem.label}>  
              <DropdownMenuItem 
                className="flex justify-center items-center cursor-pointer relative " 
                onClick={() => setBranchdrop(branchItem.label)}
              >
                <div className="h-full p-2 text-white font-bold text-xl transition duration-200 hover:text-gray-900">
                  {branchItem.label}
                </div>
                {index < array.length - 1 && ( 
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-9/10 border-b-2 border-white mt-14" />
                )}
              </DropdownMenuItem>
            </Link>
          ))
        ) : (
          branchItems
            .filter((branchItem) => branchItem.label !== branchdrop)
            .map((branchItemm) => (
              <Link href={branchItemm.path} passHref>
              <DropdownMenuItem className="flex justify-center cursor-pointer " key={branchItemm.label}>
                  <div 
                    onClick={() => setBranchdrop(branchItemm.label)} 
                    className="p-2 text-white font-bold text-xl transition duration-200 hover:text-gray-900"
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
    <Sheet open = {openSheet} onOpenChange={setOpenSheet}>
      <SheetTrigger asChild>
        <AlignJustify className="hover:cursor-pointer lg:hidden h-8 w-8 text-white" />
      </SheetTrigger>
      <SheetContent side="right" className="bg-slate-900 border border-white rounded-md shadow-lg">
        <SheetHeader>
          <SheetTitle className="text-2xl text-white">
              {isauthenticated ? "Editor" : "Guest"}
          </SheetTitle>
        </SheetHeader>
        <div className="grid gap-2 py-6">
          {optionsItems.map((optionsItem) => (
            <Link
              key={optionsItem.label}
              href={optionsItem.path}
              onClick={() => setOpenSheet(false)}
              className="flex w-full items-center py-2 text-lg font-semibold text-gray-100 hover:text-gray-500 transition duration-200 pl-4"
            >
              {optionsItem.label}
            </Link>
          ))}
        </div>
        <SheetFooter className="p-4 text-center">
          {isauthenticated ? (
            <Button
              onClick={() => setIsAuthenticated(false)}
              className="px-4 py-2 text-gray-100 bg-red-600 rounded-md hover:bg-red-700 transition duration-200"
            >
              Logout
            </Button>
          ) : (
            <Link
              href="/editor"
              onClick = {() => setOpenSheet(false)}
              className="text-gray-100 hover:text-blue-400 font-semibold transition duration-200"
            >
              Admin Login
            </Link>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>

    <Sheet open = {openSheet} onOpenChange={setOpenSheet}>
      <SheetTrigger asChild>
        <div className="ml-10 hidden font-bold text-2xl lg:flex hover:cursor-pointer text-gray-100 hover:text-gray-500 focus:outline-none">
          <div>Menu</div>
        </div>
      </SheetTrigger>
      <SheetContent side="right" className="bg-slate-900 border border-white rounded-md shadow-lg focus:outline-none ">
        <SheetHeader>
          <SheetTitle className="text-2xl text-white">
            {isauthenticated ? "Editor" : "Guest"}
          </SheetTitle>
        </SheetHeader>

        <div className="grid gap-2 py-6">
          {optionsItems.map((optionsItem, ) => (
            <Link
              key={optionsItem.label}
              href={optionsItem.path}
              onClick={() => setOpenSheet(false)}
              className="flex w-full items-center py-2 text-lg font-semibold text-gray-100 hover:text-gray-500 transition duration-200 pl-4"
            >
              {optionsItem.label}
            </Link>
          ))}
        </div>
        <SheetFooter className="p-4 text-center">
          {isauthenticated ? (
            <Button
              onClick={handleLogout}
              className="px-4 py-2 text-gray-100 bg-red-600 rounded-md hover:bg-red-700 transition duration-200"
            >
              Logout
            </Button>
          ) : (
            <Link
              href="/editor"
              onClick = {() => setOpenSheet(false)}
              className="text-gray-100 hover:text-blue-400 font-semibold transition duration-200"
            >
              Admin Login
            </Link>
          )}
        </SheetFooter>


      </SheetContent>
    </Sheet>   
  </div> 
</div>
</header>

    </div>

  );
}

export default Header;
