'use client'
import { createContext, useState, useEffect } from 'react';

export const SemInfoContext = createContext();

export function SemInfoProvider({ children }) {
  const [seminfo, setSeminfo] = useState('3rd');

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
    <SemInfoContext.Provider value={{ seminfo, setSeminfo }}>
      {children}
    </SemInfoContext.Provider>
  );
}
