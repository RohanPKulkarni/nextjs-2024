'use client'
import { Button } from "@/components/ui/button";
import {Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle,DialogTrigger} from "../../../components/ui/dialog";
import { SemInfoContext } from "../context";
import { useContext } from "react";


export default function Dialogbox() {

  const { openDialog, setOpenDialog, selectedCardData } = useContext(SemInfoContext);

  return (
    <Dialog open = {openDialog} onOpenChange={setOpenDialog}>
      <DialogContent className=" bg-gradient-to-r from-blue-500 to-green-400 border-4 border-gray-900 sm:max-w-[425px] max-w-[320px] lg:max-w-[500px] dark:bg-gray-800 p-6 rounded-lg shadow-lg">
    
      <DialogHeader>
        <DialogTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">{selectedCardData.name}</DialogTitle>
        <DialogDescription>
          <p className="text-gray-900 text-xl font-bold dark:text-gray-900 mb-1">{selectedCardData.code}</p>
          <p className="text-gray-900 text-xl font-bold dark:text-gray-900">{selectedCardData.credits}</p>
        </DialogDescription>
      </DialogHeader>
      
      <div className="mt-2 text-lg font-bold text-gray-900 dark:text-gray-900">
      {selectedCardData.incharge}
      </div>
      
      <div className="mt-6 flex justify-between">
          <Button onClick={() => window.open(selectedCardData.pyqlink, "_blank", "noopener,noreferrer")} 
                  className="ml-2 border-2 border-black bg-transparent hover:bg-transparent text-black hover:text-gray-700 shadow-md transition-all px-4 py-2 rounded-lg font-semibold focus:outline-none">
            PYQs
          </Button>
        {selectedCardData.lablink ? (
          <Button onClick={() => window.open(selectedCardData.lablink, "_blank", "noopener,noreferrer")}
              className="ml-3 border-2 border-black bg-transparent hover:bg-transparent text-black hover:text-gray-700 shadow-md transition-all px-4 py-2 rounded-lg font-semibold focus:outline-none">
                Lab Code
          </Button>
        ) : null}
        
          <Button onClick={() => window.open(selectedCardData.linker, "_blank", "noopener,noreferrer")}
                  className="mr-3 border-2 border-black bg-transparent hover:bg-transparent text-black hover:text-gray-700 shadow-md transition-all px-4 py-2 rounded-lg font-semibold focus:outline-none">
            Notes
          </Button>
      </div>
      </DialogContent>

    </Dialog>

  );
}



    
