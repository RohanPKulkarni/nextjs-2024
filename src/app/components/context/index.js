'use client'
import { createContext, useState, useEffect } from 'react';

export const SemInfoContext = createContext();

export function SemInfoProvider({ children }) {
  const [branchdrop, setBranchdrop] = useState('Branch');
  const [seminfo, setSeminfo] = useState('3rd'); 
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState({
    name: '',
    credits: '',
    incharge: '',
    linker: '',
    code: '',
    pyqlink : ''
  });

  const [isClient, setIsClient] = useState(false); 

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true); 
      const storedSeminfo = localStorage.getItem('seminfo');
      if (storedSeminfo) {
        setSeminfo(storedSeminfo); 
      }
    }
  }, []); 

  useEffect(() => {
    if (isClient) {
      localStorage.setItem('seminfo', seminfo);
    }
  }, [seminfo, isClient]); 

  const [isClients, setIsClients] = useState(false); 

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClients(true); 
      const storedBranch = localStorage.getItem('branchdrop');
      if (storedBranch) {
        setBranchdrop(storedBranch); 
      }
    }
  }, []); 

  useEffect(() => {
    if (isClients) {
      localStorage.setItem('branchdrop', branchdrop);
    }
  }, [branchdrop, isClients]);

  

  return (
    <SemInfoContext.Provider value={{ seminfo, setSeminfo ,openDialog,setOpenDialog,selectedCardData, setSelectedCardData,branchdrop,setBranchdrop}}>
      {children}
    </SemInfoContext.Provider>
  );
}
