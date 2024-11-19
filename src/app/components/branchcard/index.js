'use client'
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { SemInfoContext } from "../context";
import { useRouter } from "next/navigation";

export default function Branchcard(){

  const {setBranchdrop} = useContext(SemInfoContext);
  const router = useRouter();

  function handlecardclick(branch){
    if(branch === "aids"){
      router.push("/aids");
      setBranchdrop("AI&DS");
    }else{
      router.push("/aiml");
      setBranchdrop("AI&ML");
    }
  }

  return(
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-4">
      <Button onClick={() => handlecardclick("aids")}
              className="w-[90%] px-6 py-4 text-xs md:text-md font-semibold text-white bg-blue-600 rounded-lg border-2 border-white shadow-lg hover:bg-blue-800 hover:shadow-xl transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-offset-2 mx-auto">
        Artificial Intelligence and Data Science
      </Button>
      <Button onClick={() => handlecardclick("aiml")}
              className="w-[90%] px-6 py-4 text-xs md:text-md font-semibold text-white bg-blue-600 rounded-lg border-2 border-white shadow-lg hover:bg-blue-800 hover:shadow-xl transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-offset-2 mx-auto">
        Artificial Intelligence and Machine Learning
      </Button>
    </div>
  );
}