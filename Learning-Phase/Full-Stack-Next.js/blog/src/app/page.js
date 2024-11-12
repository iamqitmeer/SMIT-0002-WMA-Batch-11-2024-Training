import BlogCard from "@/components/BlogCard"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusCircle } from "lucide-react"
import Link from "next/link"

export default async function BlogApp() {
  // const blogs = [
  //   {
  //     title: "Getting Started with React",
  //     description: "Learn the basics of React and start building your first component.",
  //     author: "Jane Doe"
  //   },
  //   {
  //     title: "Advanced TypeScript Techniques",
  //     description: "Dive deep into TypeScript and learn advanced types and patterns.",
  //     author: "John Smith"
  //   },
  //   {
  //     title: "CSS Grid Mastery",
  //     description: "Master CSS Grid layout and create complex, responsive designs with ease.",
  //     author: "Emily Johnson"
  //   },
  //   {
  //     title: "Node.js Best Practices",
  //     description: "Explore best practices for building scalable and maintainable Node.js applications.",
  //     author: "Michael Brown"
  //   },
  //   {
  //     title: "Introduction to GraphQL",
  //     description: "Understand the basics of GraphQL and how it differs from REST APIs.",
  //     author: "Sarah Wilson"
  //   },
  //   {
  //     title: "Responsive Web Design Principles",
  //     description: "Learn key principles for creating responsive websites that work on any device.",
  //     author: "David Lee"
  //   }
  // ]

  let response = await fetch("http://localhost:3000/api/blogs")
  let blogs = await response.json()

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
        {blogs.data.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>

    </div>
  )
}