"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Edit2Icon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { updateBlog } from "@/action/addBlog";

function EditBtn({ blog, id }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  let [editBlogText, setEditBlogText] = useState({ ...blog, id });

  async function handleSubmit() {
      try {
        await updateBlog({ ...editBlogText }, id);
        setTimeout(() => setIsDrawerOpen(false), 100); 
      } catch (error) {
        console.error("Error updating blog:", error);
      }
  
  }

  return (
    <>
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
              Update your blog information here. Click "Update Blog" when you&apos;re
              done.
            </DrawerDescription>
          </DrawerHeader>
          <form action={handleSubmit} className="grid gap-4 p-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                type="text"
                name="title"
                id="title"
                value={editBlogText.title}
                onChange={(e) =>
                  setEditBlogText({ ...editBlogText, title: e.target.value })
                }
                placeholder="Enter blog title"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                type="text"
                name="description"
                value={editBlogText.body}
                onChange={(e) =>
                  setEditBlogText({ ...editBlogText, body: e.target.value })
                }
                id="content"
                placeholder="Enter blog content"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="author">Author Name</Label>
              <Input
                type="text"
                name="author"
                value={editBlogText.author}
                onChange={(e) =>
                  setEditBlogText({ ...editBlogText, author: e.target.value })
                }
                id="author"
                placeholder="Enter author name"
              />
            </div>

            <Button type="submit" className="my-4">
              Update Blog
            </Button>
          </form>{" "}
      
        </DrawerContent>
      </Drawer>{" "}
    </>
  );
}

export default EditBtn;
