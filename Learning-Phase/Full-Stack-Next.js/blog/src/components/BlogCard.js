"use client"

import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import Link from 'next/link'

function BlogCard({ blog }) {
    return (
        <Card className="flex flex-col">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">{blog.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-muted-foreground">{blog.body}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">By {blog.author}</p>
               <Link href={`/blogs/${blog._id}`}>
                <Button variant="outline" size="sm">Read More</Button>
               </Link>
            </CardFooter>
        </Card>)
}

export default BlogCard