'use client'

export function Calender() {
  return (
    <div className="flex flex-col mt-4 bg-gray-900 p-6 rounded-lg shadow-lg">
      <p className="font-bold text-2xl text-white text-center mb-4">
        Event Calendar
      </p>
      
      <div className="relative overflow-hidden rounded-lg border-2 border-gray-700">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FKolkata&src=cm9oYW5wazE4MThAZ21haWwuY29t&color=%23039BE5"
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
          className="w-full h-96"
        ></iframe>
      </div>
    </div>

    
  );
}