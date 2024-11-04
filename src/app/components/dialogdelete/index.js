'use client'

import { Button } from "@/components/ui/button";
import {Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle,DialogTrigger,DialogClose} from "../../../components/ui/dialog";
import { SemInfoContext } from "../context";
import { useContext } from "react";
import { useRouter } from "next/navigation";

export function Dialogdelete(){

  const { openDialog5, setOpenDialog5, selectedCardData,branchdrop,seminfo } = useContext(SemInfoContext);

  const router = useRouter();

  async function handledelete(){

    if(branchdrop === "AI&DS"){
      try {
        const apiResponse = await fetch(`/api/deleteaids-sem?_id=${selectedCardData._id}&sem=${seminfo}`, {
          method: "DELETE",
        });
        const result = await apiResponse.json();
  
        if (result?.success) router.refresh();
      } catch (e) {
        console.log(e);
      }
    }else{
      try {
        const apiResponse = await fetch(`/api/deleteaiml-sem?_id=${selectedCardData._id}&sem=${seminfo}`, {
          method: "DELETE",
        });
        const result = await apiResponse.json();
  
        if (result?.success) router.refresh();
      } catch (e) {
        console.log(e);
      }
    }
    setOpenDialog5(false);
    
  }

  return(
    <div>
      <Dialog open={openDialog5} onOpenChange={setOpenDialog5} className="bg-slate-900 text-white border-2 border-white">
        <DialogContent className="bg-slate-900 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Confirm Deletion</DialogTitle>
            <DialogDescription className="mt-2 text-white text-xl">
              Are you really sure you want to delete the course <span className="font-bold">{selectedCardData.name}</span>? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex justify-between">
            <DialogClose asChild>
              <Button variant="outline" className="bg-slate-700 text-white border-slate-600 hover:bg-slate-600">
                Cancel
              </Button>
            </DialogClose>
            <Button
              variant="destructive"
              onClick={() => {
                handledelete(); 
              }}
              className="bg-red-600 text-white hover:bg-red-700"
            >
              Yes, Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>

  );
}