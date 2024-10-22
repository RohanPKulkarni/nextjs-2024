import { Semester } from "../components/semesters";
import { Semdropdown } from "../components/sem-dropdown";
import { Calender } from "../components/calender";
import { DialogImage } from "../components/dialogimage";


export default function Aids(){

  return (
    <div className="flex flex-col ">
      <Semdropdown branch = {"aiml"}/>
      <Semester branch = {"aiml"}/>
      <Calender />    
      <DialogImage/>
    </div>
     
  );
}

