"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function toggleLang() {
  const current = cookies().get("lang")?.value === "ur" ? "ur" : "en";
  cookies().set("lang", current === "ur" ? "en" : "ur", { path: "/", maxAge: 60 * 60 * 24 * 365 });
  revalidatePath("/", "layout");
}
