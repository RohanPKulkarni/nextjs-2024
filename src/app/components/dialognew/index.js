'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle,DialogTrigger,DialogClose} from "../../../components/ui/dialog";
import { SemInfoContext } from "../context";
import { useContext } from "react";
import {Pencil} from "lucide-react";
import { useRouter } from "next/navigation";
import { addnewaidssemesters,addnewaimlsemesters } from "@/actions";



export default function EditorDialog(){

  const { editorCardData,openDialog3,setOpenDialog3,branchdrop,seminfo,setEditorCardData,isauthenticated } = useContext(SemInfoContext);

  const router = useRouter();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditorCardData((prevDetails) => ({
      ...prevDetails,
      [name] : value
    }));
  };

  async function handlesave(){
    if (branchdrop === "AI&DS"){
      try{
      const result = await addnewaidssemesters(editorCardData,seminfo,"/aids");
          }
         catch(e){
          console.log(e);
        }
    }else{
      try{
      const result = await addnewaimlsemesters(editorCardData,seminfo,"/aiml");
            }
           catch(e){
            console.log(e);
          }
    }
    setOpenDialog3(false);
  };
  
  function handlenewcourse(){
    setEditorCardData({
      name:"",
      code:"",
      credits:"",
      incharge:"",
      lablink:"",
      linker:"",
      pyqlink:"",
    })
  }
  
  

  return(
    <div>
      <div className="mt-8 p-6  rounded-lg shadow-md transition duration-300 hover:shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-2">Add a New Course</h2>
        <p className="text-lg text-gray-300 mb-2">
          Click the button below to add a new course. 
        </p>
        <p className="text-lg text-gray-300">
          Fill in the required details in the dialog that appears.
        </p>
      </div>
      <Dialog open={openDialog3} onOpenChange={setOpenDialog3}>
      <DialogTrigger onClick = {() => handlenewcourse()}>
      {isauthenticated && ( 
          <Button
            className="mb-8 ml-8 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center px-4 py-2 rounded-lg shadow-md"
          >
            <Pencil className="mr-2" />
            Add Course
          </Button>
        )}
      </DialogTrigger>
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