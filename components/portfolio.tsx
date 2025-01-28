import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
  },
  {
    title: "Project 3",
    description: "A brief description of Project 3",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md"
                />
                <CardDescription className="mt-4">{project.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

