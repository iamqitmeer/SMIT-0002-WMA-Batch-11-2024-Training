"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export default async function addBlog(formData) {
    let obj = {
        title: formData.get("title"),
        body: formData.get("description"),
        author: formData.get("author")
    }

    await fetch("http://localhost:3000/api/blogs", {
        method: "POST",
        body: JSON.stringify(obj)
    })
    revalidatePath("/add-blog")
    revalidatePath("/")
    redirect("/")
}