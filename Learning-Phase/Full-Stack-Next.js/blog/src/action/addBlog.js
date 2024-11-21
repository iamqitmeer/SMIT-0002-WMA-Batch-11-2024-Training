"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addBlog(formData) {
  let obj = {
    title: formData.get("title"),
    body: formData.get("description"),
    author: formData.get("author"),
  };

  await fetch(`https://blog-by-qitmeer.vercel.app/api/blogs`, {
    method: "POST",
    body: JSON.stringify(obj),
  });
  revalidatePath("/blogs");
  redirect("/blogs");
}

export async function deleteBlog(id) {
  try {
    await fetch(`https://blog-by-qitmeer.vercel.app/api/blogs/${id}`, {
      method: "DELETE",
    });
    revalidatePath("/blog");
    redirect("/blog");
  } catch (error) {}
}

export async function updateBlog(editBlogText, id) {
  let obj = {
    title: editBlogText.title,
    body: editBlogText.body,
    author: editBlogText.author,
  };

  try {
    await fetch(`https://blog-by-qitmeer.vercel.app/api/blogs/${id}`, {
      method: "PUT",
      body: JSON.stringify(obj),
    });

    revalidatePath(`/blogs/${id}`);
    revalidatePath(`/blogs`);
  } catch (error) {}
}
