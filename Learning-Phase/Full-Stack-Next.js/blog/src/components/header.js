import Link from 'next/link'
import React from 'react'
import { BookOpen, Feather, PenTool, User } from "lucide-react"
import { Button } from "@/components/ui/button"

function Header() {
  return (
    <header className="px-8 sticky top-0 z-50 w-full border-b border-zinc-200 bg-zinc-100/80 backdrop-blur-sm">
    <div className="container flex h-16 items-center justify-between">
      <Link href="/" className="flex items-center space-x-2">
        <BookOpen className="h-6 w-6 text-zinc-700" />
        <span className="text-xl font-bold text-zinc-900">BlogApp</span>
      </Link>
      <nav className="hidden md:flex space-x-6 text-sm font-medium">
        <Link href="/" className="text-zinc-700 hover:text-zinc-900">
          Home
        </Link>
        <Link href="/about" className="text-zinc-700 hover:text-zinc-900">
          About
        </Link>
        <Link href="/blogs" className="text-zinc-700 hover:text-zinc-900">
          Blogs
        </Link>
        <Link
          href="/add-blog"
          className="text-zinc-700 hover:text-zinc-900"
        >
          Add Blog
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
        <Button variant="outline" className="hidden sm:inline-flex">
          Log in
        </Button>
        <Button>Sign up</Button>
      </div>
    </div>
  </header>  )
}

export default Header