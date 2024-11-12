import connectDB from "@/app/lib/dbconnect"
import BlogModal from "@/app/lib/modals/BlogModals";

export async function GET(request) {
    await connectDB() 
    const blog = await BlogModal.find()
    console.log("Blogs From MongoDB", blog);

    return Response.json({
        data: blog, message: "Blogs Fetch Succefully"
    })
}

export async function POST(request) {
    await connectDB()
    const blog = await request.json()
    let addBlogToDB = await new BlogModal({ ...blog })
    await addBlogToDB.save()
    console.log("addBlogToDB",addBlogToDB)
    return Response.json({
        data: addBlogToDB, message: "Blogs Added Succefully"
    })

}

export async function PUT(request) { }

export async function DELETE(request) { }