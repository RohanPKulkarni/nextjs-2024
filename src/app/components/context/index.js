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
  const [isauthenticated1, setIsAuthenticated1] = useState(false);
  const [isauthenticated2, setIsAuthenticated2] = useState(false);
  const [isauthenticated3, setIsAuthenticated3] = useState(false);
  const [isauthenticated4, setIsAuthenticated4] = useState(false);
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


  const [isClients3, setIsClients3] = useState(false);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClients3(true); 
      const storedisauthenticated1 = localStorage.getItem('isauthenticated1');
      if (storedisauthenticated1) {
        setIsAuthenticated1(storedisauthenticated1 === 'true');
      }
    }
  }, []); 

  useEffect(() => {
    if (isClients3) {
      localStorage.setItem('isauthenticated1', isauthenticated1);
    }
  }, [isauthenticated1, isClients3]);


  const [isClients4, setIsClients4] = useState(false);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClients4(true); 
      const storedisauthenticated2 = localStorage.getItem('isauthenticated2');
      if (storedisauthenticated2) {
        setIsAuthenticated2(storedisauthenticated2 === 'true');
      }
    }
  }, []); 

  useEffect(() => {
    if (isClients4) {
      localStorage.setItem('isauthenticated2', isauthenticated2);
    }
  }, [isauthenticated2, isClients4]);


  const [isClients5, setIsClients5] = useState(false);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClients5(true); 
      const storedisauthenticated3 = localStorage.getItem('isauthenticated3');
      if (storedisauthenticated3) {
        setIsAuthenticated3(storedisauthenticated3 === 'true');
      }
    }
  }, []); 

  useEffect(() => {
    if (isClients5) {
      localStorage.setItem('isauthenticated3', isauthenticated3);
    }
  }, [isauthenticated3, isClients5]);


  const [isClients6, setIsClients6] = useState(false);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClients6(true); 
      const storedisauthenticated4 = localStorage.getItem('isauthenticated4');
      if (storedisauthenticated4) {
        setIsAuthenticated4(storedisauthenticated4 === 'true');
      }
    }
  }, []); 

  useEffect(() => {
    if (isClients6) {
      localStorage.setItem('isauthenticated4', isauthenticated4);
    }
  }, [isauthenticated4, isClients6]);
  

  return (
    <SemInfoContext.Provider value={{openDialog7,setOpenDialog7,component,setComponent,newsdetails2,setNewsDetails2,openDialog6,setOpenDialog6,newsdetails,setNewsDetails,isauthenticated,setIsAuthenticated,isauthenticated1,setIsAuthenticated1,isauthenticated2,setIsAuthenticated2,isauthenticated3,setIsAuthenticated3,isauthenticated4,setIsAuthenticated4,openDialog3,setOpenDialog3,openDialog4,setOpenDialog4,openDialog5,setOpenDialog5,editorCardData,setEditorCardData,seminfo, setSeminfo ,openDialog,setOpenDialog,selectedCardData, setSelectedCardData,branchdrop,setBranchdrop,openDialog2, setOpenDialog2,imgsrc,setImgSrc,logindetails,setLoginDetails}}>
      {children}
    </SemInfoContext.Provider>
  );
}
