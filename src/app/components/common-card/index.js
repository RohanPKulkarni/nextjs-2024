'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "../../../components/ui/card";
import Link from "next/link";
import {Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle,DialogTrigger} from "../../../components/ui/dialog";

export default function Commoncard({name , credits, incharge, linker, code}) {
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Card className="flex flex-col gap-8 rounded-2xl p-2 py-6 transition duration-300 hover:shadow-2xl hover:shadow-gray-600/10 cursor-pointer transform hover:-translate-y-2 bg-transparent border-4 border-black sm:p-8 md:p-8 lg:p-8">
        <CardHeader className="p-0 mx-auto">
          <CardTitle className="text-xl max-w-[300px] truncate font-bold text-black">
            <p className = "overflow-hidden overflow-ellipsis whitespace-nowrap">{name}</p>
            <p className="text-sm font-semibold text-gray-900">Code - {code}</p>
            <p className="text-sm font-semibold text-gray-900">Credits - {credits} </p>
          </CardTitle>
          <CardDescription className="mt-4 text-gray-900 font-semibold text-md">
          {incharge ? (
        <>
          {incharge.split(',').slice(0, 2).join(', ')}
          {incharge.split(',').length > 2 && '...'}
        </>
      ) : null}
          </CardDescription>
        </CardHeader>
        <CardFooter className="p-0 justify-between">
          <Button onClick={() => window.open(linker, "_blank", "noopener,noreferrer")} 
                  className="ml-3 border-2 border-black bg-transparent hover:bg-transparent text-black hover:text-gray-700 shadow-md transition-all px-4 py-2 rounded-lg font-semibold ">
            Lab code
          </Button>
          <Button onClick={() => window.open(linker, "_blank", "noopener,noreferrer")} 
                  className="border-2 border-black bg-transparent hover:bg-transparent text-black hover:text-gray-700 shadow-md transition-all px-4 py-2 rounded-lg font-semibold">
            PYQs
          </Button>
          <Button onClick={() => window.open(linker, "_blank", "noopener,noreferrer")} 
                  className="mr-3 border-2 border-black bg-transparent hover:bg-transparent text-black hover:text-gray-700 shadow-md transition-all px-4 py-2 rounded-lg font-semibold">
            Notes
          </Button>
        </CardFooter>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-w-[320px] lg:max-w-[500px] bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <DialogHeader>
        <DialogTitle className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{name}</DialogTitle>
        <DialogDescription>
          <p className="text-gray-700 dark:text-gray-300 mb-1">{code}</p>
          <p className="text-gray-700 dark:text-gray-300">{credits}</p>
        </DialogDescription>
      </DialogHeader>
      
      <div className="mt-4 text-gray-800 dark:text-gray-200">
        {incharge}
      </div>
      
      <DialogFooter className="mt-6 flex justify-between">
        <Button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
          Lab Code
        </Button>
        <Button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg">
          PYQs
        </Button>
        <Button className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg">
          Notes
        </Button>
      </DialogFooter>
      </DialogContent>

    </Dialog>
    

  );
}
