import Semester from "../components/semesters";
import { Semdropdown } from "../components/sem-dropdown";
import { Calender } from "../components/calender";
import { DialogImage } from "../components/dialogimage";
import EditorDialog from "../components/dialognew";
import { fetchaidssemesters } from "@/actions";

async function Aids(){
  
    const aidssemesters = await fetchaidssemesters();

  return (
      
      <div className="flex flex-col ">
        <Semdropdown semesters = {aidssemesters}/>
        <Semester semesters = {aidssemesters}/>
        <EditorDialog/>
        <Calender />
        <DialogImage/>            
      </div>
    
  );
}

export default Aids;