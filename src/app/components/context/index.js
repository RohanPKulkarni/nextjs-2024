'use client'
import { createContext, useState, useEffect } from 'react';

export const SemInfoContext = createContext();

export function SemInfoProvider({ children }) {
  const [seminfo, setSeminfo] = useState(
    () => localStorage.getItem('seminfo') || '3rd'
  );

  useEffect(() => {
    localStorage.setItem('seminfo', seminfo);
  }, [seminfo]);

  return (
    <SemInfoContext.Provider value={{ seminfo, setSeminfo }}>
      {children}
    </SemInfoContext.Provider>
  );
}
