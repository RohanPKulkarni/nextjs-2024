import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "../../../components/ui/card";


export default function Commoncard({name , credits, incharge}) {
  return (
    <Card className="flex bg-gray-100 flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 cursor-pointer">
      <CardHeader className="p-0">
        <CardTitle className="text-xl max-w-[250px] text-ellipsis overflow-hidden whitespace-nowrap font-semibold text-gray-950">
          <p>{name}</p>
          <p>{credits}</p>
        </CardTitle>
        <CardDescription className="mt-3 text-gray-600">
          <p>{incharge}</p>       
        </CardDescription>
      </CardHeader>
      <CardFooter className="p-0">
        <Button>
          View
        </Button>
      </CardFooter> 
    </Card>

  );
}
