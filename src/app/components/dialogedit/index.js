'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle,DialogTrigger,DialogClose} from "../../../components/ui/dialog";
import { SemInfoContext } from "../context";
import { useContext } from "react";
import { useRouter } from "next/navigation";



export default function EditorDialog2(){

  const router = useRouter();

  const { editorCardData,openDialog4,setOpenDialog4,branchdrop,seminfo,setEditorCardData } = useContext(SemInfoContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditorCardData((prevDetails) => ({
      ...prevDetails,
      [name] : value
    }));
  };

  async function handleeditsave(){
    if (branchdrop === "AI&DS"){
      await fetch(`/api/updateaids-sem?sem=${seminfo}&_id=${editorCardData._id}`, {
        method: "PUT",
        body: JSON.stringify(editorCardData),
        headers: {
          "Content-Type": "application/json"
      }
      });
    }else{
      await fetch(`/api/updateaiml-sem?sem=${seminfo}&_id=${editorCardData._id}`, {
        method: "PUT",
        body: JSON.stringify(editorCardData),
        headers: {
          "Content-Type": "application/json"
      }
      });
    }
    setOpenDialog4(false);
    router.refresh();

  };
  
  
  

  return(
    <div>
      <Dialog open={openDialog4} onOpenChange={setOpenDialog4}>
      <DialogContent className="max-w-md p-4 bg-slate-900 rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-white">Course details</DialogTitle>
        </DialogHeader>

        <div className="space-y-1 mt-2">
          <div>
            <label className="block text-gray-300">Name(mandatory)</label>
            <Input
              type="text"
              name="name"
              defaultValue={editorCardData.name}
              onChange={handleChange}
              className="w-full border border-gray-500 rounded-md px-3 py-2 bg-slate-800 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-300">Credits</label>
            <Input
              type="text"
              name="credits"
              defaultValue={editorCardData.credits}
              onChange={handleChange}
              className="w-full border border-gray-500 rounded-md px-3 py-2 bg-slate-800 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-300">Code(mandatory)</label>
            <Input
              type="text"
              name="code"
              defaultValue={editorCardData.code}
              onChange={handleChange}
              className="w-full border border-gray-500 rounded-md px-3 py-2 bg-slate-800 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-300">Incharge</label>
            <Input
              type="text"
              name="incharge"
              defaultValue={editorCardData.incharge}
              onChange={handleChange}
              className="w-full border border-gray-500 rounded-md px-3 py-2 bg-slate-800 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-300">Notes Link</label>
            <Input
              type="text"
              name="linker"
              defaultValue={editorCardData.linker}
              onChange={handleChange}
              className="w-full border border-gray-500 rounded-md px-3 py-2 bg-slate-800 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-300">PYQs Link</label>
            <Input
              type="text"
              name="pyqlink"
              defaultValue={editorCardData.pyqlink}
              onChange={handleChange}
              className="w-full border border-gray-500 rounded-md px-3 py-2 bg-slate-800 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-300">Lab codes Link</label>
            <Input
              type="text"
              name="lablink"
              defaultValue={editorCardData.lablink}
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
            <Button onClick={handleeditsave}
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