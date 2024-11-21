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
    <div className="mt-8 mx-auto grid grid-cols-1 gap-y-4">
      <Button
        onClick={() => handlecardclick("aids")}
        className="w-[92%] px-2 py-2 sm:px-8 sm:py-6 text-xs sm:text-lg lg:text-lg font-semibold text-white bg-black rounded-lg border-2 border-white shadow-lg hover:bg-gray-800 hover:shadow-xl transition duration-300 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-offset-2 lg:ml-8 mx-auto mr-8 sm:mr-0"
      >
        Artificial Intelligence & Data Science
      </Button>
      <Button
        onClick={() => handlecardclick("aiml")}
        className="w-[92%] px-2 py-2 sm:px-8 sm:py-6 text-xs sm:text-lg lg:text-lg font-semibold text-white bg-black rounded-lg border-2 border-white shadow-lg hover:bg-gray-800 hover:shadow-xl transition duration-300 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-offset-2 lg:ml-8 mx-auto mr-8 sm:mr-0"
      >
        Artificial Intelligence & Machine Learning
      </Button>
    </div>
  );
}