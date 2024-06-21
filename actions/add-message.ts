"use server"

import { db } from "@/app/db/db"
import { messages } from "@/app/db/schema"
import { revalidatePath } from "next/cache";
import sanitizeHtml from 'sanitize-html';

function sanitize(input: string): string {
    const allowedTags = [
        'h2',
        'br',
        'p',
        'strong',
        'em',
        'u',
        's',
        'ul',
        'li',
        'ol',
        'blockquote'
    ];

    return sanitizeHtml(input, { allowedTags });
}

export async function addNewMessage(input: {
    title?: string,
    creator?: string,
    message: string
}) {
    // Sanitize each input field
    const sanitizedMessage = sanitize(input.message);

    const insertData: {
        title?: string,
        creator?: string,
        message: string,
    } = {
        message: sanitizedMessage,
    };

    // Filter for empty data
    if (input.title?.trim()) {
        insertData.title = sanitize(input.title);
    }
    if (input.creator?.trim()) {
        insertData.creator = sanitize(input.creator);
    }

    try {
        await db.insert(messages).values(insertData);
        revalidatePath("/");
    } catch (error) {
        return {
            ok: false
        };
    }

    return {
        ok: true
    };
}