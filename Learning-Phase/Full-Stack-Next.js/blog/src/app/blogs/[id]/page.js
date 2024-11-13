import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CalendarIcon } from "lucide-react";
import EditBtn from "@/components/buttons/EditBtn";
import DeleteBtn from "@/components/buttons/DeleteBtn";

async function BlogPost({ params }) {
  const response = await fetch(`http://localhost:3000/api/blogs/${params.id}`, {
    cache: "no-cache",
  });

  const blog = await response.json();

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto overflow-hidden">
        <div className="relative h-64 md:h-96">
          <Image
            src="https://images.unsplash.com/photo-1605712161712-a0623699205e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Blog cover"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback>{blog.author[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-lg font-semibold">{blog.author}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CalendarIcon className="mr-1 h-4 w-4" />
                  <span>10/July/2024</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <EditBtn blog={blog} id={params.id} />
              <DeleteBtn id={params.id} />
            </div>
          </div>
          <CardTitle className="text-4xl font-bold leading-tight md:text-5xl">
            {blog.title}
          </CardTitle>
        </CardHeader>
        <Separator className="mx-6" />
        <CardContent className="prose prose-lg dark:prose-invert max-w-none p-6">
          <p className="whitespace-pre-wrap">{blog.body}</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default BlogPost;
