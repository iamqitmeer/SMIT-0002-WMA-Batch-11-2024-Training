import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookOpen, Feather, PenTool, User } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50">
    

      <main className="flex-grow">
        <section className="py-20 bg-zinc-100">
          <div className="container text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-zinc-900">
              Welcome to <span className="text-zinc-700">BlogApp</span>
            </h1>
            <p className="mt-4 text-lg text-zinc-600 max-w-3xl mx-auto">
              Discover, create, and share amazing stories with our vibrant
              community of writers and readers.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Button
                size="lg"
                className="bg-zinc-800 hover:bg-zinc-700 text-white"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-300 text-zinc-700 hover:bg-zinc-100"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12 text-zinc-900">
              Why Choose BlogApp?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<PenTool className="h-10 w-10 text-zinc-700" />}
                title="Easy Writing"
                description="Our intuitive editor makes it simple to create beautiful, engaging blog posts."
              />
              <FeatureCard
                icon={<User className="h-10 w-10 text-zinc-700" />}
                title="Grow Your Audience"
                description="Connect with readers and build a loyal following with our community features."
              />
              <FeatureCard
                icon={<Feather className="h-10 w-10 text-zinc-700" />}
                title="Customization"
                description="Personalize your blog with themes and layouts that match your style."
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-zinc-100">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-8 text-zinc-900">
              Stay Updated
            </h2>
            <p className="text-center text-zinc-600 mb-8">
              Subscribe to our newsletter for the latest blog posts and updates.
            </p>
            <form className="max-w-md mx-auto flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow"
              />
              <Button
                type="submit"
                className="bg-zinc-800 hover:bg-zinc-700 text-white"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </main>

    
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
      {icon}
      <h3 className="mt-4 text-xl font-semibold text-zinc-900">{title}</h3>
      <p className="mt-2 text-zinc-600">{description}</p>
    </div>
  )
}
