import Semester from "../components/semesters";
import { Semdropdown } from "../components/sem-dropdown";
import { Calender } from "../components/calender";
import { DialogImage } from "../components/dialogimage";
import EditorDialog from "../components/dialognew";
import { fetchaidssemesters } from "@/actions";
import { CarouselComponent3 } from "../components/semnews";
import NewsDialog from "../components/dialognewsinfo";
import { DialogNews } from "../components/dialognewsdet";

async function Aids(){
  
  const aidssemesters = await fetchaidssemesters();

  return (
      
      <div className="flex flex-col ">
        <Semdropdown semesters = {aidssemesters}/>
        <CarouselComponent3 semesters={aidssemesters}/>
        <NewsDialog/>
        <Semester semesters = {aidssemesters}/>
        <EditorDialog/>
        <Calender />
        <DialogImage/>     
        <DialogNews/>        
      </div>
    
  );
}

export default Aids;