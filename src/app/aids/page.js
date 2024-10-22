import { Semester } from "../components/semesters";
import { Semdropdown } from "../components/sem-dropdown";
import { Calender } from "../components/calender";
import { DialogImage } from "../components/dialogimage";

import Head from 'next/head';

export default function Aids(){

  

  return (
    <>
      <Head>
        <meta property="og:title" content="NoteRit AIML&AIDS" />
        <meta property="og:description" content="NoteRit-one-stop platform for AIML and AIDS resources." />
        <meta property="og:image" content="https://noterit.vercel.app/images/ai-image.webp" />
        <meta property="og:url" content="https://noterit.vercel.app/" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NoteRit AIML&AIDS" />
        <meta name="twitter:description" content="Explore the features and resources available at NoteRit for AIML and AIDS courses." />
        <meta name="twitter:image" content="https://noterit.vercel.app/images/ai-image.webp" />
        
        <title>NoteRit AIML&AIDS</title>
      </Head>
          <div className="flex flex-col ">
          <Semdropdown branch = {"aids"}/>
          <Semester branch = {"aids"}/>
          <Calender />
          <DialogImage/>
              
      </div>
    </>
    
   
    
    
  );
}