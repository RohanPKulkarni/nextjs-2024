'use client'

import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "../../../components/ui/card";
import Link from "next/link";

export default function Homecard({ title, link }) {
  return (
    <div className="p-2 sm:p-4 md:p-4 lg:p-4">
      <div className="bg-transparent border border-white rounded-lg shadow-lg">
        <div className="p-2 sm:p-4 md:p-4 lg:p-4">
          <h2 className="text-sm md:text-lg lg:text-xl font-semibold text-white text-center">
            {title}
          </h2>
        </div>
        <hr className="border-white" />
        <div className="p-2 sm:p-4 md:p-4 lg:p-4">
          <Link href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-center block">
            Click here
          </Link>
        </div>
      </div>
    </div>

  );
}