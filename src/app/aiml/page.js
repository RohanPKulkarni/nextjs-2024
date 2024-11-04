import Semester from "../components/semesters";
import { Semdropdown } from "../components/sem-dropdown";
import { Calender } from "../components/calender";
import { DialogImage } from "../components/dialogimage";
import EditorDialog from "../components/dialognew";

async function fetchListOfSems() {
  try {
    const apiResponse = await fetch("http://localhost:3000/api/getaiml-sem", {
      method: "GET",
      cache: "no-store",
    });

    const result = await apiResponse.json();

    return result?.data;
  } catch (error) {
    throw new Error(error);
  }
}

export default async function Aiml(){

  const aimlsemesters = await fetchListOfSems();

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

