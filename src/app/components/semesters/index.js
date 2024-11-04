'use client'

import { useContext } from 'react';
import { SemInfoContext } from "../context";
import Commoncard from '../common-card';


export default function Semester({ semesters }) {
  const { seminfo } = useContext(SemInfoContext);

  return (
    <div className="md:grid-cols-2 lg:grid-cols-3 grid gap-4 ">
      {
          semesters
            .filter((semester) => semester.number === seminfo) 
            .flatMap((semester) => semester.subjects) 
            .map((course) => (
              <div key={course.code}> 
                <Commoncard 
                  name={course.name} 
                  credits={course.credits} 
                  incharge={course.incharge} 
                  linker={course.linker}
                  code = {course.code}
                  pyqlink = {course.pyqlink}
                  lablink = {course.lablink}
                  _id = {course._id}
                />
              </div>
            ))
      }
    </div>
  );
}

       




