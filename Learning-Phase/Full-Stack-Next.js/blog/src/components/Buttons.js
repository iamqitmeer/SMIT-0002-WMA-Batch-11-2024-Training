"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Edit2Icon, TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { deleteBlog } from "@/action/addBlog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
function Buttons({ id }) {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  async function apiCall() {
    const response = await fetch(`${process.env.BASE_URL}/api/blogs/${id}`, {
      cache: "no-cache",
    });
    const blog = await response.json();
  }

  apiCall();

  async function handleDeleteBTN() {
    await deleteBlog(id);
    router.push("/blogs");
  }

  return (
    <div className="flex space-x-2">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsDrawerOpen(true)}
      >
        <Edit2Icon className="h-4 w-4" />
        <span className="sr-only">Edit</span>
      </Button>

      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Edit Blog</DrawerTitle>
            <DrawerDescription>
              Update your blog information here. Click "Update Blog" when
              you&apos;re done.
            </DrawerDescription>
          </DrawerHeader>
          <EditBlogForm />
        </DrawerContent>
      </Drawer>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" size="icon">
            <TrashIcon className="h-4 w-4" />
            <span className="sr-only">Delete</span>
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              blog.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteBTN}>
              Yes, Delete it
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

function EditBlogForm() {
  return (
    <form className="grid gap-4 p-4">
      <div className="grid gap-2">
        <Label htmlFor="title">Title</Label>
        <Input
          value={blog.title}
          type="text"
          name="title"
          id="title"
          placeholder="Enter blog title"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="content">Content</Label>
        <Textarea
          type="text"
          name="description"
          value={blog.description}
          id="content"
          placeholder="Enter blog content"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="author">Author Name</Label>
        <Input
          type="text"
          name="author"
          value={blog.author}
          id="author"
          placeholder="Enter author name"
        />
      </div>

      <Button type="submit" className="my-4">
        Update Blog
      </Button>
    </form>
  );
}

export default Buttons;
