'use client'


import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../../../components/ui/sheet";
import { Button } from "../../../components/ui/button";
import { AlignJustify, Moon , House , ChevronDown} from "lucide-react";
import {  DropdownMenu,DropdownMenuTrigger,DropdownMenuContent,DropdownMenuItem } from "../../../components/ui/dropdown-menu";




function Header() {

 

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
    {
      label : "Mechanical",
      path : "/mech"
    },
    {
      label : "CSE",
      path : "/cse"
    },
    {
      label : "ISE",
      path : "/ise"
    },
    {
      label : "Civil",
      path : "/civil"
    },
    {
      label : "ECE",
      path : "/ece"
    },
    {
      label : "ET",
      path : "/et"
    },
    {
      label : "IM",
      path : "/im"
    },
    {
      label : "Biotech",
      path : "/bt"
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



  return (
    <div>
      <header className="flex h-16 w-full shrink-0 items-center justify-between">
       
        <div> 
          <Link href={"/"}  className="lg:hidden">
            <House className="h-7 w-7"/>
          </Link>
    
          <Link className="hidden font-bold text-2xl lg:flex mr-6 " href={"/"}>
            Home
          </Link>
        </div>      
        
        <div className="flex shrink-0 items-center ml-auto">
          <div className="mr-8 sm:mr-2 md:mr-4">
            <DropdownMenu >
              <DropdownMenuTrigger className="font-bold text-2xl lg:flex">
                <div className="flex shrink-0 items-center ">
                  <p>Branch</p>
                  <ChevronDown className="h-4 w-4"/> 
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="max-h-48 overflow-y-auto">
                {branchItems.map((branchItem) =>
                (
                  <DropdownMenuItem >
                    <Link href={branchItem.path} passHref>
                      <Button>{branchItem.label}</Button>
                    </Link>                              
                  </DropdownMenuItem>
                )
                )}       
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div>
            <Sheet>
                <SheetTrigger asChild>
                  <AlignJustify className="lg:hidden h-7 w-7" />
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
