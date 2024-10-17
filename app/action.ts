"use server";

import { cookies } from "next/headers";

export async function setSomeCookie() {
  const cookieStore = await cookies();
  cookieStore.set("example", "Hello from the server!");
  console.log("Hello world");
}
