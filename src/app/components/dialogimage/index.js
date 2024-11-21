'use client'

import { Button } from "@/components/ui/button";
import {Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle,DialogTrigger,DialogClose} from "../../../components/ui/dialog";
import { SemInfoContext } from "../context";
import { useContext } from "react";
import ImageUploadDialog from "../dialogupload";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";


export function DialogImage() {

  const { openDialog2, setOpenDialog2,imgsrc,setOpenDialog7,isauthenticated } = useContext(SemInfoContext);
  

  return (
    <div>
   <Dialog open={openDialog2} onOpenChange={setOpenDialog2}>
      <DialogHeader className="relative">
         <DialogClose className="absolute top-3 right-3 text-white focus:outline-none text-xl">
            ✕
         </DialogClose>
      </DialogHeader>  
      <DialogContent className="w-[90vw] h-[80vh] max-w-[800px] max-h-[600px] bg-transparent border-none shadow-none focus:outline-none">
         <VisuallyHidden>
            <DialogTitle>
               Schedule Image
            </DialogTitle>
         </VisuallyHidden>
         <div className="relative flex justify-center items-center h-full">
            {imgsrc ? (
               <img
                  src={imgsrc}
                  alt="Schedule"
                  className="rounded-lg shadow-md max-h-full max-w-full object-contain"
                  style={{ maxHeight: '100%', maxWidth: '100%' }}
               />
            ) : (
               <div className="text-center text-xl text-white">Not yet scheduled</div>
            )}
           {isauthenticated ? (
            <Button
               className="absolute bottom-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 focus:outline-none"
               onClick={() => setOpenDialog7(true)}
            >
               Upload
            </Button>
            ) : null}
         </div>
      </DialogContent>
   </Dialog>
   <ImageUploadDialog/>
</div>


  
  );
}