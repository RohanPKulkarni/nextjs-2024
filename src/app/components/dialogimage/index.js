'use client'

import {Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle,DialogTrigger} from "../../../components/ui/dialog";
import { SemInfoContext } from "../context";
import { useContext } from "react";


export function DialogImage() {

  const { openDialog2, setOpenDialog2,imgsrc } = useContext(SemInfoContext);
  

  return (
    <div>
  <Dialog open={openDialog2} onOpenChange={setOpenDialog2}>
    <DialogContent className="w-[90vw] h-[80vh] max-w-[800px] max-h-[600px] bg-transparent border-none shadow-none">
      <div className="flex justify-center items-center h-full">
        {imgsrc ? (
          <img
            src = {imgsrc}
            alt="Schedule"
            className="rounded-lg shadow-md max-h-full max-w-full object-contain"
            style={{ maxHeight: '100%', maxWidth: '100%' }}
          />
        ) : (
          <div className="text-center text-xl text-white">Not yet scheduled</div>
        )}
      </div>
    </DialogContent>
  </Dialog>
</div>

  
  );
}