import Semester from "../components/semesters";
import { Semdropdown } from "../components/sem-dropdown";
import { Calender } from "../components/calender";
import { DialogImage } from "../components/dialogimage";
import EditorDialog from "../components/dialognew";

async function fetchListOfSems() {
  try {
    const apiResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getaids-sem`, {
      method: "GET",
    });

    const result = await apiResponse.json();

    return result?.data || [];
  } catch (error) {
    console.log(error);
    return [];
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