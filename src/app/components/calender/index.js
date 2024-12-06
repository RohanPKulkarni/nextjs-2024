'use client'
import { SemInfoContext } from "../context";
import { useContext } from "react";

export function Calender() {
  const {seminfo,branchdrop} = useContext(SemInfoContext);
  return (
    <div className="flex flex-col mt-4 bg-gray-700 border border-white p-6 rounded-lg shadow-lg">
      <p className="font-bold text-2xl text-white text-center mb-4">
        Event Calendar
      </p>
      
      <div className="relative overflow-hidden rounded-lg border-2 border-gray-700">
      {(seminfo === "3rd" || seminfo === "4th") ? (
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Asia%2FKolkata&showPrint=0&src=MjM4MWYzNWU1MjA1ZDNiMjUxMGExZThhMDdkODcxOWZlMDlkOGM1MzIwNzY0NTA3ZTBmNzJjODllMmE3YjBkMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb204OTUwMGE0NEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb202OWFkOGIwNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%237986CB&color=%23202124&color=%23202124"
        width="100%"
        height="400"
        frameBorder="0"
        scrolling="no"
        className="w-full h-96"
      ></iframe>
    ) : (
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FKolkata&src=cm9oYW5wazE4MThAZ21haWwuY29t&color=%23039BE5"
        width="100%"
        height="400"
        frameBorder="0"
        scrolling="no"
        className="w-full h-96"
      ></iframe>
    )}

      </div>
    </div>

    
  );
}