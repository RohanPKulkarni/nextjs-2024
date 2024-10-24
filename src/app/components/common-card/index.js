'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "../../../components/ui/card";
import Link from "next/link";
import { SemInfoContext } from "../context";
import { useContext } from "react";

export default function Commoncard({name , credits, incharge, linker, code, pyqlink, lablink}) {

  const {setOpenDialog, setSelectedCardData} = useContext(SemInfoContext);

  function handleCardClick() {
    setOpenDialog(true);
    setSelectedCardData({ name, credits, incharge, linker, code , pyqlink, lablink});
  }

  function handledialog2(dialoglink2){
    window.open(dialoglink2, "_blank", "noopener,noreferrer");
    setTimeout(() => {
      setOpenDialog(false); 
    }, 1000);
  }
  
  return (
    <Card onClick={() => handleCardClick()} className="shadow-sm shadow-gray-100 flex flex-col gap-8 rounded-2xl p-2 py-6 transition duration-300 hover:shadow-2xl hover:shadow-gray-600/10 cursor-pointer transform hover:-translate-y-2 bg-transparent border-4 border-white sm:p-8 md:p-8 lg:p-8">
        <CardHeader className="p-0 mx-auto">
          <CardTitle className="text-xl max-w-[300px] truncate font-bold text-white">
            <p className = "overflow-hidden overflow-ellipsis whitespace-nowrap">{name}</p>
            <p className="text-sm font-semibold text-white">Code - {code}</p>
            <p className="text-sm font-semibold text-white">Credits - {credits} </p>
          </CardTitle>
          <CardDescription className="mt-4 text-white font-semibold text-md">
          {incharge ? (
        <>
          {incharge.split(',').slice(0, 2).join(', ')}
          {incharge.split(',').length > 2 && '...'}
        </>
      ) : null}
          </CardDescription>
        </CardHeader>
        <CardFooter className="p-0 justify-between">
          <Button onClick={() => handledialog2(pyqlink)} 
                  className="custom-shadow ml-3 border-2 border-white bg-transparent hover:bg-transparent text-white hover:text-gray-500 shadow-md transition-all px-4 py-2 rounded-lg font-semibold">
            PYQs
          </Button>
          {lablink ? (
          <Button 
            onClick={() => handledialog2(lablink)} 
            className="custom-shadow ml-2 border-2 border-white bg-transparent hover:bg-transparent text-white hover:text-gray-500 shadow-md transition-all px-4 py-2 rounded-lg font-semibold"
          >
            Lab Code
          </Button>
        ) : null}
          <Button onClick={() => handledialog2(linker)} 
                  className="custom-shadow mr-3 border-2 border-white bg-transparent hover:bg-transparent text-white hover:text-gray-500 shadow-md transition-all px-4 py-2 rounded-lg font-semibold">
            Notes
          </Button>
        </CardFooter>
        </Card>
  );
}
