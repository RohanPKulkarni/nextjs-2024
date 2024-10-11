'use client'
import { createContext, useState } from 'react';

// Create the context
export const SemInfoContext = createContext();

// Create the provider component
export function SemInfoProvider({ children }) {
  const [seminfo, setSeminfo] = useState("3rd");

  return (
    <SemInfoContext.Provider value={{ seminfo, setSeminfo }}>
      {children}
    </SemInfoContext.Provider>
  );
}
