'use client'

export function Calender() {
  return (
    <div className = "flex flex-col mt-4">
      <p className = "font-bold text-2xl mx-auto  ">
      Calender
      </p>
      
      <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FKolkata&src=cm9oYW5wazE4MThAZ21haWwuY29t&color=%23039BE5"  width="100%" height="400" frameborder="0" scrolling="no" className="w-full max-w-full md:w-3/4 mt-4 mx-auto">
      </iframe>
    </div>
    
  );
}