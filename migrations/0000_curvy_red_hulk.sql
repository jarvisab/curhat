CREATE TABLE `messages` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text DEFAULT 'Tanpa Judul' NOT NULL,
	`creator` text DEFAULT 'Anonim' NOT NULL,
	`message` text NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL
);
