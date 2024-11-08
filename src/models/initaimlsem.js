import connectToDB from "@/database";
import { AIMLSemester } from "./semester";

export const initAIMLSemesters = async () => {
  await connectToDB();

  const aimlsemesters = [
    {
      number : "1st",
      path : "/aiml",
      imagelinks : {
        timetable : "",
        calender : "/images/academiccalender.jpg",
        syllabus : "",
        cie1 : "",
        cie2 : "",
        see : ""
      },
      news : [
        {
          "label" : "No recent news",
          "link" : "" 
        }
      ],
      subjects : [{
        "name": "",
        "code": "",
        "credits": "",
        "incharge": "",
        "linker": "",
        "pyqlink" : "",
        "lablink" : ""
      }]
    },
    {
      number : "2nd",
      path : "/aids",
      imagelinks : {
        timetable : "",
        calender : "/images/academiccalender.jpg",
        syllabus : "",
        cie1 : "",
        cie2 : "",
        see : ""
      },
      news : [
        {
          "label" : "No recent news",
          "link" : "" 
        }
      ],
      subjects : [{
        "name": "",
        "code": "",
        "credits": "",
        "incharge": "",
        "linker": "",
        "pyqlink" : "",
        "lablink" : ""
      }]
    },
    {
      number : "3rd",
      path : "/aiml",
      imagelinks : {
        timetable : "/images/3rdsemaiml.jpg",
        calender : "/images/academiccalender.jpg",
        syllabus : "/documents/aiml2ndyear.pdf",
        cie1 : "",
        cie2 : "",
        see : ""
      },
      news : [
        {
          "label" : "No recent news",
          "link" : "" 
        }
      ],
      subjects : [
        {
          "name": "Laplace Transforms & Vector Space",
          "code": "AI31",
          "credits": "2:1:0",
          "incharge": "TBA",
          "linker": "https://drive.google.com/drive/folders/1pYXixf1_JLQ6JgjkmLFfUlsESt3s9WDQ?usp=drive_link",
          "pyqlink" : "https://drive.google.com/drive/folders/1-C3MCJBF9NlXzPAdJvG534tvjoh_ULG0?usp=drive_link",
  
        },
        {
          "name": "Database Management Systems",
          "code": "AI32",
          "credits": "3:0:1",
          "incharge": "Dr SriRaksha P J",
          "linker": "https://drive.google.com/drive/folders/1iajYljye_F7gUp2pQOGwlrJjn8cGN_v-?usp=drive_link",
          "pyqlink" : "https://drive.google.com/drive/folders/1-Ef1pAcBderOwyyqMCsaLvwLJ2BgXcWV?usp=drive_link"
  
        },
        {
          "name": "Data Structures",
          "code": "AI33",
          "credits": "3:0:0",
          "incharge": "Dr Kusuma T",
          "linker": "https://drive.google.com/drive/folders/18FJUZgXWMG2iF7jYA9b_9R4zeJY9GEGq?usp=drive_link",
          "pyqlink" : "https://drive.google.com/drive/folders/1-XPbgVDs62Gitj83awr8sdpFMR6T8jUH?usp=drive_link"
  
        },
        {
          "name": "Discrete Mathematical Structures",
          "code": "AI34",
          "credits": "2:1:0",
          "incharge": "TBA",
          "linker": "https://drive.google.com/drive/folders/1I0f7VfFWTvPn-Z6QUW9nRfnWuH4sDjSf?usp=drive_link",
          "pyqlink" : "https://drive.google.com/drive/folders/1-XXRR3K0UTKD7CnesTnPNBgONCpnWDi4?usp=drive_link"
  
        },
        {
          "name": "Introduction to Artificial Intelligence",
          "code": "AI35",
          "credits": "3:0:0",
          "incharge": "Dr Vaneeta M",
          "linker": "https://drive.google.com/drive/folders/1WYdfzP0IxbRoe8NK1dktNUdGq2CQhU_Z?usp=drive_link",
          "pyqlink" : "https://drive.google.com/drive/folders/1-ZR7zQjqYjt-4EFD9V8IEXFK4m4Azcl5?usp=drive_link"
  
        },
        {
          "name": "Data Structures Laboratory",
          "code": "AIL36",
          "credits": "0:0:1",
          "incharge": "Dr Kusuma T, Dr Sowmya B J, Dr SriRaksha P J",
          "linker": "https://drive.google.com/drive/folders/12rdtWfeMaeLza2QnZ26bi_fLFAzqapFE?usp=drive_link",
          "pyqlink" : "https://drive.google.com/drive/folders/1-Zp0XRVgeN9Ob7nJyHZXH2ymi1wL7tc4?usp=drive_link",
          "lablink" : "https://github.com/n-chinmaya/DS-Laboratory-ADL36-AIL36"
  
        },
        {
          "name": "Object Oriented Programming Laboratory",
          "code": "AIL37",
          "credits": "0:0:1",
          "incharge": "Dr Meeradevi A K, Dr Vinay T R, Dr SriRaksha P J, Smt Aishwarya M F Prabhakar",
          "linker": "https://drive.google.com/drive/folders/1GZCm0-hvBMSfJjK9FgJC-PxjrQulmG4O?usp=drive_link",
          "pyqlink" : "https://drive.google.com/drive/folders/1-cMjqfzD_IUnJxHYrMcyHBUSa8lJJ6yB?usp=drive_link"
  
        },
        {
          "name": "Universal Human Values",
          "code": "UHV38(AI)",
          "credits": "2:0:0",
          "incharge": "Smt Aishwarya M F Prabhakar",
          "linker": "https://drive.google.com/drive/folders/1HmOXyH5STGgOlWi9cn-b7eHkwUhmMVCi?usp=drive_link",
          "pyqlink" : "https://drive.google.com/drive/folders/1-gf-4mhYCKr1hDpUuLBc9logzbbbxoWB?usp=drive_link"
  
        }, 
        {
          "name": "Data Visualisation using POWER BI (23 BATCH)",
          "code": "AIAEC39",
          "credits": "0:0:1",
          "incharge": "Industry Expert x2",
          "linker": "https://drive.google.com/drive/folders/1y4GEA1CZcxT6LLPeKTH6DhoV8PAlktJR?usp=drive_link",
          "pyqlink" : "https://drive.google.com/drive/folders/11mzjC18SEjPl5qpiUXD0nAhGhh6stYWE?usp=drive_link"
  
        }
        
    ]
    },
    {
      number : "4th",
      path : "/aiml",
      imagelinks : {
        timetable : "/images/4thsemaiml.jpg",
        calender : "/images/academiccalender.jpg",
        syllabus : "/documents/aiml2ndyear.pdf",
        cie1 : "",
        cie2 : "",
        see : ""
      },
      news : [
        {
          "label" : "No recent news",
          "link" : "" 
        }
      ],
      subjects : [
          {
            "name": "Statistics & Probability for Machine Learning",
            "code": "AI41",
            "credits": "2:1:0",
            "incharge": "Dr S Ramprasad",
            "linker": "https://drive.google.com/drive/folders/1Ndf9IYsGv0esb5y5z2Yhe20qQnB8NpoW?usp=drive_link",
            "pyqlink" : "https://drive.google.com/drive/folders/1-pSaeOgMWF0jeEb_tjSgX2--WkCLA0Jp?usp=drive_link"
  
          },
          {
            "name": "Data Communication & Networking",
            "code": "AI42",
            "credits": "3:0:1",
            "incharge": "Dr Meeradevi A K",
            "linker": "https://drive.google.com/drive/folders/1N2uURCtqPB06dCZ56P0eGzvWk5-UyylK?usp=drive_link",
            "pyqlink" : "https://drive.google.com/drive/folders/1-raBSN0T3QkI8AGNuY5zS89dTMdBYqb1?usp=drive_link",
            "lablink" : "https://github.com/n-chinmaya/DCN-Laboratory-AD42L"
          },
          {
            "name": "Design & Analysis of Algorithms",
            "code": "AI43",
            "credits": "3:0:0",
            "incharge": "Mr Pradeep Kumar D",
            "linker": "https://drive.google.com/drive/folders/1N3MWf58NLAiZHfgkY9oqJ-ZkVPXzFBA5?usp=drive_link",
            "pyqlink" : "https://drive.google.com/drive/folders/1-sRDiYy-LEdD7B0AFAyxU2LWRDscKPkN?usp=drive_link"
          },
          {
            "name": "Theory of Computation",
            "code": "AI44",
            "credits": "2:1:0",
            "incharge": "Smt Megha J",
            "linker": "https://drive.google.com/drive/folders/1N3N3sNqlpJImM-Jghk98qMh8TPtKm1U1?usp=drive_link",
            "pyqlink" : "https://drive.google.com/drive/folders/1-wuopyxRNiC9hJ17nGPYzCT5S502L6r0?usp=drive_link"
          },
          {
            "name": "Linear Programming & Queuing Theory",
            "code": "AI45",
            "credits": "2:1:0",
            "incharge": "Dr Y S Kalyan Chakravarthy",
            "linker": "https://drive.google.com/drive/folders/1N4QAZ-AsJ6oO4vSdFKsvPp2EJoExZBl_?usp=drive_link",
            "pyqlink" : "https://drive.google.com/drive/folders/1pK8QK1xRMWk3fY3YjpsogBcvwzCMgge6?usp=drive_link"
          },
          {
            "name": "Algorithms Laboratory",
            "code": "AIL46",
            "credits": "0:0:1",
            "incharge": "Mr Pradeep Kumar D, Dr Meeradevi A K",
            "linker": "https://drive.google.com/drive/folders/1N4nvzsPzWhu7bEmHFwqXvfbdbVZBHqpd?usp=drive_link",
            "pyqlink" : "https://drive.google.com/drive/folders/101vTpBQcprVifFQNLWjBv_6R2SJAtQc2?usp=drive_link",
            "lablink" : "https://github.com/n-chinmaya/Algorithms-Laboratory-ADL46-AIL46"
          },
          {
            "name": "Statistical Programming Laboratory",
            "code": "AIL47",
            "credits": "0:0:1",
            "incharge": "Dr Meeradevi A K, Smt Megha J",
            "linker": "https://drive.google.com/drive/folders/1N4qu1LyinujiVCz7_nKFcFGvpv159wJP?usp=drive_link",
            "pyqlink" : "https://drive.google.com/drive/folders/11ppmlE9GWhGzFVWik919UQKCqfmNAlvs?usp=drive_link",
            "lablink" : "https://github.com/n-chinmaya/Statistical-Programming-Laboratory-ADL47-AIL47"
  
          },
          {
            "name": "Data Modeling & Visualisation Laboratory",
            "code": "AIL48",
            "credits": "0:0:1",
            "incharge": "Dr A Ajina, Prof Amruthesh S M",
            "linker": "https://drive.google.com/drive/folders/1N6C5mKoj7oIEdCX8N6yxhy3T4z8Xzbe1?usp=drive_link",
            "pyqlink" : "https://drive.google.com/drive/folders/10HNdxcdNNxqec49ZI2N6Dcvm0rZ-tWcf?usp=drive_link",
            "lablink" : "https://github.com/n-chinmaya/Data-Modeling-and-Visualisation-Laboratory-ADL48"
          },
          {
            "name": "Data Processing with SPARK",
            "code": "AIAEC49",
            "credits": "1:0:0",
            "incharge": "Mr Anantha Somayaji (Industry Expert)",
            "linker": "https://drive.google.com/drive/folders/1N78ZDBd16iUMFuahT2MK9rp2eeSuPhgK?usp=drive_link",
            "pyqlink" : "https://drive.google.com/drive/folders/11ppmlE9GWhGzFVWik919UQKCqfmNAlvs?usp=drive_link"
          }
        ]
    },
    {
      number : "5th",
      path : "/aiml",
      imagelinks : {
        timetable : "/images/5thsemaiml.jpg",
        calender : "/images/academiccalender.jpg",
        syllabus : "/documents/aiml3rdyear.pdf",
        cie1 : "",
        cie2 : "",
        see : ""
      },
      news : [
        {
          "label" : "No recent news",
          "link" : "" 
        }
      ],
      subjects : [
        {
          "name": "Fundamentals of Data Science",
          "code": "AI51",
          "credits": "3:1:0",
          "incharge": "Dr Meeradevi A K",
          "linker": "https://drive.google.com/drive/folders/13B1AxfdmuJQ7AjgdQSc1B9TaXV7zsVZf?usp=drive_link",
          "pyqlink" : "https://drive.google.com/drive/folders/1tcy5mQ9Gu7I7Ke3k2DNqKthWoHqgjNBc?usp=drive_link"
        },
        {
          "name": "Operating Systems",
          "code": "AI52",
          "credits": "2:0:1",
          "incharge": "Smt Aishwarya M F Prabhakar",
          "linker": "https://drive.google.com/drive/folders/1vOWUVwTf8zISIBlzYX9_V5TcMwNmKieL?usp=drive_link",
          "pyqlink" : "https://drive.google.com/drive/folders/10_nPNG9MbvDYrTYP1EnkYJoykm9ERF4j?usp=drive_link"
        },
        {
          "name": "Natural Language Processing",
          "code": "AI53",
          "credits": "3:0:0",
          "incharge": "Dr A Ajina",
          "linker": "https://drive.google.com/drive/folders/131MoRSZoJu-CzASmOPina03iooxfIV2m?usp=drive_link",
          "pyqlink" : "https://drive.google.com/drive/folders/192CnpwsIIf8q-eB1QynRIm1MhkQgfkur?usp=drive_link"
        },
        {
          "name": "Big Data Frameworks",
          "code": "AI54",
          "credits": "3:0:0",
          "incharge": "Dr Manasa S M",
          "linker": "https://drive.google.com/drive/folders/13F15SA_HjJryrTLuoNAu06tyXbVo33q_?usp=drive_link",
          "pyqlink" : "https://drive.google.com/drive/folders/10iPiEFD9Up3oDw5Qk1maMkWzQEvi69_U?usp=drive_link"
        },
        {
          "name": "Computer Organisation & Architecture",
          "code": "AIE553",
          "credits": "3:0:0",
          "incharge": "Dr Swathi Mugada",
          "linker": "https://drive.google.com/drive/folders/1LKwgMD_sknjNkvoe5WEedRFZ73diTw5o?usp=drive_link",
          "pyqlink" : "https://drive.google.com/drive/folders/1PgFLATQwNJA5vC4r5Aw-Vr3KSXh5x9Ao?usp=drive_link"
        },
        {
          "name": "Natural Language Processing Laboratory",
          "code": "AIL56",
          "credits": "0:0:1",
          "incharge": "Dr A Ajina, Dr Jagadish S Kallimani, Dr Manasa S M, Dr Swathi Mugada, Dr Meeradevi A K",
          "linker": "https://drive.google.com/drive/folders/13JO0P-KqbmR7ingPpW33qOazzTSHhwH5?usp=drive_link",
          "pyqlink" : "https://drive.google.com/drive/folders/197R7WNq4K1-R6YN2yPXPvYQbxkIgk81T?usp=drive_link"
        },
        {
          "name": "Data Analytics Laboratory",
          "code": "AIL57",
          "credits": "0:0:1",
          "incharge": "Dr Manasa S M, Dr Meeradevi A K, Smt Aishwarya M F Prabhakar, Dr Kusuma T",
          "linker": "https://drive.google.com/drive/folders/13Ju4QKiC2_bTD4W5HiSI_AxV8s-7Vrkv?usp=drive_link",
          "pyqlink" : "https://drive.google.com/drive/folders/1QkTFyehqDamZdn8vRABfFwlX6p2-DMwO?usp=drive_link"
        },
        {
          "name": "Research Methodology & Intellectual Property Rights",
          "code": "AL58(AI)",
          "credits": "3:0:0",
          "incharge": "Dr Vijaya Kumar B P, Dr Bhavya M",
          "linker": "https://drive.google.com/drive/folders/1qxzoWsqUh_PWqG28TG17UFQ17u278YCy?usp=drive_link",
          "pyqlink" : "https://drive.google.com/drive/folders/111GgzSW-t2JdEx9bVNfIX6UecLYnvi4G?usp=drive_link"
        },
        {
          "name": "Data Visualisation using POWER BI",
          "code": "AIAEC59",
          "credits": "1:0:0",
          "incharge": "Industry Expert x2",
          "linker": "https://drive.google.com/drive/folders/1EeFUrUV0XwZt1YYAChUVFoEdChKK35Vy?usp=drive_link",
          "pyqlink" : "https://drive.google.com/drive/folders/118fVGoZxXqMWNYFW9uV-8DM5zeF0JLo2?usp=drive_link"
        },
        {
          "name": "Environmental Studies",
          "code": "HS510(AI)",
          "credits": "0:0:0",
          "incharge": "TBA",
          "linker": "https://drive.google.com/drive/folders/1Apy5AEfQ_tRI09YrEuBw5-727yGZuauQ?usp=drive_link",
          "pyqlink" : "https://drive.google.com/drive/folders/119jkMNu2rXaDleZ0E9ZsmcuhaSYiiOQn?usp=drive_link"
        }
        
      ]
    },
    {
      number : "6th",
      path : "/aiml",
      imagelinks : {
        timetable : "",
        calender : "/images/academiccalender.jpg",
        syllabus : "",
        cie1 : "",
        cie2 : "",
        see : ""
      },
      news : [
        {
          "label" : "No recent news",
          "link" : "" 
        }
      ],
      subjects : [{
        "name": "",
        "code": "",
        "credits": "",
        "incharge": "",
        "linker": "",
        "pyqlink" : "",
        "lablink" : ""
      }]
    },
    {
      number : "7th",
      path : "/aiml",
      imagelinks : {
        timetable : "",
        calender : "/images/academiccalender.jpg",
        syllabus : "",
        cie1 : "",
        cie2 : "",
        see : ""
      },
      news : [
        {
          "label" : "No recent news",
          "link" : "" 
        }
      ],
      subjects : [{
        "name": "",
        "code": "",
        "credits": "",
        "incharge": "",
        "linker": "",
        "pyqlink" : "",
        "lablink" : ""
      }]
    },
    {
      number : "8th",
      path : "/aiml",
      imagelinks : {
        timetable : "",
        calender : "/images/academiccalender.jpg",
        syllabus : "",
        cie1 : "",
        cie2 : "",
        see : ""
      },
      news : [
        {
          "label" : "No recent news",
          "link" : "" 
        }
      ],
      subjects : [{
        "name": "",
        "code": "",
        "credits": "",
        "incharge": "",
        "linker": "",
        "pyqlink" : "",
        "lablink" : ""
      }]
    },
  ];

  try {
    const existingData = await AIMLSemester.find();
  
      if (existingData.length === 0) {
        await AIMLSemester.insertMany(aimlsemesters);
      } 
  
  } catch (error) {
    console.error('Error initializing AIDSSemesters:', error);
  }


}