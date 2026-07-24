"use server";

import { db } from "@/db";
import { foodsTable } from "@/db/schema";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export async function addFood(formData: FormData) {
    const cookieStore = await cookies();

  if (cookieStore.get("admin")?.value !== "true") {
    redirect("/admin/login");
  }
  const name = formData.get("name") as string;
  const category = formData.get("category") as string;
  const description = formData.get("description") as string;
  const ingredients = formData.get("ingredients") as string;
  const image = formData.get("image") as string;
  const price = Number(formData.get("price"));
  const rating = Number(formData.get("rating"));

  const slug = name
    .toLowerCase()
    .replace(/\s+/g, "-");

  await db.insert(foodsTable).values({
    name,
    category,
    description,
    ingredients,
    image,
    price,
    rating,
    slug,
  });
}