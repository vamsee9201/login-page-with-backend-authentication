"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react";



export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(password)
    console.log(email)
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    //console.log(data)

    if (response.ok) {
      alert("Login successful!");
    } else {
      alert(`Login failed`);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
      <Input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} required />
      <Button type="submit">Button</Button>
      </form>
    </div>
    
  );
}
