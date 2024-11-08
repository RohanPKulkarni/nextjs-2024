import Semester from "../components/semesters";
import { Semdropdown } from "../components/sem-dropdown";
import { Calender } from "../components/calender";
import { DialogImage } from "../components/dialogimage";
import EditorDialog from "../components/dialognew";
import { fetchaimlsemesters } from "@/actions";
import { CarouselComponent3 } from "../components/semnews";
import NewsDialog from "../components/dialognewsinfo";
import { DialogNews } from "../components/dialognewsdet";


async function Aiml(){

  const aimlsemesters = await fetchaimlsemesters();

  return (
    <div className="flex flex-col ">
      <Semdropdown semesters = {aimlsemesters}/>
      <CarouselComponent3 semesters={aimlsemesters}/>
      <NewsDialog/>
      <Semester semesters = {aimlsemesters}/>
      <EditorDialog />
      <Calender />    
      <DialogImage/>
      <DialogNews/>

    </div>
     
  );
}

export default Aiml;