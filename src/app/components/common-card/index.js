'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "../../../components/ui/card";
import Link from "next/link";
import { SemInfoContext } from "../context";
import { useContext,useEffect } from "react";
import {Pencil,Trash} from "lucide-react";
import EditorDialog2 from "../dialogedit";
import { Dialogdelete } from "../dialogdelete";


export default function Commoncard({name , credits, incharge, linker, code, pyqlink, lablink,_id}) {

  const { setOpenDialog, setSelectedCardData,seminfo,isauthenticated,isauthenticated1,isauthenticated2,isauthenticated3,isauthenticated4,setEditorCardData,setOpenDialog4,editorCardData,setOpenDialog5 } = useContext(SemInfoContext);

  function handleCardClick() {
    setOpenDialog(true);
    setSelectedCardData({ name, credits, incharge, linker, code , pyqlink, lablink,_id});
  }

  function handledialog2(dialoglink2){
    window.open(dialoglink2, "_blank", "noopener,noreferrer");
    setTimeout(() => {
      setOpenDialog(false); 
    }, 1000);
  }

  function handleEdit(){

    setEditorCardData({name,credits,code,incharge,linker,lablink,pyqlink,_id});
    setOpenDialog4(true);
    
  }

  function handleDelete(){
    setSelectedCardData({ name, credits, incharge, linker, code , pyqlink, lablink,_id});
    setOpenDialog5(true);
  }

  
  
  return (
    <div>
      <Card onClick={() => handleCardClick()} className="shadow-sm shadow-gray-300 flex flex-col gap-8 rounded-2xl p-2 py-6 transition duration-300 hover:shadow-2xl hover:shadow-gray-600/10 cursor-pointer transform hover:-translate-y-2 bg-transparent border-4 border-black sm:p-8 md:p-8 lg:p-8">
      {isauthenticated ? (
  <>
    {/* Buttons for all semesters */}
    <button
      onClick={(e) => {
        e.stopPropagation();
        handleEdit();
      }}
      className="absolute top-2 right-2 text-black hover:text-gray-600"
    >
      <Pencil />
    </button>
    <button
      onClick={(e) => {
        e.stopPropagation();
        handleDelete();
      }}
      className="absolute top-2 left-2 text-black hover:text-gray-600"
    >
      <Trash />
    </button>
  </>
) : (
  <>
    {(isauthenticated1 && (seminfo === "1st" || seminfo === "2nd")) ||
    (isauthenticated2 && (seminfo === "3rd" || seminfo === "4th")) ||
    (isauthenticated3 && (seminfo === "5th" || seminfo === "6th")) ||
    (isauthenticated4 && (seminfo === "7th" || seminfo === "8th")) ? (
      <>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleEdit();
          }}
          className="absolute top-2 right-2 text-black hover:text-gray-600"
        >
          <Pencil />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleDelete();
          }}
          className="absolute top-2 left-2 text-black hover:text-gray-600"
        >
          <Trash />
        </button>
      </>
    ) : null}
  </>
)}

        <CardHeader className="p-0 mx-auto">
          <CardTitle className="text-xl max-w-[300px] truncate font-bold text-black">
            <p className = "overflow-hidden overflow-ellipsis whitespace-nowrap">{name}</p>
            <p className="text-sm font-semibold text-black">Code - {code}</p>
            <p className="text-sm font-semibold text-black">Credits - {credits} </p>
          </CardTitle>
          <CardDescription className="mt-4 text-black font-semibold text-md">
          {incharge ? (
        <>
          {incharge.split(',').slice(0, 2).join(', ')}
          {incharge.split(',').length > 2 && '...'}
        </>
      ) : null}
          </CardDescription>
        </CardHeader>
        <CardFooter className="p-0 justify-between">
          {pyqlink?(
            <Button onClick={(e) => {
              e.stopPropagation();
              handledialog2(pyqlink);
            }} 
            className="custom-shadow ml-2.5 border-2 border-black bg-transparent hover:bg-transparent text-black hover:text-gray-500 shadow-md transition-all px-5 py-3 rounded-lg font-semibold">
            PYQs
          </Button>
          ) : null}
          {lablink ? (
          <Button 
            onClick={(e) => {
              e.stopPropagation();
              handledialog2(lablink);
            }}
            className="custom-shadow border-2 border-black bg-transparent hover:bg-transparent text-black hover:text-gray-500 shadow-md transition-all px-4 py-3 rounded-lg font-semibold"
          >
            Lab Code
          </Button>
        ) : null}
        {linker?(
          <Button onClick={(e) => {
            e.stopPropagation();
            handledialog2(linker);
          }} 
          className="custom-shadow mr-2.5 border-2 border-black bg-transparent hover:bg-transparent text-black hover:text-gray-500 shadow-md transition-all px-5 py-3 rounded-lg font-semibold">
          Notes
        </Button>
        ) : null}     
        </CardFooter>
      </Card>
      <EditorDialog2/>
      <Dialogdelete/>
    </div>
   
        
  );
}
