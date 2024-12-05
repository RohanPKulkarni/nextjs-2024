'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle,DialogTrigger,DialogClose} from "../../../components/ui/dialog";
import { SemInfoContext } from "../context";
import { useContext, useEffect, useState } from "react";
import {Pencil} from "lucide-react";
import { addaidsnews,addaimlnews } from "@/actions";


export default function NewsDialog(){

  const { newsdetails,setNewsDetails,branchdrop,seminfo,isauthenticated,isauthenticated1,isauthenticated2,isauthenticated3,isauthenticated4 } = useContext(SemInfoContext);

  const [openDialog,setOpenDialog] = useState(false);

  useEffect(() => {
    console.log(newsdetails);
  },[newsdetails]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewsDetails((prevDetails) => ({
      ...prevDetails,
      [name] : value
    }));
  };

  async function handlesave(){
    if (branchdrop === "AI&DS"){
      console.log(newsdetails);
      try{
      const result = await addaidsnews(newsdetails,seminfo,"/aids");
      console.log(result);
          }
         catch(e){
          console.log(e);
        }
    }else{
      try{
      const result = await addaimlnews(newsdetails,seminfo,"/aiml");
            }
           catch(e){
            console.log(e);
          }
    }
    setOpenDialog(false);
  };

  return (
    <div>
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
    <DialogTrigger asChild>
    {(isauthenticated || (
      (isauthenticated1 && (seminfo === "1st" || seminfo === "2nd")) ||
      (isauthenticated2 && (seminfo === "3rd" || seminfo === "4th")) ||
      (isauthenticated3 && (seminfo === "5th" || seminfo === "6th")) ||
      (isauthenticated4 && (seminfo === "7th" || seminfo === "8th"))
    )) && ( 
          <Button
            className="mt-3 mb-4 bg-blue-600 text-white hover:bg-blue-800 transition-colors duration-300 flex items-center justify-center px-4 py-2 rounded-lg shadow-md mx-auto"
          >
            <Pencil className="mr-2" />
            Add News
          </Button>
    )}
    </DialogTrigger>
    <DialogContent className="max-w-md p-4 bg-slate-900 rounded-lg shadow-lg">
      <DialogHeader>
        <DialogTitle className="text-xl font-semibold text-white">News details</DialogTitle>
      </DialogHeader>
    
      <div className="space-y-1 mt-2">
        <div>
          <label className="block text-gray-300">Title(short)</label>
          <Input
            type="text"
            name="label"
            value={newsdetails.label}
            onChange={handleChange}
            className="w-full border border-gray-500 rounded-md px-3 py-2 bg-slate-800 text-white"
          />
        </div>
    
        <div>
          <label className="block text-gray-300">Details</label>
          <Input
            type="text"
            name="link"
            value={newsdetails.link}
            onChange={handleChange}
            className="w-full border border-gray-500 rounded-md px-3 py-2 bg-slate-800 text-white"
          />
        </div>
      </div>
    
      <DialogFooter className="flex justify-between mt-6">
        <div className="flex space-x-4">
          <DialogClose asChild>
            <Button className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md">
              Cancel
            </Button>
          </DialogClose>
          <Button onClick={handlesave}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
          >
            Save
          </Button>
        </div>
      </DialogFooter>
    </DialogContent>
    </Dialog>
    </div>
  );
}
