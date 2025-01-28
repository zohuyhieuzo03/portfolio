import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          About Me
        </h2>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-col md:flex-row gap-8 items-center p-8">
            <div className="w-48 h-48 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/60 rounded-full animate-pulse group-hover:animate-none transition-all duration-300" />
              <Image
                src="/images/hieu_portfolio.jpg"
                alt="Nguyen Huy Hieu"
                fill
                className="rounded-full object-cover border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div>
              <CardTitle>Hello, I&apos;m Nguyen Huy Hieu</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-gray-700">
                I&apos;m a passionate full-stack engineer with strong proficiency in data structures and algorithms. I
                specialize in DevOps practices and have experience in developing web and mobile applications using various
                technologies such as Python, Golang, Flutter, and more.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                My goal is to deliver high-quality solutions to complex technical challenges. I&apos;m always eager to take on
                new projects and contribute to innovative solutions in the field of software engineering.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

