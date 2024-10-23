'use client'

import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "../../../components/ui/card";
import Link from "next/link";

export default function Homecard({ title, link }) {
  return (
    <div className="p-2 sm:p-4 md:p-4 lg:p-4">
      <div className="bg-transparent border border-black rounded-lg shadow-lg">
        <div className="p-2 sm:p-4 md:p-4 lg:p-4">
          <h2 className="text-md md:text-lg lg:text-xl font-semibold text-gray-900 text-center">
            {title}
          </h2>
        </div>
        <hr className="border-black" />
        <div className="p-2 sm:p-4 md:p-4 lg:p-4">
          <Link href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-center block">
            Click here
          </Link>
        </div>
      </div>
    </div>

  );
}