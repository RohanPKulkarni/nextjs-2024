import Semester from "../components/semesters";
import { Semdropdown } from "../components/sem-dropdown";
import { Calender } from "../components/calender";
import { DialogImage } from "../components/dialogimage";
import EditorDialog from "../components/dialognew";

async function fetchListOfSems() {
  try {
    const apiResponse = await fetch("http://localhost:3000/api/getaids-sem", {
      method: "GET",
      cache: "no-store",
    });

    const result = await apiResponse.json();

    return result?.data;
  } catch (error) {
    throw new Error(error);
  }
}


export default async function Aids(){

  const aidssemesters = await fetchListOfSems();

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