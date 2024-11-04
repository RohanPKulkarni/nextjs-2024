'use client'
import Header from "../header";
import { useEffect,useState } from "react";

export default function CommonLayout({children}){

  const [aidssemesters, setAidsSemesters] = useState([]);
  const [aimlsemesters, setAimlSemesters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const aidsResponse = await fetch("https://noterit.vercel.app/api/getaids-sem");
        const aimlResponse = await fetch("https://noterit.vercel.app/api/getaiml-sem");

        if (aidsResponse.ok) {
          const aidsData = await aidsResponse.json();
          setAidsSemesters(aidsData.data);
        }
        if (aimlResponse.ok) {
          const aimlData = await aimlResponse.json();
          setAimlSemesters(aimlData.data);
        }
      } catch (error) {
        console.error("Error fetching semesters:", error);
      }
    }

    fetchData();
  }, []);

    return(
        <div className="mx-auto max-w-7xl p-6 lg:px-8">
            <Header aidssemesters={aidssemesters} aimlsemesters={aimlsemesters}/>
            <main>{children}</main>

        </div>
    );
}