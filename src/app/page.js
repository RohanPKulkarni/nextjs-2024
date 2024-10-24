import { Analytics } from "@vercel/analytics/react";
import Homecard from "./components/card2";
import * as React from "react"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


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

export default function Home() {
  return (
    <div className="flex flex-col">
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

      <div className="w-full mt-6">
        <Carousel
          className="max-w-full lg:max-w-lg mx-auto bg-transparent border-2 border-white rounded-lg relative"
        >
          <CarouselContent className="w-full">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="bg-transparent">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl text-white font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-400" />
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-400" />
        </Carousel>
      </div>
      <Analytics />
    </div>
  );
}
