"use client"

import { Separator } from "@/components/ui/separator";


export default function TitleBanner() {
    return (
        <div className="mb-8">
            <h1 className="text-4xl">curhat.</h1>
            <p className='opacity-25 text-xs'>Made with {'<3'} by Jarvis</p>
            
            <Separator className="my-4" />
        </div>
    );
}
