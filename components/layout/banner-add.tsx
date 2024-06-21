"use client"

import { Separator } from "@/components/ui/separator";


export default function TitleBanner() {
    return (
        <div className="mb-8 flex flex-col gap-2">
            <h1 className="text-3xl">Ingin mencurahkan sesuatu?</h1>
            <p className='opacity-25 text-sm'>Coba untuk menambahkan pesanmu sendiri...</p>
            <Separator className="mb-4" />
        </div>
    );
}
