'use client'
import { createContext, useState, useEffect } from 'react';

// Create the context
export const SemInfoContext = createContext();

// Create the provider component
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
