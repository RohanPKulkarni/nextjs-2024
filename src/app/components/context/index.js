'use client'
import { useAmp } from 'next/amp';
import { createContext, useState, useEffect } from 'react';

export const SemInfoContext = createContext();

export function SemInfoProvider({ children }) {
  const [branchdrop, setBranchdrop] = useState('Branch');
  const [seminfo, setSeminfo] = useState('3rd'); 
  const [component, setComponent] = useState(''); 
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialog2, setOpenDialog2] = useState(false);
  const [isauthenticated, setIsAuthenticated] = useState(false);
  const [openDialog3,setOpenDialog3] = useState(false);
  const [openDialog4,setOpenDialog4] = useState(false);
  const [openDialog5,setOpenDialog5] = useState(false);
  const [openDialog6,setOpenDialog6] = useState(false);
  const [openDialog7,setOpenDialog7] = useState(false);
  const [imgsrc, setImgSrc] = useState("");
  const [selectedCardData, setSelectedCardData] = useState({
    name: '',
    credits: '',
    incharge: '',
    linker: '',
    code: '',
    pyqlink : '',
    lablink : ''
  });
  const [editorCardData, setEditorCardData] = useState({
    name: '',
    credits: '',
    incharge: '',
    linker: '',
    code: '',
    pyqlink : '',
    lablink : ''
  });
  const [logindetails,setLoginDetails] = useState({
    username : '',
    password : ''
  });
  const [newsdetails,setNewsDetails] = useState({
    label : '',
    link : ''
  })
  const[newsdetails2,setNewsDetails2] = useState({
    label : '',
    link : '',
  })

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


  const [isClients2, setIsClients2] = useState(false);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClients2(true); 
      const storedisauthenticated = localStorage.getItem('isauthenticated');
      if (storedisauthenticated) {
        setIsAuthenticated(storedisauthenticated === 'true');
      }
    }
  }, []); 

  useEffect(() => {
    if (isClients2) {
      localStorage.setItem('isauthenticated', isauthenticated);
    }
  }, [isauthenticated, isClients2]);


  

  return (
    <SemInfoContext.Provider value={{openDialog7,setOpenDialog7,component,setComponent,newsdetails2,setNewsDetails2,openDialog6,setOpenDialog6,newsdetails,setNewsDetails,isauthenticated,setIsAuthenticated,openDialog3,setOpenDialog3,openDialog4,setOpenDialog4,openDialog5,setOpenDialog5,editorCardData,setEditorCardData,seminfo, setSeminfo ,openDialog,setOpenDialog,selectedCardData, setSelectedCardData,branchdrop,setBranchdrop,openDialog2, setOpenDialog2,imgsrc,setImgSrc,logindetails,setLoginDetails}}>
      {children}
    </SemInfoContext.Provider>
  );
}
