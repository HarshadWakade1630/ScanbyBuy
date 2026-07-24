"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData): Promise<void> {
  const password = formData.get("password")?.toString();

  // Debug check
  if (!process.env.ADMIN_PASSWORD) {
    throw new Error("ADMIN_PASSWORD is missing");
  }

  if (password !== process.env.ADMIN_PASSWORD) {
    redirect("/admin/login?error=1");
  }

  const cookieStore = await cookies();

  cookieStore.set("admin", "true", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 2, // 2 hours
  });

  redirect("/admin");
}
