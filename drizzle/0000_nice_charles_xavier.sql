CREATE TABLE "foods" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"category" text NOT NULL,
	"description" text NOT NULL,
	"ingredients" text NOT NULL,
	"image" text NOT NULL,
	"slug" text NOT NULL,
	"price" integer NOT NULL,
	"rating" real DEFAULT 5,
	CONSTRAINT "foods_slug_unique" UNIQUE("slug")
);
