"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useContext, useEffect } from "react";
import { SemInfoContext } from "../context";
import { useRouter } from "next/navigation";

async function sha256Hex(text) {
	const enc = new TextEncoder();
	const buf = await crypto.subtle.digest("SHA-256", enc.encode(text));
	return Array.from(new Uint8Array(buf))
		.map(b => b.toString(16).padStart(2, "0"))
		.join("");
}

const PEPPER = "msrit-q9T$7p!N";
const HASHES = {
	admin: "48ac68b104a2f4f90671a298e7ba2aca19d570bc970e5f7a8faadf55917a1aa0",  // admin:dsadminml:msrit-q9T$7p!N
	admin1: "aa7710f9a2c4dc004022e710d8902168440e9401823083e1b9d2ceba04d69035", // admin1:ds1styearadminml:msrit-q9T$7p!N
	admin2: "657bf545b8439e5c53fb36d3fef09186469f96acf436653357bf8f64964ba696", // admin2:ds2ndyearadminml:msrit-q9T$7p!N
	admin3: "28adfd0bf361dad54e7c1abd847c2602864820e690c8d54c2fbf1193b1a14223", // admin3:ds3rdyearadminml:msrit-q9T$7p!N
	admin4: "bf74f2a62e6b2a1b4c739b1701ccb8623d095309f3609463581aeeabe2fd5a36", // admin4:ds4thyearadminml:msrit-q9T$7p!N
};

export default function LoginComponent() {
	const router = useRouter();

	const {
		logindetails,
		setLoginDetails,
		setIsAuthenticated,
		setIsAuthenticated1,
		setIsAuthenticated2,
		setIsAuthenticated3,
		setIsAuthenticated4,
	} = useContext(SemInfoContext);

	const handleChange = event => {
		const { name, value } = event.target;
		setLoginDetails(prevDetails => ({
			...prevDetails,
			[name]: value,
		}));
	};

	useEffect(() => {
		console.log(logindetails);
	}, [logindetails]);

	useEffect(() => {
		const storedAuthStatus = localStorage.getItem("isauthenticated");
		const storedAuthStatus1 = localStorage.getItem("isauthenticated1");
		const storedAuthStatus2 = localStorage.getItem("isauthenticated2");
		const storedAuthStatus3 = localStorage.getItem("isauthenticated3");
		const storedAuthStatus4 = localStorage.getItem("isauthenticated4");
		setIsAuthenticated(storedAuthStatus === "true");
		setIsAuthenticated1(storedAuthStatus1 === "true");
		setIsAuthenticated2(storedAuthStatus2 === "true");
		setIsAuthenticated3(storedAuthStatus3 === "true");
		setIsAuthenticated4(storedAuthStatus4 === "true");
	}, []);

  const handlesubmit = async () => {
		const { username, password } = logindetails;
		const digest = await sha256Hex(`${username}:${password}:${PEPPER}`);

		if (digest === HASHES.admin) {
			setIsAuthenticated(true);
			localStorage.setItem("isauthenticated", "true");
		} else if (digest === HASHES.admin1) {
			setIsAuthenticated1(true);
			localStorage.setItem("isauthenticated1", "true");
		} else if (digest === HASHES.admin2) {
			setIsAuthenticated2(true);
			localStorage.setItem("isauthenticated2", "true");
		} else if (digest === HASHES.admin3) {
			setIsAuthenticated3(true);
			localStorage.setItem("isauthenticated3", "true");
		} else if (digest === HASHES.admin4) {
			setIsAuthenticated4(true);
			localStorage.setItem("isauthenticated4", "true");
		} else {
			alert("Wrong password!");
			return;
		}

		alert("You are authenticated!");
		router.push("/");
	};

	return (
		<div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
			<div className="flex flex-col">
				<Label
					htmlFor="username"
					className="mb-1 text-sm font-semibold text-gray-700"
				>
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
				<Label
					htmlFor="password"
					className="mb-1 text-sm font-semibold text-gray-700"
				>
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
