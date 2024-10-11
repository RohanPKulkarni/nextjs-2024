'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "../../../components/ui/card";
import Link from "next/link";

export default function Commoncard({name , credits, incharge, linker}) {
  return (
    <Card className="flex bg-gray-100 flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 cursor-pointer">
      <CardHeader className="p-0 mx-auto">
        <CardTitle className="text-xl max-w-[250px] text-ellipsis overflow-hidden whitespace-nowrap font-semibold text-gray-950 ">
          <p>{name}</p>
          <p>{credits}</p>
        </CardTitle>
        <CardDescription className="mt-3 text-gray-600">
          {incharge}       
        </CardDescription>
      </CardHeader>
      <CardFooter className="p-0 justify-between">
        <Button onClick={() => window.open(linker, "_blank", "noopener,noreferrer")}>
          Notes
        </Button>
        <Button onClick={() => window.open(linker, "_blank", "noopener,noreferrer")}>
          Lab
        </Button>
        <Button onClick={() => window.open(linker, "_blank", "noopener,noreferrer")}>
          Video links
        </Button>


      </CardFooter> 
    </Card>

  );
}
