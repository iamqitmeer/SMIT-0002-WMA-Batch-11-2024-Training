"use server";

import { revalidatePath } from "next/cache";

export async function addTodo(formData) {
  let todo = formData.get("todo");
  try {
    await fetch("http://localhost:3000/api/todos", {
      method: "POST",
      body: JSON.stringify({ title: todo }),
    });

    revalidatePath("/todo");
  } catch (error) {
    console.error(error);
  }
}
