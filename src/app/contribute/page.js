import Installation from "../components/installation";

export default function Soon() {
  return (
    <div className="flex flex-col items-center p-6 bg-transparent">
    <h1 className="text-2xl font-bold text-black">Contact Us</h1>
    <p className="mt-2 text-lg text-black">Feel free to reach out via email:</p>
    <div className="mt-4 space-y-2 flex flex-col">
    <p className="mt-2 text-lg text-black">1st year :</p>
      <a 
        href="mailto:kamalapurkar.3655@gmail.com" 
        className="text-lg font-semibold text-red-600 hover:underline"
      >
        kamalapurkar.3655@gmail.com
      </a>
      <p className="mt-2 text-lg text-black">2nd year :</p>
      <a 
        href="mailto:ayushjain191105@gmail.com" 
        className="text-lg font-semibold text-red-600 hover:underline"
      >
        ayushjain191105@gmail.com
      </a>
      <p className="mt-2 text-lg text-black">3rd year :</p>
      <a 
        href="mailto:chinmayanarmdeshwar@gmail.com" 
        className="text-lg font-semibold text-red-600 hover:underline"
      >
        chinmayanarmdeshwar@gmail.com
      </a>
      <a 
        href="mailto:rohanpk1818@gmail.com" 
        className="text-lg font-semibold text-red-600 hover:underline "
      >
        rohanpk1818@gmail.com
      </a>
      <Installation/>
    </div>
  </div>
  );
}