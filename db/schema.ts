import {
  pgTable,
  serial,
  text,
  integer,
  real,
} from "drizzle-orm/pg-core";

export const foodsTable = pgTable("foods", {
  id: serial("id").primaryKey(),

  name: text("name").notNull(),

  category: text("category").notNull(),

  description: text("description").notNull(),

  ingredients: text("ingredients").notNull(),

  image: text("image").notNull(),

  slug: text("slug").unique().notNull(),

  price: integer("price").notNull(),

  rating: real("rating").default(5).notNull(),
});