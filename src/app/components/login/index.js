'use client'

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useContext,useEffect } from "react";
import { SemInfoContext } from "../context";
import { useRouter } from "next/navigation";


export default function LoginComponent(){

  const router = useRouter();

  const { logindetails,setLoginDetails,setIsAuthenticated,setIsAuthenticated1,setIsAuthenticated2,setIsAuthenticated3,setIsAuthenticated4 } = useContext(SemInfoContext);

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

  useEffect(() => {
    const storedAuthStatus = localStorage.getItem('isauthenticated');
    const storedAuthStatus1 = localStorage.getItem('isauthenticated1');
    const storedAuthStatus2 = localStorage.getItem('isauthenticated2');
    const storedAuthStatus3 = localStorage.getItem('isauthenticated3');
    const storedAuthStatus4 = localStorage.getItem('isauthenticated4');
    setIsAuthenticated(storedAuthStatus === 'true');
    setIsAuthenticated1(storedAuthStatus1 === 'true');
    setIsAuthenticated2(storedAuthStatus2 === 'true');
    setIsAuthenticated3(storedAuthStatus3 === 'true');
    setIsAuthenticated4(storedAuthStatus4 === 'true');
  }, []);


  const handlesubmit = () => {
    const { username, password } = logindetails;
    if (username === "admin" && password === "dsadminml"){
      setIsAuthenticated(true);
      localStorage.setItem('isauthenticated', 'true'); 
      alert('You are authenticated!');
      router.push('/'); 
    }else if(username === "admin1" && password === "ds1styearadminml"){
      setIsAuthenticated1(true);
      localStorage.setItem('isauthenticated1', 'true'); 
      alert('You are authenticated!');
      router.push('/'); 
    }else if(username === "admin2" && password === "ds2ndyearadminml"){
      setIsAuthenticated2(true);
      localStorage.setItem('isauthenticated2', 'true'); 
      alert('You are authenticated!');
      router.push('/'); 
    }else if(username === "admin3" && password === "ds3rdyearadminml"){
      setIsAuthenticated3(true);
      localStorage.setItem('isauthenticated3', 'true'); 
      alert('You are authenticated!');
      router.push('/'); 
    }else if(username === "admin4" && password === "ds4thyearadminml"){
      setIsAuthenticated4(true);
      localStorage.setItem('isauthenticated4', 'true'); 
      alert('You are authenticated!');
      router.push('/'); 
    }
    else{
      alert('Wrong password!');
    }
  };

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