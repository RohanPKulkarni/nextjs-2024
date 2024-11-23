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
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogContent className="bg-white border-4 border-black sm:max-w-[425px] max-w-[340px] lg:max-w-[500px] dark:bg-gray-200 p-6 rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-black dark:text-gray-100">
            {selectedCardData.name}
          </DialogTitle>
          <div>
            <p className="text-black text-xl font-bold dark:text-gray-300 mb-1">
              {selectedCardData.code}
            </p>
            <p className="text-black text-xl font-bold dark:text-gray-300">
              {selectedCardData.credits}
            </p>
          </div>
        </DialogHeader>

        <div className="mt-2 text-lg font-bold text-black dark:text-gray-300">
          {selectedCardData.incharge}
        </div>

        <div className="mt-6 flex justify-between">
          {selectedCardData.pyqlink ? (
            <Button
              onClick={() => handledialog(selectedCardData.pyqlink)}
              className="focus:outline-none custom-shadow ml-1 border-2 border-black bg-transparent hover:bg-transparent text-black hover:text-gray-900 shadow-md transition-all px-4 py-2 rounded-lg font-semibold"
            >
              PYQs
            </Button>
          ) : null}

          {selectedCardData.lablink ? (
            <Button
              onClick={() => handledialog(selectedCardData.lablink)}
              className="focus:outline-none custom-shadow ml-1 border-2 border-black bg-transparent hover:bg-transparent text-black hover:text-gray-900 shadow-md transition-all px-4 py-2 rounded-lg font-semibold"
            >
              Lab Code
            </Button>
          ) : null}
          {selectedCardData.linker ? (
            <Button
              onClick={() => handledialog(selectedCardData.linker)}
              className="focus:outline-none custom-shadow mr-2 border-2 border-black bg-transparent hover:bg-transparent text-black hover:text-gray-900 shadow-md transition-all px-4 py-2 rounded-lg font-semibold"
            >
              Notes
            </Button>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>

  );
}



    
