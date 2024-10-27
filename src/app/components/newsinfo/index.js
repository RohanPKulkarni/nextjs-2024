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


export function CarouselComponent2(){

  const news = [
    {
      title : "IBM & WIPRO Training and Internship program",
      disabled : true
    },
    {
      title : "CIE1 scheduled on 27th of November",
      disabled : true
    },
    {
      title : "Off-campus library facilities",
      disabled : true
    },
    {
      title : "Upcoming KR fest",
      disabled : true
    },

  ]

  const nextButtonRef = useRef(null); 

  useEffect(() => {
    const interval = setInterval(() => {
      if (nextButtonRef.current) {
        nextButtonRef.current.click(); 
      }
    }, 4000); 

    return () => clearInterval(interval); 
  }, []);

  return(

    <div className="w-full mt-4 ">
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full h-auto bg-transparent rounded-lg relative"
    >
      <CarouselContent className="flex ">
        {news.map((article, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 bg-transparent">
            <div className="p-3 bg-transparent border-2 border-gray-300 rounded-lg flex flex-col" style={{ height: '90px' }}>
              <div className="flex justify-between items-center w-full">
                <span className="text-lg text-white font-semibold max-w-[80%] overflow-hidden text-ellipsis ml-1">
                  {article.title}
                </span>
                <button
                  disabled={article.disabled}
                  className={`mr-4 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold ${article.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  Go
                </button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious 
        className="p-2 mt-2 lg:mt-1 absolute -left-2 top-1/2 transform -translate-y-1/2 text-black p-2 bg-gray-200 hover:bg-gray-400 rounded-full opacity-70 md:-left-4 transition-all z-10" 
      />
      <CarouselNext
        ref={nextButtonRef}
        className="p-2 mt-2 lg:mt-1 absolute -right-2 top-1/2 transform -translate-y-1/2 text-black p-2 bg-gray-200 hover:bg-gray-400 rounded-full opacity-70 md:-right-4 transition-all z-10" 
      />

    </Carousel>
  </div>
  
  );
}