import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, ChevronDown, Github, Linkedin, Twitter } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50">
    

      <main className="flex-grow">
        <section className="relative p-20 overflow-hidden">
          <div className="absolute inset-0 bg-zinc-900">
            <Image
              src="https://images.unsplash.com/photo-1589922656942-bf8a07244fa1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Team collaboration"
              layout="fill"
              objectFit="cover"
              className="opacity-30"
            />
          </div>
          <div className="container relative z-10 text-center text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
              Empowering Voices
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Connecting minds and inspiring change through the art of blogging.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-white hover:bg-white text-zinc-900"
            >
              Our Story <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        <section className="p-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-zinc-900">
                  Our Mission
                </h2>
                <p className="text-zinc-600 mb-4">
                  At BlogApp, we believe in the power of words to change the
                  world. Our mission is to provide a platform where voices from
                  all walks of life can be heard, ideas can flourish, and
                  communities can grow.
                </p>
                <p className="text-zinc-600 mb-4">
                  We,re committed to fostering an environment of creativity,
                  authenticity, and meaningful connections. Through our
                  innovative tools and supportive community, we aim to make
                  blogging accessible and impactful for everyone.
                </p>
                <Button className="mt-4">Join Our Community</Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Team brainstorming"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="p-20 bg-zinc-100">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12 text-zinc-900">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🎨</div>
                  <h3 className="text-xl font-semibold mb-2 text-zinc-900">
                    Creativity
                  </h3>
                  <p className="text-zinc-600">
                    We encourage original thinking and innovative approaches to
                    content creation.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🌍</div>
                  <h3 className="text-xl font-semibold mb-2 text-zinc-900">
                    Inclusivity
                  </h3>
                  <p className="text-zinc-600">
                    We celebrate diversity and strive to amplify voices from all
                    backgrounds.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-xl font-semibold mb-2 text-zinc-900">
                    Integrity
                  </h3>
                  <p className="text-zinc-600">
                    We uphold the highest standards of honesty and ethical
                    practices in our platform.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="p-20">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12 text-zinc-900">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Alex Johnson"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-zinc-900">
                  Alex Johnson
                </h3>
                <p className="text-zinc-600 mb-3">Founder & CEO</p>
                <div className="flex justify-center space-x-3">
                  <Link href="#" className="text-zinc-400 hover:text-zinc-900">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-zinc-400 hover:text-zinc-900">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-zinc-400 hover:text-zinc-900">
                    <Github className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Samantha Lee"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-zinc-900">
                  Samantha Lee
                </h3>
                <p className="text-zinc-600 mb-3">Head of Product</p>
                <div className="flex justify-center space-x-3">
                  <Link href="#" className="text-zinc-400 hover:text-zinc-900">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-zinc-400 hover:text-zinc-900">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-zinc-400 hover:text-zinc-900">
                    <Github className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Michael Chen"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-zinc-900">
                  Michael Chen
                </h3>
                <p className="text-zinc-600 mb-3">Lead Developer</p>
                <div className="flex justify-center space-x-3">
                  <Link href="#" className="text-zinc-400 hover:text-zinc-900">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-zinc-400 hover:text-zinc-900">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-zinc-400 hover:text-zinc-900">
                    <Github className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-20 bg-zinc-900 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Join Us on Our Journey</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Be part of a community that&apos;s shaping the future of digital
              storytelling. Start your blogging adventure with us today.
            </p>
            <Button
              size="lg"
              className="bg-white text-zinc-900 hover:bg-zinc-100"
            >
              Get Started Now
            </Button>
          </div>
        </section>
      </main>

    
    </div>
  )
}
