"use client";

import { type Editor } from "@tiptap/react";
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading,
  Underline,
  Quote,
  Undo,
  Redo,
} from "lucide-react";

type Props = {
  editor: Editor | null;
  content: string;
};

const Toolbar = ({ editor, content }: Props) => {
  if (!editor) {
    return null;
  }

  const buttons = [
    {
      component: Bold,
      action: () => editor.chain().focus().toggleBold().run(),
      isActive: "bold",
    },
    {
      component: Italic,
      action: () => editor.chain().focus().toggleItalic().run(),
      isActive: "italic",
    },
    {
      component: Underline,
      action: () => editor.chain().focus().toggleUnderline().run(),
      isActive: "underline",
    },
    {
      component: Strikethrough,
      action: () => editor.chain().focus().toggleStrike().run(),
      isActive: "strike",
    },
    {
      component: Heading,
      action: () => editor.chain().focus().toggleHeading({ level: 4 }).run(),
      isActive: "heading",
    },
    {
      component: List,
      action: () => editor.chain().focus().toggleBulletList().run(),
      isActive: "bulletList",
    },
    {
      component: ListOrdered,
      action: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: "orderedList",
    },
    {
      component: Quote,
      action: () => editor.chain().focus().toggleBlockquote().run(),
      isActive: "blockquote",
    },
    {
      component: Undo,
      action: () => editor.chain().focus().undo().run(),
      isActive: "undo",
    },
    {
      component: Redo,
      action: () => editor.chain().focus().redo().run(),
      isActive: "redo",
    },
  ];


  return (
    <div
      className="px-4 py-3 rounded-tl-md rounded-tr-md flex justify-between items-start
    gap-5 w-full flex-wrap border border-gray-700 sticky top-0 z-50 bg-white dark:bg-neutral-900"
    >
      <div className="flex justify-start items-center gap-5 w-full lg:w-10/12 flex-wrap ">
        {buttons.map(({ component: Component, action, isActive }, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.preventDefault();
              action();
            }}
            className={
              editor.isActive(isActive)
                ? "bg-gray-200 dark:bg-neutral-800 p-2 rounded"
                : "p-2"
            }
          >
            <Component className="w-5 h-5" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Toolbar;
