
import Commoncard from "../components/common-card";

const aidscourse = [
  {
    name : "operating system",
    credits : "3",
    incharge : "Mr.person"
  },
  {
    name : "database management",
    credits : "4",
    incharge : "Mr.person2"
  },
  {
    name : "Data science",
    credits : "3",
    incharge : "Mr.person3"
  },
  {
    name : "Machine learning",
    credits : "3",
    incharge : "Mr.person"
  },
  {
    name : "Pyhon",
    credits : "1",
    incharge : "Mr.person"
  },
  {
    name : "Java",
    credits : "2",
    incharge : "Mr.person4"
  },
];

export default function Aids(){
  return (
    <div className = " lg:grid grid-cols-3 gap-4 ">
      {
      aidscourse.map((course) => 
        <div >
          <Commoncard name = {course.name} credits = {course.credits} incharge = {course.incharge}/>
        </div>     
      )
      }
    </div>
    
  );
}