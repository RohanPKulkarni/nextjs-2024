'use client'


import {Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle,DialogTrigger,DialogClose} from "../../../components/ui/dialog";
import { SemInfoContext } from "../context";
import { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { deleteaidsnews,deleteaimlnews } from "@/actions";

export function DialogNews(){

  const {newsdetails2,openDialog6,setOpenDialog6,branchdrop,seminfo,isauthenticated} = useContext(SemInfoContext);


  async function handledelete(){
    console.log(newsdetails2)
    if (branchdrop === "AI&DS"){
      try{
      const result = await deleteaidsnews(newsdetails2.label,seminfo,"/aids");
          }
         catch(e){
          console.log(e);
        }
    }else{
      try{
      const result = await deleteaimlnews(newsdetails2.label,seminfo,"/aiml");
            }
           catch(e){
            console.log(e);
          }
    }
    setOpenDialog6(false);
  };


  return(
    <div>
      <Dialog open={openDialog6} onOpenChange={setOpenDialog6} className="bg-slate-900 text-white border-2 border-white">
        <DialogContent className="bg-slate-900 text-white sm:max-w-[425px] max-w-[340px] lg:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{newsdetails2.label}</DialogTitle>
            <DialogDescription className="mt-2 text-white text-xl">
              {newsdetails2.link}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex justify-between">
            <DialogClose asChild>
              <Button variant="outline" className="bg-slate-700 text-white border-slate-600 hover:bg-slate-600">
                Cancel
              </Button>
            </DialogClose>
            {isauthenticated?(
              <Button
              variant="destructive"
              className="bg-red-600 text-white hover:bg-red-700"
              onClick={handledelete}
            >
              Delete
            </Button>
            ):null}  
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  
  );
}
