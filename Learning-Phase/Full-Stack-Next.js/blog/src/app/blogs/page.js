import BlogCard from "@/components/BlogCard"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"

export default async function blogs() {

    let response = await fetch("http://localhost:3000/api/blogs", {
      cache: "no-cache",
    });

   let blogs = await response.json();



  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center">My Blog</h1>
      <div className="text-center m-4">
        <Link href="/add-blog">
          <Button size="lg">
            <PlusCircle className="mr-2 h-5 w-5" />
            Add Blogs
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {blogs.data.length > 0 ? (
          blogs.data.map((blog, index) => (
            <BlogCard key={blog._id} blog={blog} />
          ))
        ) : (
          <p className="text-center text-gray-500">No blogs available.</p>
        )}
      </div>
    </div>
  );
}
