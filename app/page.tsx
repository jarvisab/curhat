import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto p-10">
      <div className="flex flex-col justify-center gap-3">
      <Input placeholder="Example input component"></Input>
      <Button>Submit</Button>
      </div>
      <div className="p-5">
        <ul>
          <li>Example Message 1</li>
          <li>Example Message 2</li>
          <li>Example Message 3</li>
        </ul>
      </div>
    </main>
  )
}
