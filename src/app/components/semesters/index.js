'use client'

import { aidssemesters } from "../sem-dropdown"
import { aimlsemesters } from "../sem-dropdown";
import Commoncard from "../common-card";
import { useContext } from 'react';
import { SemInfoContext } from "../context";




export function Semester({ branch }) {
  const { seminfo } = useContext(SemInfoContext);

  return (
    <div className="md:grid-cols-2 lg:grid-cols-3 grid gap-4 ">
      {
        branch === "aids" ? (
          aidssemesters
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
                />
              </div>
            ))
        ) : (
          aimlsemesters
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
                />
              </div>
            ))
        )
      }
    </div>
  );
}

       




