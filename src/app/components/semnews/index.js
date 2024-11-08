'use client'

import { useEffect, useRef,useContext } from 'react';
import { Card, CardContent } from "@/components/ui/card"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { SemInfoContext } from '../context';

export function CarouselComponent3({semesters}){

  const {seminfo,newsdetails2,setNewsDetails2,setOpenDialog6} = useContext(SemInfoContext);

  const filteredsem = semesters.find(semester => semester.number === seminfo);

  const nextButtonRef = useRef(null); 

  useEffect(() => {
    const interval = setInterval(() => {
      if (nextButtonRef.current) {
        nextButtonRef.current.click(); 
      }
    }, 4000); 

    return () => clearInterval(interval); 
  }, []);

  function handlenewsclick(newsid){
    const newsItem = filteredsem.news.find(news => news._id === newsid);
    setNewsDetails2((prevDetails) => ({
      ...prevDetails,
      label : newsItem.label,
      link : newsItem.link,
  }));
  setOpenDialog6(true);
}

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
        {filteredsem.news.map((article, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 bg-transparent" >
            <div className="p-3 bg-transparent border-2 border-gray-300 rounded-lg flex flex-col hover:cursor-pointer" style={{ height: '90px' }} onClick={() => handlenewsclick(article._id)}>
              <div className="flex justify-between items-center w-full">
                <span className="text-lg text-white font-semibold max-w-[80%] overflow-hidden text-ellipsis ml-1">
                  {article.label}
                </span>
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