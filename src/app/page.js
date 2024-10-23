import { Analytics } from "@vercel/analytics/react";
import Homecard from "./components/card2";

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
    <div>
      <section className="max-w-full bg-transparent mx-auto p-4 lg:custom-shadow1 rounded-lg mt-6 lg:mt-12 md:mt-8 hover:shadow-xl transition-shadow duration-300 border-2 border-black lg:p-8 ">
        <h1 class="text-4xl font-bold text-center text-gray-800 mb-6">
          Welcome to <span class="text-red-700">NoteRit</span>
        </h1>

        <p className="text-lg text-black-600 mb-4 leading-relaxed">
        This platform is designed to provide students of the 
        <span class="font-bold underline"> Artificial Intelligence and Data Science</span> and 
        <span class="font-bold underline"> Artificial Intelligence and Machine Learning</span> branches at M.S. Ramaiah Institute of Technology with a centralized hub for all academic resources. 
        Here, you'll find class notes, lab codes and previous years' questions (PYQs) to aid your learning experience. Stay updated 
        with the latest branch news, important dates, and events through our calendar.
        </p>
      </section>
      <div className="lg:mt-8 md:mt-4 mt-4 grid grid-cols-2 justify-items-stretch">
        {commonlinks.map((card) =>
        <div key={card.title} className="max-w-full">
          <Homecard title = {card.title} link = {card.link}/>
        </div>
      )
        }
      </div>
      <Analytics/>

    </div>
    
  );
}
