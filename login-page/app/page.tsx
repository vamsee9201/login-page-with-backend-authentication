import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


export default function Home() {
  return (
    <div>
      <Input type="email" placeholder="Email" required />
      <Input type="password" placeholder="password" required />
      <Button>Button</Button>
    </div>
    
  );
}
