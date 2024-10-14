import { Semester } from "../components/semesters";
import { Semdropdown } from "../components/sem-dropdown";
import { Calender } from "../components/calender";

export default function Aids(){

  return (
    <div className="flex flex-col ">
      <Semdropdown branch = {"aiml"}/>
      <Semester branch = {"aiml"}/>
      <Calender />    
    </div>
     
  );
}

