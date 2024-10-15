'use client'

import {  DropdownMenu,DropdownMenuTrigger,DropdownMenuContent,DropdownMenuItem } from "../../../components/ui/dropdown-menu"
import {  ChevronDown } from "lucide-react";
import { Button } from "../../../components/ui/button";
import Commoncard from "../common-card";
import { useContext } from "react";
import { SemInfoContext } from "../context";
import { getPathMatch } from "next/dist/shared/lib/router/utils/path-match";

export const aidssemesters = [
  {
    number : "3rd",
    path : "/aids",
    subjects : [
      {
        "name": "Laplace Transforms & Vector Space",
        "code": "AD31",
        "credits": "2:1:0",
        "incharge": "Dr Kavitha N",
        "linker": "https://drive.google.com/drive/folders/1pYXixf1_JLQ6JgjkmLFfUlsESt3s9WDQ?usp=drive_link"
      },
      {
        "name": "Database Management Systems",
        "code": "AD32",
        "credits": "3:0:1",
        "incharge": "Dr SriRaksha P J, Dr Vaneeta M, Dr Swathi Mugada, Dr Bhavya M",
        "linker": "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-?usp=drive_link"
      },
      {
        "name": "Data Structures",
        "code": "AD33",
        "credits": "3:0:0",
        "incharge": "Dr Sowmya B J",
        "linker": "https://drive.google.com/drive/folders/18FJUZgXWMG2iF7jYA9b_9R4zeJY9GEGq?usp=drive_link"
      },
      {
        "name": "Discrete Mathematical Structures",
        "code": "AD34",
        "credits": "2:1:0",
        "incharge": "Dr Sushma S",
        "linker": "https://drive.google.com/drive/folders/1I0f7VfFWTvPn-Z6QUW9nRfnWuH4sDjSf?usp=drive_link"
      },
      {
        "name": "Introduction to Artificial Intelligence",
        "code": "AD35",
        "credits": "3:0:0",
        "incharge": "Dr Vaneeta M",
        "linker": "https://drive.google.com/drive/folders/1WYdfzP0IxbRoe8NK1dktNUdGq2CQhU_Z?usp=drive_link"
      },
      {
        "name": "Data Structures Laboratory",
        "code": "ADL36",
        "credits": "0:0:1",
        "incharge": "Dr Kusuma T, Dr Sowmya B J, Dr Manasa S M",
        "linker": "https://drive.google.com/drive/folders/12rdtWfeMaeLza2QnZ26bi_fLFAzqapFE?usp=drive_link"
      },
      {
        "name": "Object Oriented Programming Laboratory",
        "code": "ADL37",
        "credits": "0:0:1",
        "incharge": "Dr Vinay T R, Dr Meeradevi A K, Dr Sowmya B J, Dr Vaneeta M",
        "linker": "https://drive.google.com/drive/folders/1GZCm0-hvBMSfJjK9FgJC-PxjrQulmG4O?usp=drive_link"
      },
      {
        "name": "Universal Human Values",
        "code": "UHV38",
        "credits": "2:0:0",
        "incharge": "Dr Vijaya Kumar B P",
        "linker": "https://drive.google.com/drive/folders/1HmOXyH5STGgOlWi9cn-b7eHkwUhmMVCi?usp=drive_link"
      },
      {
        "name": "Data Visualisation using POWER BI (23 BATCH)",
        "code": "ADAEC39",
        "credits": "0:0:1",
        "incharge": "Industry Expert x2",
        "linker": "https://drive.google.com/drive/folders/1y4GEA1CZcxT6LLPeKTH6DhoV8PAlktJR?usp=drive_link"
      }      

  ]
  },
  {
    number : "4th",
    path : "/aids",
    subjects : [
        {
          "name": "Statistics & Probability for Data Science",
          "code": "AD41",
          "credits": "2:1:0",
          "incharge": "Dr S Ramprasad",
          "linker": "https://drive.google.com/drive/folders/1Ndf9IYsGv0esb5y5z2Yhe20qQnB8NpoW?usp=drive_link"
        },
        {
          "name": "Data Communication & Networking",
          "code": "AD42",
          "credits": "3:0:1",
          "incharge": "Dr Vaneeta M",
          "linker": "https://drive.google.com/drive/folders/1N2uURCtqPB06dCZ56P0eGzvWk5-UyylK?usp=drive_link"
        },
        {
          "name": "Design & Analysis of Algorithms",
          "code": "AD43",
          "credits": "3:0:0",
          "incharge": "Dr Sowmya B J",
          "linker": "https://drive.google.com/drive/folders/1N3MWf58NLAiZHfgkY9oqJ-ZkVPXzFBA5?usp=drive_link"
        },
        {
          "name": "Theory of Computation",
          "code": "AD44",
          "credits": "2:1:0",
          "incharge": "Dr Vinay T R",
          "linker": "https://drive.google.com/drive/folders/1N3N3sNqlpJImM-Jghk98qMh8TPtKm1U1?usp=drive_link"
        },
        {
          "name": "Linear Programming & Queuing Theory",
          "code": "AD45",
          "credits": "2:1:0",
          "incharge": "Dr Y S Kalyan Chakravarthy",
          "linker": "https://drive.google.com/drive/folders/1N4QAZ-AsJ6oO4vSdFKsvPp2EJoExZBl_?usp=drive_link"
        },
        {
          "name": "Algorithms Laboratory",
          "code": "ADL46",
          "credits": "0:0:1",
          "incharge": "Dr Sowmya B J, Dr Vaneeta M",
          "linker": "https://drive.google.com/drive/folders/1N4nvzsPzWhu7bEmHFwqXvfbdbVZBHqpd?usp=drive_link"
        },
        {
          "name": "Statistical Programming Laboratory",
          "code": "ADL47",
          "credits": "0:0:1",
          "incharge": "Dr Vaneeta M, Dr Sowmya B J",
          "linker": "https://drive.google.com/drive/folders/1N4qu1LyinujiVCz7_nKFcFGvpv159wJP?usp=drive_link"
        },
        {
          "name": "Data Modeling & Visualisation Laboratory",
          "code": "ADL48",
          "credits": "0:0:1",
          "incharge": "Smt Swetha B N, Dr Sowmya B J, Dr Vinay T R",
          "linker": "https://drive.google.com/drive/folders/1N6C5mKoj7oIEdCX8N6yxhy3T4z8Xzbe1?usp=drive_link"
        },
        {
          "name": "Data Processing with SPARK",
          "code": "ADAEC49",
          "credits": "1:0:0",
          "incharge": "Mr Anantha Somayaji (Industry Expert)",
          "linker": "https://drive.google.com/drive/folders/1N78ZDBd16iUMFuahT2MK9rp2eeSuPhgK?usp=drive_link"
        }
      ]
      
  },
  {
    number : "5th",
    path : "/aids",
    subjects : [
      {
        "name": "Data Mining & Machine Learning",
        "code": "AD51",
        "credits": "3:0:0",
        "incharge": "Dr Sowmya B J",
        "linker": "https://drive.google.com/drive/folders/1vFu8sY9FUpRDK96tjEsAJNDcnnQ6hF9c?usp=drive_link"
      },
      {
        "name": "Operating Systems",
        "code": "AD52",
        "credits": "2:0:1",
        "incharge": "Smt Aishwarya M F Prabhakar",
        "linker": "https://drive.google.com/drive/folders/1vOWUVwTf8zISIBlzYX9_V5TcMwNmKieL?usp=drive_link"
      },
      {
        "name": "Data Storage Techniques",
        "code": "AD53",
        "credits": "3:0:0",
        "incharge": "X1",
        "linker": "https://drive.google.com/drive/folders/1vVTRpXJDl3ueH27CD9kbshzw_v37JGN2?usp=drive_link"
      },
      {
        "name": "Fundamentals of Data Science",
        "code": "AD54",
        "credits": "3:1:0",
        "incharge": "Smt Swetha B N, Dr Meeradevi A K, Dr Swathi Mugada",
        "linker": "https://drive.google.com/drive/folders/1_Y2pZxcnOmEbSEf2W21aBhCpRN7tmUxy?usp=drive_link"
      },
      {
        "name": "Computer Organisation & Architecture",
        "code": "ADE553",
        "credits": "3:0:0",
        "incharge": "Dr Swathi Mugada",
        "linker": "https://drive.google.com/drive/folders/1LKwgMD_sknjNkvoe5WEedRFZ73diTw5o?usp=drive_link"
      },
      {
        "name": "Machine Learning Laboratory",
        "code": "ADL56",
        "credits": "0:0:1",
        "incharge": "Dr Sowmya B J, Dr Swathi Mugada, Smt Swetha B N, Dr Vaneeta M",
        "linker": "https://drive.google.com/drive/folders/1MNGHw1bZurEriuPAaVeIbVWYry5mgO-9?usp=drive_link"
      },
      {
        "name": "Parallel Programming Laboratory",
        "code": "ADL57",
        "credits": "0:0:1",
        "incharge": "Dr Vinay T R, Dr Manasa S M, Dr Swathi Mugada, Dr Vaneeta M",
        "linker": "https://drive.google.com/drive/folders/1LGqD3VPsrZTxfpul7YFjTPq_PnpnNyIS?usp=drive_link"
      },
      {
        "name": "Research Methodology & Intellectual Property Rights",
        "code": "AL58",
        "credits": "3:0:0",
        "incharge": "Dr Vijaya Kumar B P, Dr Vinay T R",
        "linker": "https://drive.google.com/drive/folders/1qxzoWsqUh_PWqG28TG17UFQ17u278YCy?usp=drive_link"
      },
      {
        "name": "Data Visualisation using POWER BI",
        "code": "ADAEC59",
        "credits": "1:0:0",
        "incharge": "Industry Expert x2",
        "linker": "https://drive.google.com/drive/folders/1EeFUrUV0XwZt1YYAChUVFoEdChKK35Vy?usp=drive_link"
      },
      {
        "name": "Environmental Studies",
        "code": "HS510",
        "credits": "0:0:0",
        "incharge": "TBA",
        "linker": "https://drive.google.com/drive/folders/1Apy5AEfQ_tRI09YrEuBw5-727yGZuauQ?usp=drive_link"
      }
      
    ]
  },
  
];

export const aimlsemesters = [
  {
    number : "3rd",
    path : "/aiml",
    subjects : [
      {
        "name": "Laplace Transforms & Vector Space",
        "code": "AI31",
        "credits": "2:1:0",
        "incharge": "TBA",
        "linker": "https://drive.google.com/drive/folders/1pYXixf1_JLQ6JgjkmLFfUlsESt3s9WDQ?usp=drive_link"
      },
      {
        "name": "Database Management Systems",
        "code": "AI32",
        "credits": "3:0:1",
        "incharge": "Dr SriRaksha P J",
        "linker": "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-?usp=drive_link"
      },
      {
        "name": "Data Structures",
        "code": "AI33",
        "credits": "3:0:0",
        "incharge": "Dr Kusuma T",
        "linker": "https://drive.google.com/drive/folders/18FJUZgXWMG2iF7jYA9b_9R4zeJY9GEGq?usp=drive_link"
      },
      {
        "name": "Discrete Mathematical Structures",
        "code": "AI34",
        "credits": "2:1:0",
        "incharge": "TBA",
        "linker": "https://drive.google.com/drive/folders/1I0f7VfFWTvPn-Z6QUW9nRfnWuH4sDjSf?usp=drive_link"
      },
      {
        "name": "Introduction to Artificial Intelligence",
        "code": "AI35",
        "credits": "3:0:0",
        "incharge": "Dr Vaneeta M",
        "linker": "https://drive.google.com/drive/folders/1WYdfzP0IxbRoe8NK1dktNUdGq2CQhU_Z?usp=drive_link"
      },
      {
        "name": "Data Structures Laboratory",
        "code": "AIL36",
        "credits": "0:0:1",
        "incharge": "Dr Kusuma T, Dr Sowmya B J, Dr SriRaksha P J",
        "linker": "https://drive.google.com/drive/folders/12rdtWfeMaeLza2QnZ26bi_fLFAzqapFE?usp=drive_link"
      },
      {
        "name": "Object Oriented Programming Laboratory",
        "code": "AIL37",
        "credits": "0:0:1",
        "incharge": "Dr Meeradevi A K, Dr Vinay T R, Dr SriRaksha P J, Smt Aishwarya M F Prabhakar",
        "linker": "https://drive.google.com/drive/folders/1GZCm0-hvBMSfJjK9FgJC-PxjrQulmG4O?usp=drive_link"
      },
      {
        "name": "Universal Human Values",
        "code": "UHV38",
        "credits": "2:0:0",
        "incharge": "Smt Aishwarya M F Prabhakar",
        "linker": "https://drive.google.com/drive/folders/1HmOXyH5STGgOlWi9cn-b7eHkwUhmMVCi?usp=drive_link"
      }, 
      {
        "name": "Data Visualisation using POWER BI (23 BATCH)",
        "code": "AIAEC39",
        "credits": "0:0:1",
        "incharge": "Industry Expert x2",
        "linker": "https://drive.google.com/drive/folders/1y4GEA1CZcxT6LLPeKTH6DhoV8PAlktJR?usp=drive_link"
      }
      
  ]
  },
  {
    number : "4th",
    path : "/aiml",
    subjects : [
        {
          "name": "Statistics & Probability for Machine Learning",
          "code": "AI41",
          "credits": "2:1:0",
          "incharge": "Dr S Ramprasad",
          "linker": "https://drive.google.com/drive/folders/1Ndf9IYsGv0esb5y5z2Yhe20qQnB8NpoW?usp=drive_link"
        },
        {
          "name": "Data Communication & Networking",
          "code": "AI42",
          "credits": "3:0:1",
          "incharge": "Dr Meeradevi A K",
          "linker": "https://drive.google.com/drive/folders/1N2uURCtqPB06dCZ56P0eGzvWk5-UyylK?usp=drive_link"
        },
        {
          "name": "Design & Analysis of Algorithms",
          "code": "AI43",
          "credits": "3:0:0",
          "incharge": "Mr Pradeep Kumar D",
          "linker": "https://drive.google.com/drive/folders/1N3MWf58NLAiZHfgkY9oqJ-ZkVPXzFBA5?usp=drive_link"
        },
        {
          "name": "Theory of Computation",
          "code": "AI44",
          "credits": "2:1:0",
          "incharge": "Smt Megha J",
          "linker": "https://drive.google.com/drive/folders/1N3N3sNqlpJImM-Jghk98qMh8TPtKm1U1?usp=drive_link"
        },
        {
          "name": "Linear Programming & Queuing Theory",
          "code": "AI45",
          "credits": "2:1:0",
          "incharge": "Dr Y S Kalyan Chakravarthy",
          "linker": "https://drive.google.com/drive/folders/1N4QAZ-AsJ6oO4vSdFKsvPp2EJoExZBl_?usp=drive_link"
        },
        {
          "name": "Algorithms Laboratory",
          "code": "AIL46",
          "credits": "0:0:1",
          "incharge": "Mr Pradeep Kumar D, Dr Meeradevi A K",
          "linker": "https://drive.google.com/drive/folders/1N4nvzsPzWhu7bEmHFwqXvfbdbVZBHqpd?usp=drive_link"
        },
        {
          "name": "Statistical Programming Laboratory",
          "code": "AIL47",
          "credits": "0:0:1",
          "incharge": "Dr Meeradevi A K, Smt Megha J",
          "linker": "https://drive.google.com/drive/folders/1N4qu1LyinujiVCz7_nKFcFGvpv159wJP?usp=drive_link"
        },
        {
          "name": "Data Modeling & Visualisation Laboratory",
          "code": "AIL48",
          "credits": "0:0:1",
          "incharge": "Dr A Ajina, Prof Amruthesh S M",
          "linker": "https://drive.google.com/drive/folders/1N6C5mKoj7oIEdCX8N6yxhy3T4z8Xzbe1?usp=drive_link"
        },
        {
          "name": "Data Processing with SPARK",
          "code": "AIAEC49",
          "credits": "1:0:0",
          "incharge": "Mr Anantha Somayaji (Industry Expert)",
          "linker": "https://drive.google.com/drive/folders/1N78ZDBd16iUMFuahT2MK9rp2eeSuPhgK?usp=drive_link"
        }
      ]
  },
  {
    number : "5th",
    path : "/aiml",
    subjects : [
      {
        "name": "Fundamentals of Data Science",
        "code": "AI51",
        "credits": "3:1:0",
        "incharge": "Dr Meeradevi A K",
        "linker": "https://drive.google.com/drive/folders/13B1AxfdmuJQ7AjgdQSc1B9TaXV7zsVZf?usp=drive_link"
      },
      {
        "name": "Operating Systems",
        "code": "AI52",
        "credits": "2:0:1",
        "incharge": "Smt Aishwarya M F Prabhakar",
        "linker": "https://drive.google.com/drive/folders/1vOWUVwTf8zISIBlzYX9_V5TcMwNmKieL?usp=drive_link"
      },
      {
        "name": "Natural Language Processing",
        "code": "AI53",
        "credits": "3:0:0",
        "incharge": "Dr A Ajina",
        "linker": "https://drive.google.com/drive/folders/131MoRSZoJu-CzASmOPina03iooxfIV2m?usp=drive_link"
      },
      {
        "name": "Big Data Frameworks",
        "code": "AI54",
        "credits": "3:0:0",
        "incharge": "Dr Manasa S M",
        "linker": "https://drive.google.com/drive/folders/13F15SA_HjJryrTLuoNAu06tyXbVo33q_?usp=drive_link"
      },
      {
        "name": "Computer Organisation & Architecture",
        "code": "AIE553",
        "credits": "3:0:0",
        "incharge": "Dr Swathi Mugada",
        "linker": "https://drive.google.com/drive/folders/1LKwgMD_sknjNkvoe5WEedRFZ73diTw5o?usp=drive_link"
      },
      {
        "name": "Natural Language Processing Laboratory",
        "code": "AIL56",
        "credits": "0:0:1",
        "incharge": "Dr A Ajina, Dr Jagadish S Kallimani, Dr Manasa S M, Dr Swathi Mugada, Dr Meeradevi A K",
        "linker": "https://drive.google.com/drive/folders/13JO0P-KqbmR7ingPpW33qOazzTSHhwH5?usp=drive_link"
      },
      {
        "name": "Data Analytics Laboratory",
        "code": "AIL57",
        "credits": "0:0:1",
        "incharge": "Dr Manasa S M, Dr Meeradevi A K, Smt Aishwarya M F Prabhakar, Dr Kusuma T",
        "linker": "https://drive.google.com/drive/folders/13Ju4QKiC2_bTD4W5HiSI_AxV8s-7Vrkv?usp=drive_link"
      },
      {
        "name": "Research Methodology & Intellectual Property Rights",
        "code": "AI58",
        "credits": "3:0:0",
        "incharge": "Dr Vijaya Kumar B P, Dr Bhavya M",
        "linker": "https://drive.google.com/drive/folders/1qxzoWsqUh_PWqG28TG17UFQ17u278YCy?usp=drive_link"
      },
      {
        "name": "Data Visualisation using POWER BI",
        "code": "AIAEC59",
        "credits": "1:0:0",
        "incharge": "Industry Expert x2",
        "linker": "https://drive.google.com/drive/folders/1EeFUrUV0XwZt1YYAChUVFoEdChKK35Vy?usp=drive_link"
      },
      {
        "name": "Environmental Studies",
        "code": "HS510",
        "credits": "0:0:0",
        "incharge": "TBA",
        "linker": "https://drive.google.com/drive/folders/1Apy5AEfQ_tRI09YrEuBw5-727yGZuauQ?usp=drive_link"
      }
      
    ]
  },
  
];


export function Semdropdown({branch}){

  const {  setSeminfo,seminfo } = useContext(SemInfoContext);

  
  return (
    <div className="mx-auto mb-4">
  <DropdownMenu>
    <DropdownMenuTrigger className="font-bold text-2xl lg:flex focus:outline-none">
      <div className="flex shrink-0 items-center focus:outline-none">
        <p>{seminfo} Semester</p>
        <ChevronDown className="h-4 w-4 ml-2" /> 
      </div>
    </DropdownMenuTrigger>
    
    <DropdownMenuContent className="w-full max-h-60 bg-gradient-to-r from-blue-400 to-green-300 rounded-md shadow-lg border border-black overflow-y-auto p-2 min-w-[200px]">
    {branch === "aids" ? (
        aidssemesters
        .filter((sem) => sem.number !== seminfo)
        .map((sem, index, array) => ( 
          <DropdownMenuItem 
            key={sem.number} 
            className="p-3 relative text-black text-xl font-bold transition-all duration-200 cursor-pointer"
            onClick={() => setSeminfo(sem.number)}
          >
            <div className="mx-auto">
              {sem.number}
            </div>
            {index < array.length - 1 && ( 
              <div className="absolute left-1/2 transform -translate-x-1/2 w-9/10 border-b-2 border-black mt-12" />
            )}
          </DropdownMenuItem>
        ))
) : (
  aimlsemesters
  .filter((sem) => sem.number !== seminfo) 
  .map((sem, index, array) => ( 
    <DropdownMenuItem 
      key={sem.number} 
      className="p-3 relative text-black font-bold text-xl transition-all duration-200 cursor-pointer"
      onClick={() => setSeminfo(sem.number)}
    >
      <div className="mx-auto">
        {sem.number} 
      </div>
      {index < array.length - 1 && ( 
        <div className="absolute left-1/2 transform -translate-x-1/2 w-9/10 border-b-2 border-black mt-[52px]" />
      )}
    </DropdownMenuItem>
  ))
)}

    </DropdownMenuContent>

  </DropdownMenu>
</div>

  );
}