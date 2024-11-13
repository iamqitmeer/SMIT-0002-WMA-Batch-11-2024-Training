import BlogModal from "@/app/lib/modals/BlogModals";

export async function GET(request, { params }) {
  const id = await params.id;

  let blog = await BlogModal.findById(id);
  return Response.json(blog);
}

export async function DELETE(request, { params }) {
  const id = await params.id;

  let blog = await BlogModal.deleteOne({ _id: id });
  return Response.json({ message: "Blog Deleted Succesfully" });
}

export async function PUT(request, { params }) {
  const id = await params.id;

  const blog = await request.json();
  const updatedBlog = await BlogModal.updateOne(
    {
      _id: id,
    },
    {
      ...blog,
    }
  );

  return Response.json({
    blog: updatedBlog,
    message: "Blog Updated Succesfully",
  });
}
