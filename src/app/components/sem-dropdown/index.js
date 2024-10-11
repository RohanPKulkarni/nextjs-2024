'use client'

import {  DropdownMenu,DropdownMenuTrigger,DropdownMenuContent,DropdownMenuItem } from "../../../components/ui/dropdown-menu"
import {  ChevronDown } from "lucide-react";
import { Button } from "../../../components/ui/button";
import Commoncard from "../common-card";
import { useContext } from "react";
import { SemInfoContext } from "../context";

export const aidssemesters = [
  {
    number : "3rd",
    subjects : [
    {
      name : "operating system",
      credits : "3",
      incharge : "Mr.person",
      linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
    },
    {
      name : "database management systems",
      credits : "4",
      incharge : "Mr.person2",
      linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
    },
    {
      name : "Data science",
      credits : "3",
      incharge : "Mr.person3",
      linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
    },
    {
      name : "Machine learning",
      credits : "3",
      incharge : "Mr.person",
      linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
    },
    {
      name : "Pyhon",
      credits : "1",
      incharge : "Mr.person",
      linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
    },
    {
      name : "Java",
      credits : "2",
      incharge : "Mr.person4",
      linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
    },
  ]
  },
  {
    number : "4th",
    subjects : [
      {
        name : "oferating system",
        credits : "3",
        incharge : "Mr.person",
        linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
      },
      {
        name : "database management ",
        credits : "4",
        incharge : "Mr.person2",
        linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
      },
      {
        name : "Data science",
        credits : "3",
        incharge : "Mr.person3",
        linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
      },
      {
        name : "Machine learning",
        credits : "3",
        incharge : "Mr.person",
        linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
      },
      {
        name : "Pyhon",
        credits : "1",
        incharge : "Mr.person",
        linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
      },
      {
        name : "Java",
        credits : "2",
        incharge : "Mr.person4",
        linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
      },
    ]
  },
  {
    number : "5th",
    subjects : [
      {
        name : "ooooperating system",
        credits : "3",
        incharge : "Mr.person",
        linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
      },
      {
        name : "database management ",
        credits : "4",
        incharge : "Mr.person2",
        linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
      },
      {
        name : "Data science",
        credits : "3",
        incharge : "Mr.person3",
        linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
      },
      {
        name : "Machine learning",
        credits : "3",
        incharge : "Mr.person",
        linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
      },
      {
        name : "Pyhon",
        credits : "1",
        incharge : "Mr.person",
        linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
      },
      {
        name : "Java",
        credits : "2",
        incharge : "Mr.person4",
        linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
      },
    ]
  },
  {
    number : "6th",
    subjects : [
    {
      name : "operating system",
      credits : "3",
      incharge : "Mr.person",
      linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
    },
    {
      name : "database management systems",
      credits : "4",
      incharge : "Mr.person2",
      linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
    },
    {
      name : "Data science",
      credits : "3",
      incharge : "Mr.person3",
      linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
    },
    {
      name : "Machine learning",
      credits : "3",
      incharge : "Mr.person",
      linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
    },
    {
      name : "Pyhon",
      credits : "1",
      incharge : "Mr.person",
      linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
    },
    {
      name : "Java",
      credits : "2",
      incharge : "Mr.person4",
      linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
    },
  ]
  }
];

export const aimlsemesters = [
  {
    number : "3rd",
    subjects : [
    {
      name : "aiml op system",
      credits : "3",
      incharge : "Mr.person",
      linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
    },
    {
      name : "database management ml",
      credits : "4",
      incharge : "Mr.person2",
      linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
    },
    {
      name : "Data science ml",
      credits : "3",
      incharge : "Mr.person3",
      linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
    },
    {
      name : "Machine learning ml",
      credits : "3",
      incharge : "Mr.person",
      linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
    },
    {
      name : "Pyhon ml",
      credits : "1",
      incharge : "Mr.person",
      linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
    },
    {
      name : "Java ml",
      credits : "2",
      incharge : "Mr.person4",
      linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
    },
  ]
  },
  {
    number : "4th",
    subjects : [
      {
        name : "oferating system ml",
        credits : "3",
        incharge : "Mr.person",
        linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
      },
      {
        name : "database management ml",
        credits : "4",
        incharge : "Mr.person2",
        linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
      },
      {
        name : "Data science ml",
        credits : "3",
        incharge : "Mr.person3",
        linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
      },
      {
        name : "Machine learning",
        credits : "3",
        incharge : "Mr.person",
        linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
      },
      {
        name : "Pyhon ml",
        credits : "1",
        incharge : "Mr.person",
        linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
      },
      {
        name : "Java ml",
        credits : "2",
        incharge : "Mr.person4",
        linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
      },
    ]
  },
  {
    number : "5th",
    subjects : [
      {
        name : "ooooperating system ml",
        credits : "3",
        incharge : "Mr.person",
        linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
      },
      {
        name : "database management ml",
        credits : "4",
        incharge : "Mr.person2",
        linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
      },
      {
        name : "Data science ml",
        credits : "3",
        incharge : "Mr.person3",
        linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
      },
      {
        name : "Machine learning ml",
        credits : "3",
        incharge : "Mr.person",
        linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
      },
      {
        name : "Pyhon",
        credits : "1",
        incharge : "Mr.person",
        linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
      },
      {
        name : "Java ml",
        credits : "2",
        incharge : "Mr.person4",
        linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
      },
    ]
  },
  {
    number : "6th",
    subjects : [
    {
      name : "oating system ml",
      credits : "3",
      incharge : "Mr.person",
      linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
    },
    {
      name : "database management ml",
      credits : "4",
      incharge : "Mr.person2",
      linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
    },
    {
      name : "Data science",
      credits : "3",
      incharge : "Mr.person3",
      linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
    },
    {
      name : "Machine learning",
      credits : "3",
      incharge : "Mr.person",
      linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
    },
    {
      name : "Pyhon",
      credits : "1",
      incharge : "Mr.person",
      linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
    },
    {
      name : "Java",
      credits : "2",
      incharge : "Mr.person4",
      linker : "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-"
    },
  ]
  }
];




export function Semdropdown({branch}){

  const {  setSeminfo,seminfo } = useContext(SemInfoContext);

  function handlesem(sem){    
    setSeminfo(sem);
  }
  return (
      <div className ="mx-auto mb-4">
          <DropdownMenu >
            <DropdownMenuTrigger className="font-bold text-2xl lg:flex">
              <div className="flex shrink-0 items-center ">
                <p>{seminfo} Semester</p>
                <ChevronDown className="h-4 w-4 ml-2"/> 
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="max-h-48 overflow-y-auto">
            {branch === "aids" ? (
              aidssemesters.map((sem) => (
                <DropdownMenuItem key={sem.number}>
                  <Button onClick={() => handlesem(sem.number)}>{sem.number}</Button>
                </DropdownMenuItem>
              ))
            ) : (
              aimlsemesters.map((sem) => (
                <DropdownMenuItem key={sem.number}>
                  <Button onClick={() => handlesem(sem.number)}>{sem.number}</Button>
                </DropdownMenuItem>
              ))
            )}
            </DropdownMenuContent>
          </DropdownMenu>
      </div>
  );
}