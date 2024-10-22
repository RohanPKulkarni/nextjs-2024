import { Analytics } from "@vercel/analytics/react";
export default function Home() {
  return (
    <section className="max-w-3xl bg-transparent mx-auto p-8 lg:custom-shadow1 rounded-lg mt-6 lg:mt-12 md:mt-8 hover:shadow-xl transition-shadow duration-300 border-2 border-black ">
      <h1 class="text-4xl font-bold text-center text-gray-800 mb-6">
        Welcome to <span class="text-red-700">NoteRit</span> AI Branch Portal
      </h1>

      <p className="text-lg text-black-600 mb-4 leading-relaxed">
      This platform is designed to provide students of the 
      <span class="font-bold underline"> Artificial Intelligence and Data Science</span> and 
      <span class="font-bold underline"> Artificial Intelligence and Machine Learning</span> branches at M.S. Ramaiah Institute of Technology with a centralized hub for all academic resources. 
      Here, you'll find class notes, lab codes and previous years' questions (PYQs) to aid your learning experience. Stay updated 
      with the latest branch news, important dates, and events through our calendar.
      </p>

      <Analytics/>
    </section>
  );
}
