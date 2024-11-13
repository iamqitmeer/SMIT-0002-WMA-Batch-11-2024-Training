import connectDB from "@/app/lib/dbconnect"
import BlogModal from "@/app/lib/modals/BlogModals";

export async function GET(request) {
    await connectDB() 
    const blog = await BlogModal.find()
    return Response.json({
        data: blog, message: "Blogs Fetch Succefully"
    })
}

export async function POST(request) {
    await connectDB()
    const blog = await request.json()
    let addBlogToDB = await new BlogModal({ ...blog })
    await addBlogToDB.save()
    return Response.json({
        data: addBlogToDB, message: "Blogs Added Succefully"
    })

}