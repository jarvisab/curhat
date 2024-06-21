"use server"

import { db } from "@/app/db/db"
import { messages } from "@/app/db/schema"
import { max, eq } from 'drizzle-orm'
import { inArray } from 'drizzle-orm';

// Initialize an empty set to store visited IDs (cached in server-side memory)
let visitedIds: Set<string> = new Set();

export async function getMessagesFromIDS(randomIds: number[]) {
    try {
        const response = await db
            .select()
            .from(messages)
            .where(inArray(messages.id, randomIds));
        return response;
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}

export async function getMaxID() {
    try {
        const result = await db.select({ value: max(messages.id) }).from(messages);
        let max_id: number | null;
        max_id = result[0].value;

        if (max_id !== null && max_id !== undefined) {
            return max_id;
        } else {
            console.log('No max_id found');
            return 0;
        }
    } catch (error) {
        console.error("Error:", error);
    }
}
