'use client'
import { Button } from "@/components/ui/button";
import {Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle,DialogTrigger} from "../../../components/ui/dialog";
import { SemInfoContext } from "../context";
import { useContext } from "react";


export default function Dialogbox() {

  const { openDialog, setOpenDialog, selectedCardData } = useContext(SemInfoContext);
  console.log("dialog");

  return (
    <Dialog open = {openDialog} onOpenChange={setOpenDialog}>
      <DialogContent className="sm:max-w-[425px] max-w-[320px] lg:max-w-[500px] bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <DialogHeader>
        <DialogTitle className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{selectedCardData.name}</DialogTitle>
        <DialogDescription>
          <p className="text-gray-700 dark:text-gray-300 mb-1">{selectedCardData.code}</p>
          <p className="text-gray-700 dark:text-gray-300">{selectedCardData.credits}</p>
        </DialogDescription>
      </DialogHeader>
      
      <div className="mt-4 text-gray-800 dark:text-gray-200">
      {selectedCardData.incharge}
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



    
