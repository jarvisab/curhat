import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const messages = sqliteTable('messages', {
    id: integer('id')
        .primaryKey(),
    title: text('title')
        .default('Tanpa Judul')
        .notNull(),
    creator: text('creator')
        .default('Anonim')
        .notNull(),
    message: text('message')
        .notNull(),
    createdAt: text('created_at')
        .default(sql`(CURRENT_TIMESTAMP)`)
        .notNull(),
});

