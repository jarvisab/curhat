import React from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { ModeToggle } from "../interactive/mode-toggle";

import {
  ChevronLeft,
  ChevronRight,
  MessageSquarePlus
} from 'lucide-react';

import AboutDrawer from '../interactive/drawer-about';
import { mainDrawer, formDrawer } from "@/app/contents";

export const EditorMenuBar: React.FC<{
  isMessageEmpty: boolean
}> = (
  { isMessageEmpty }) => {
    return (
      <div className='flex justify-center gap-4 fixed bottom-4 left-2 right-2 px-4'>
        <Link href="/">
          <Button variant="outline" size="icon"><ChevronLeft /></Button>
        </Link>
        <AlertDialogTrigger asChild>
          <Button type="button" className='w-1/2' disabled={isMessageEmpty}>Submit</Button>
        </AlertDialogTrigger>
        <AboutDrawer data={formDrawer} />
        <ModeToggle />
      </div>
    );
  };


interface MenuBarProps {
  handlePrevious: () => void;
  handleNext: () => void;
  currentMessageIndex: number;
  browsedMessagesLength: number;
}
export const MenuBar: React.FC<MenuBarProps> = (
  { handlePrevious, handleNext, currentMessageIndex, browsedMessagesLength }
) => {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 pt-4 pb-2 shadow-sm bg-white/10 dark:bg-black/10 backdrop-blur-sm border-t-2 dark:border-neutral-800">
      <div className="w-full max-w-7xl mx-auto px-4 space-y-2">
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="secondary"
            onClick={handlePrevious}
            disabled={currentMessageIndex === 0}>
            Prev<ChevronLeft />
          </Button>
          <p>
            {
              currentMessageIndex + 1
            } / {
              browsedMessagesLength < 0 ? 1 : browsedMessagesLength + 1
            }
          </p>
          <Button variant="secondary"
            onClick={handleNext}
            disabled={currentMessageIndex === browsedMessagesLength}>
            <ChevronRight />Next
          </Button>
        </div>
        <div className="flex justify-center h-14 items-center">
          <div className="flex items-center gap-4">
            <AboutDrawer data={mainDrawer} />
            <Link href="/add">
              <Button>Curhat <MessageSquarePlus className="ml-2 h-4 w-4" /></Button>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}