'use client'

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useContext,useEffect } from "react";
import { SemInfoContext } from "../context";
import { useRouter } from "next/navigation";


export default function LoginComponent(){

  const router = useRouter();

  const { logindetails,setLoginDetails,setIsAuthenticated } = useContext(SemInfoContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginDetails((prevDetails) => ({
      ...prevDetails,
      [name] : value
    }));
  };

  useEffect(() => {
    console.log(logindetails);
  }, [logindetails]);


  function handlesubmit(){
    const {username,password} = logindetails;
    const isauthenticateduser = username === "admin" && password === "dsadminml";
    if (isauthenticateduser) {
      setIsAuthenticated(true); 
      alert('You are authenticated!');
      router.push('/');
    } else {
      alert('Wrong password!');
    }
  }

  return(  
         <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
            <div className="flex flex-col">
              <Label htmlFor="username" className="mb-1 text-sm font-semibold text-gray-700">
                Username
              </Label>
              <Input
                type="text"
                id="username"
                name="username"
                value={logindetails.username}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <Label htmlFor="password" className="mb-1 text-sm font-semibold text-gray-700">
                Password
              </Label>
              <Input
                type="password"
                id="password"
                name="password"
                value={logindetails.password}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="md:col-span-2 flex flex-col justify-center mt-4">
              <Button 
                onClick={handlesubmit}
                className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </Button>
              
            </div>
          </div>
      
  );
}