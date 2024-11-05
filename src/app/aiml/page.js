import Semester from "../components/semesters";
import { Semdropdown } from "../components/sem-dropdown";
import { Calender } from "../components/calender";
import { DialogImage } from "../components/dialogimage";
import EditorDialog from "../components/dialognew";
import { fetchaimlsemesters } from "@/actions";

async function Aiml(){


  const aimlsemesters = await fetchaimlsemesters();

  return (
    <div className="flex flex-col ">
      <Semdropdown semesters = {aimlsemesters}/>
      <Semester semesters = {aimlsemesters}/>
      <EditorDialog />
      <Calender />    
      <DialogImage/>

    </div>
     
  );
}

export default Aiml;