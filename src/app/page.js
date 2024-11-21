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
import Installation from "./components/installation";
import Branchcard from "./components/branchcard";
import TextAnimation from "./components/homeleft";
import { fetchaidssemesters,fetchaimlsemesters } from "@/actions";


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

  const aidssemesters = await fetchaidssemesters();
  const aimlsemesters = await fetchaimlsemesters();

  return (

    <div className="flex h-[80vh] overflow-hidden -mt-4">
      <TextAnimation aidssemesters={aidssemesters} aimlsemesters={aimlsemesters}/>

      {/* Right Section: Background Image */}
      <div
        className="hidden sm:flex w-1/2 bg-contain bg-right bg-no-repeat items-center justify-center"
        style={{
          backgroundImage: "url('/images/webdesign2.png')",
          backgroundPosition: "center", // Center the image
          backgroundSize: "contain", // Cover the container with the image
        }}
      >
        {/* No additional content here */}
      </div>
      <Analytics />

    </div>
    




  );
}
