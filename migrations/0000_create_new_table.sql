CREATE TABLE `messages` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text DEFAULT 'Tanpa Judul' NOT NULL,
	`creator` text DEFAULT 'Anonim' NOT NULL,
	`message` text NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL
);

CREATE INDEX idx_messages_id ON messages(id);

INSERT INTO messages (`message`) VALUES
("Message Template 1"),
("Message Template 2"),
("Message Template 3"),
("Message Template 4"),
("Message Template 5"),
("Message Template 6"),
("Message Template 7"),
("Message Template 8"),
("Message Template 9"),
("Message Template 10"),
("Message Template 11"),
("Message Template 12"),
("Message Template 13"),
("Message Template 14"),
("Message Template 15"),
("Message Template 16"),
("Message Template 17"),
("Message Template 18"),
("Message Template 19"),
("Message Template 20"),
("Message Template 21"),
("Message Template 22"),
("Message Template 23"),
("Message Template 24"),
("Message Template 25");