import { addBlog } from "@/action/addBlog"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function AddBlogPage() {

  return (
    <div className="min-h-screen bg-background p-8">
  
      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl">Add New Blog Post</CardTitle>
        </CardHeader>
        <form action={addBlog}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Blog Title</Label>
              <Input
                name="title"
                id="title"
                placeholder="Enter the blog title"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                name="description"
                id="description"
                placeholder="Enter the blog description"
                required
                className="min-h-[100px]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="author">Author Name</Label>
              <Input
                name="author"
                id="author"
                placeholder="Enter the author's name"
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Submit Blog Post
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
