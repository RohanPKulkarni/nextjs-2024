'use client'
import { createContext, useState, useEffect } from 'react';

export const SemInfoContext = createContext();

export function SemInfoProvider({ children }) {
  const [seminfo, setSeminfo] = useState('3rd');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedSeminfo = localStorage.getItem('seminfo');
      if (storedSeminfo) {
        setSeminfo(storedSeminfo);
      }
    }
  }, []); 

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('seminfo', seminfo);
    }
  }, [seminfo]); 

  

  return (
    <SemInfoContext.Provider value={{ seminfo, setSeminfo ,selectedCourse ,setSelectedCourse,openDialog,setOpenDialog}}>
      {children}
    </SemInfoContext.Provider>
  );
}
