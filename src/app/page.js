import { Analytics } from "@vercel/analytics/react";
import Homecard from "./components/card2";
import * as React from "react"
import Link from "next/link";
import { Plus, CirclePlus} from "lucide-react";
import { CarouselComponent } from "./components/achievements";
import { CarouselComponent2 } from "./components/newsinfo";
import { DialogImage } from "./components/dialogimage";
import { Button } from "@/components/ui/button";
import connectToDB from "@/database";
import { initAIDSSemesters } from "@/models/initaidssem";
import { initAIMLSemesters } from "@/models/initaimlsem";

const commonlinks = [
  {
    title : "Semester Results",
    link : "https://exam.msrit.edu/"
  },
  {
    title : "Fee Payment",
    link : "https://erp.eshiksa.net/esh/index.php?plugin=Login&action=index"
  }
]

export default async function Home() {

  await connectToDB();

  return (

    <div className="flex flex-col">

      <CarouselComponent2/>

      <section className="max-w-full bg-transparent mx-auto p-4 lg:custom-shadow1 rounded-lg mt-6 lg:mt-12 md:mt-8 hover:shadow-xl transition-shadow duration-300 border-2 border-white lg:p-8 ">
        <h1 className="text-4xl font-bold text-center text-white mb-6">
          <span className="text-red-700">NoteRit</span> - AI Branch Portal
        </h1>

        <p className="text-lg text-white mb-4 leading-relaxed">
          This platform is designed to provide students of the 
          <span className="font-bold underline"> Artificial Intelligence and Data Science</span> and 
          <span className="font-bold underline"> Artificial Intelligence and Machine Learning</span> branches at M.S. Ramaiah Institute of Technology with a centralized hub for all academic resources. 
        </p>
      </section>

      <div className="lg:mt-8 md:mt-4 mt-4 grid grid-cols-2 justify-items-stretch">
        {commonlinks.map((card) => (
          <div key={card.title} className="max-w-full">
            <Homecard title={card.title} link={card.link} />
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center p-4 bg-transparent rounded-lg shadow-md">
        <p className="text-lg text-white mb-2 text-center">
          Feel free to contribute your notes and other resources to help your fellow students!
        </p>
        <Link
          href={"https://drive.google.com/drive/folders/14u5lS7nOaCMHUVJFboj6ZLKpYlKtxaPq"}
          className="mt-1 flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
          target="_blank"
          rel="noopener noreferrer" 
        >
          <p className="mr-2">Add</p>
          <Plus className="h-5 w-5" />
        </Link>
      </div>

      <CarouselComponent/>
      <DialogImage/>

      
      <Analytics />
    </div>
  );
}
