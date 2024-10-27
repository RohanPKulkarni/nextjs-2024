'use client'

import { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { useContext } from "react";
import { SemInfoContext } from "../context";


export function CarouselComponent(){

  const {  setOpenDialog2 ,setImgSrc,imgsrc } = useContext(SemInfoContext);

  function handleimage(imagelink){
    setImgSrc(imagelink);
    setOpenDialog2(true);
  }

  const carouselcard = [
    {
      image : "/images/intelgenai.jpg",
      name : "Anusha D",
      branch : "AI & DS",
      sem : "5th Sem",
      title : "GENAI Hackathon 2024 at KPR Institute of Technology"
    },
    {
      image : "/images/fantomcode.jpg",
      name : "Dhavala T S,Shriya B S,Sneha B",
      branch : "AI & DS",
      sem : "5th Sem",
      title : "FantomCode-2024 at RV Institute of Technology"
    }
  ];

  const nextButtonRef = useRef(null); 

  useEffect(() => {
    const interval = setInterval(() => {
      if (nextButtonRef.current) {
        nextButtonRef.current.click(); 
      }
    }, 7000); 

    return () => clearInterval(interval); 
  }, []);
  return(
    <div className="flex flex-col mt-4">
  <p className="text-2xl text-white mx-auto">Achievements</p>
  <div className="w-full mt-6">
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="max-w-full mx-auto bg-transparent rounded-lg relative"
    >
      <CarouselContent className="w-full">
        {carouselcard.map((card, index) => (
          <CarouselItem key={index} className="lg:basis-1/2 bg-transparent">
            <div className="p-1">
              <Card className="ml-3 bg-transparent">
                <CardContent className="flex flex-col h-96 items-center justify-center p-6">
                  <img
                    src={card.image}
                    alt={`${card.name}'s achievement`}
                    className="h-32 w-32 rounded-full object-cover mb-4 hover:cursor-pointer"
                    onClick = {() => handleimage(card.image)}
                  />
                    <span className="text-lg mx-auto text-red-500 font-semibold text-center">{card.title}</span>
                    <span className="mt-2 text-xl text-white font-semibold text-center overflow-hidden whitespace-nowrap text-ellipsis max-w-full">{card.name}</span>
                    <p className="text-white">{card.branch}</p>
                    <p className="text-white">{card.sem}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 opacity-70 p-2 rounded-full hover:bg-gray-400" />
      <CarouselNext
        ref={nextButtonRef}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 opacity-70 rounded-full hover:bg-gray-400"
      />
    </Carousel>
  </div>
</div>
  );
}