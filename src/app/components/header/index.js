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


function Header() {
  
  
  const [openSheet,setOpenSheet] = useState(false);

  const { setSelectedCardData,branchdrop,setBranchdrop,isauthenticated,setIsAuthenticated,isauthenticated1,setIsAuthenticated1,isauthenticated2,setIsAuthenticated2,isauthenticated3,setIsAuthenticated3,isauthenticated4,setIsAuthenticated4 } = useContext(SemInfoContext);
  
  const router = useRouter();
  
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
      label : "Source code",
      path : "https://github.com/RohanPKulkarni/nextjs-2024"
    },
    {
      label : "Contact",
      path : "/contribute"
    },

  ];
  

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsAuthenticated1(false);
    setIsAuthenticated2(false);
    setIsAuthenticated3(false);
    setIsAuthenticated4(false);
    localStorage.removeItem('isauthenticated'); 
    localStorage.removeItem('isauthenticated1'); 
    localStorage.removeItem('isauthenticated2'); 
    localStorage.removeItem('isauthenticated3'); 
    localStorage.removeItem('isauthenticated4'); 
  };

  return (
    <div>
     <header className="flex h-16 w-full shrink-0 items-center justify-between border-b border-black shadow-sm m-0 pb-4 mb-4 bg-transparent">

<div onClick={() => setBranchdrop("Branch")}> 
  <Link href={"/"} className="lg:hidden transition duration-200">
    <div className="text-black">
        <House className="h-9 w-9" />
      </div>
  </Link>

  <div onClick={() => setBranchdrop("Branch")}>
    <Link className="hidden font-bold text-2xl lg:flex mr-6 hover:text-green-700 transition duration-200 text-green-800" href={"/"}>
      Home
    </Link>
  </div>
</div>    


<div className="flex shrink-0 items-center ml-auto">
  <div className="mr-1 sm:mr-2 md:mr-4 ">
    <DropdownMenu>
      <DropdownMenuTrigger className="font-bold text-2xl lg:flex text-green-800 hover:text-green-700 focus:outline-none transition-all p-1 rounded-lg">
        <div className="flex shrink-0 items-center ">
          <p>{branchdrop}</p>
          <ChevronDown className="h-4 w-4 ml-1" /> 
        </div>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent className="max-h-48 overflow-y-auto bg-gray-200 rounded-md shadow-lg border border-black">
    {branchdrop === "Branch" ? (
      branchItems.map((branchItem, index, array) => (
        <Link href={branchItem.path} passHref key={branchItem.label}>
          <DropdownMenuItem
            className="flex justify-center items-center cursor-pointer relative"
            onClick={() => setBranchdrop(branchItem.label)}
          >
            <div className="h-full p-2 text-green-800 font-bold text-xl transition duration-200 hover:text-green-700">
              {branchItem.label}
            </div>
            {index < array.length - 1 && (
              <div className="absolute left-1/2 transform -translate-x-1/2 w-9/10 border-b-2 border-black mt-14" />
            )}
          </DropdownMenuItem>
        </Link>
      ))
    ) : (
      branchItems
        .filter((branchItem) => branchItem.label !== branchdrop)
        .map((branchItemm) => (
          <Link href={branchItemm.path} passHref key={branchItemm.label}>
            <DropdownMenuItem className="flex justify-center cursor-pointer">
              <div
                onClick={() => setBranchdrop(branchItemm.label)}
                className="p-2 text-green-800 font-bold text-xl transition duration-200 hover:text-green-700"
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
        <AlignJustify className="hover:cursor-pointer lg:hidden h-8 w-8 text-black" />
      </SheetTrigger>
      <SheetContent side="right" className="bg-gray-200 border border-black rounded-md shadow-lg">
        <SheetHeader>
          <SheetTitle className="text-2xl text-black">
              {isauthenticated || isauthenticated1 || isauthenticated2 || isauthenticated3 || isauthenticated4 ? "Editor" : "Guest"}
          </SheetTitle>
        </SheetHeader>
        <div className="grid gap-2 py-6">
          {optionsItems.map((optionsItem) => {
            if (optionsItem.label === "Source code" && !isauthenticated||isauthenticated1||isauthenticated2||isauthenticated3||isauthenticated4) {
              return null; // Skip rendering this item if not authenticated
            }
            return (
              <Link
                key={optionsItem.label}
                href={optionsItem.path}
                onClick={() => setOpenSheet(false)}
                className="flex w-full items-center py-2 text-lg font-semibold text-green-800 hover:text-green-700 transition duration-200 pl-4"
              >
                {optionsItem.label}
              </Link>
            );
          })}
        </div>
        <SheetFooter className="p-4 text-center">
          {isauthenticated || isauthenticated1 || isauthenticated2 || isauthenticated3 || isauthenticated4 ? (
            <Button
              onClick={() => setIsAuthenticated(false)}
              className="px-4 py-2 text-black bg-red-600 rounded-md hover:bg-red-700 transition duration-200"
            >
              Logout
            </Button>
          ) : (
            <Link
              href="/editor"
              onClick = {() => setOpenSheet(false)}
              className="text-black px-4 py-2 bg-green-600 rounded-md hover:bg-green-700 font-semibold transition duration-200"
            >
              Admin Login
            </Link>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>

    <Sheet open = {openSheet} onOpenChange={setOpenSheet}>
      <SheetTrigger asChild>
        <div className=" hidden font-bold text-2xl lg:flex hover:cursor-pointer text-green-800 hover:text-green-700 focus:outline-none">
          <div>Menu</div>
        </div>
      </SheetTrigger>
      <SheetContent side="right" className="bg-gray-200 border border-black rounded-md shadow-lg focus:outline-none ">
        <SheetHeader>
          <SheetTitle className="text-2xl text-black">
            {isauthenticated || isauthenticated1 || isauthenticated2 || isauthenticated3 || isauthenticated4 ? "Editor" : "Guest"}
          </SheetTitle>
        </SheetHeader>
        <div className="grid gap-2 py-6">
          {optionsItems.map((optionsItem) => {
            if (optionsItem.label === "Source code" && !isauthenticated) {
              return null; // Skip rendering this item if not authenticated
            }
            return (
              <Link
                key={optionsItem.label}
                href={optionsItem.path}
                onClick={() => setOpenSheet(false)}
                className="flex w-full items-center py-2 text-lg font-semibold text-green-800 hover:text-green-700 transition duration-200 pl-4"
              >
                {optionsItem.label}
              </Link>
            );
          })}
        </div>
        <SheetFooter className="p-4 text-center">
          {isauthenticated || isauthenticated1 || isauthenticated2 || isauthenticated3 || isauthenticated4 ? (
            <Button
              onClick={handleLogout}
              className="px-4 py-2 text-black bg-red-600 rounded-md hover:bg-red-700 transition duration-200"
            >
              Logout
            </Button>
          ) : (
            <Link
              href="/editor"
              onClick = {() => setOpenSheet(false)}
              className="text-black px-4 py-2 bg-green-600 rounded-md hover:bg-green-700 font-semibold transition duration-200"
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
