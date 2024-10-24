'use client'
import { Button } from "@/components/ui/button";
import {Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle,DialogTrigger,DialogClose} from "../../../components/ui/dialog";
import { SemInfoContext } from "../context";
import { useContext } from "react";




export default function Dialogbox() {

  const { openDialog, setOpenDialog, selectedCardData } = useContext(SemInfoContext);

  function handledialog(dialoglink){
    window.open(dialoglink, "_blank", "noopener,noreferrer");
    setOpenDialog(false);
  }

  return (
    <Dialog open = {openDialog} onOpenChange={setOpenDialog}>
      <DialogContent className=" bg-slate-900 border-4 border-white sm:max-w-[425px] max-w-[340px] lg:max-w-[500px] dark:bg-gray-800 p-6 rounded-lg shadow-lg">
    
      <DialogHeader>
        <DialogTitle className="text-xl font-bold text-white dark:text-gray-100">{selectedCardData.name}</DialogTitle>
        <DialogDescription>
          <p className="text-white text-xl font-bold dark:text-gray-300 mb-1">{selectedCardData.code}</p>
          <p className="text-white text-xl font-bold dark:text-gray-300">{selectedCardData.credits}</p>
        </DialogDescription>
        <DialogClose className="absolute top-4 right-4 text-white focus:outline-none">
          ✕
        </DialogClose>
      </DialogHeader>
      
      <div className="mt-2 text-lg font-bold text-white dark:text-gray-300">
      {selectedCardData.incharge}
      </div>
      
      <div className="mt-6 flex justify-between">
          <Button onClick={() => handledialog(selectedCardData.pyqlink)} 
                  className="focus:outline-none custom-shadow ml-1 border-2 border-white bg-transparent hover:bg-transparent text-white hover:text-gray-500 shadow-md transition-all px-4 py-2 rounded-lg font-semibold ">
            PYQs
          </Button>
         
         
        {selectedCardData.lablink ? (
          <Button onClick={() => handledialog(selectedCardData.lablink)}
              className="focus:outline-none custom-shadow ml-1 border-2 border-white bg-transparent hover:bg-transparent text-white hover:text-gray-500 shadow-md transition-all px-4 py-2 rounded-lg font-semibold ">
                Lab Code
          </Button>
        ) : null}
        
          <Button onClick={() => handledialog(selectedCardData.linker)}
                  className="focus:outline-none custom-shadow mr-2 border-2 border-white bg-transparent hover:bg-transparent text-white hover:text-gray-500 shadow-md transition-all px-4 py-2 rounded-lg font-semibold ">
            Notes
          </Button>
      </div>
      </DialogContent>

    </Dialog>

  );
}



    
