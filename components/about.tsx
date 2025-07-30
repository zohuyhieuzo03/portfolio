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
                I&apos;m a passionate full-stack engineer currently working at Remitano, a cryptocurrency exchange platform. 
                With strong proficiency in data structures and algorithms, I specialize in developing scalable web applications 
                and implementing DevOps practices. I have extensive experience with technologies including Python, Golang, 
                JavaScript/TypeScript, React, and Flutter.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                My achievements include winning the Special Prize in the Naprock Procon Competition in Japan 2024, 
                being the Champion in The National Procon 2023, and securing multiple awards in ICPC programming contests. 
                I&apos;m committed to delivering high-quality solutions to complex technical challenges and continuously 
                learning new technologies to stay at the forefront of software engineering.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

