
export default function Soon() {
  return (
    <div className="flex flex-col items-center p-6 bg-transparent">
    <h1 className="text-2xl font-bold text-gray-800">Contact Us</h1>
    <p className="mt-2 text-lg text-gray-600">Feel free to reach out via email:</p>
    <div className="mt-4 space-y-2 flex flex-col">
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
    </div>
  </div>
  );
}