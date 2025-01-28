import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, Linkedin, Github } from "lucide-react"

export default function Resume() {
  return (
    <section id="resume" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Resume</h2>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Nguyen Huy Hieu</CardTitle>
            <CardDescription className="flex items-center gap-4 flex-wrap justify-center text-base">
              <a href="tel:+84388522680" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                <Phone size={16} /> +84 388 522 680
              </a> • 
              <a href="mailto:hhleas03@gmail.com" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                <Mail size={16} /> hhleas03@gmail.com
              </a> • 
              <a href="https://linkedin.com/in/hieu-nguyen-huy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                <Linkedin size={16} /> linkedin.com/in/hieu-nguyen-huy
              </a> • 
              <a href="https://github.com/hieunh03" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                <Github size={16} /> github.com/hieunh03
              </a>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>
              Experienced full-stack engineer with strong proficiency in data structures and algorithms. Skilled in DevOps practices, consistently delivering
              high-quality solutions to complex technical challenges.
            </p>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Work Experience</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold">Fullstack Developer</h4>
                  <p className="text-sm text-gray-500">Remitano - Cryptocurrency Exchange | Sep 2024 - Present | Remote</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Developed a RESTful API for the payment system, enhancing reliability and security, resulting in a 20% improvement in error detection speed.</li>
                    <li>Optimized the payout interface for makers, achieving a 50% faster payout process.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Software Engineer Intern</h4>
                  <p className="text-sm text-gray-500">Teko Solution JSC | Jul 2023 - Aug 2024 | Hanoi</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Developed and maintained web application using FastAPI and Python for customer care and reporting.</li>
                    <li>Developed a website using Golang in a monorepo to manage forests and carbon credits, resulting in a 20% increase in user engagement and 70% reduction in map loading time.</li>
                    <li>Improved CI/CD pipeline, reducing build time by 20% and increasing testing efficiency by 15%.</li>
                    <li>Developed components for a mobile app using Flutter and implemented CI/CD workflow with Fastlane.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Researcher</h4>
                  <p className="text-sm text-gray-500">Software Engineering Laboratory VNU University of Engineering and Technology | Mar 2022 - Apr 2023 | Hanoi</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Developed a source code analysis tool, increasing Dependency Analysis speed by 60%.</li>
                    <li>Published a paper and built microservices and authentication for the tool.</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold">Bachelor of Information Technology</h4>
                  <p className="text-sm text-gray-500">VNU University of Engineering and Technology Hanoi | Jun 2021 - Jan 2025</p>
                  <p>GPA: 3.47/4.0</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Special Prize in the Naprock Procon Competition in Japan 2024</li>
                    <li>Champion in the The National Procon 2023</li>
                    <li>Third prize in The 2021 ICPC Asia HaNoi Regional Contest</li>
                    <li>Second prize in the 2021 ICPC Vietnam National Programming Contest</li>
                    <li>First prize in the IAI-Hackathon (UET Hackathon) 2023</li>
                    <li>First prize in the Coding Inspiration Hackathon Organized by FPT Japanese club in 2023</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Skills</h3>
              <ul className="list-disc list-inside">
                <li>Developer Tools: Git, Github, Postman, Docker, Kubernetes</li>
                <li>Technologies: C/C++, Python, Java, Golang, Javascript, SQL, React, Ruby</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Projects</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold">Smart Home</h4>
                  <p className="text-sm text-gray-500">Mar 2024 - Jun 2024</p>
                  <p>Developed a mobile app for managing IoT devices with map-based visualization, using Home Assistant, Flutter, and Spring Boot. Achieved 30% faster response time, 25% better alert reliability, and 90% user satisfaction in testing.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">MindMap AI</h4>
                  <p className="text-sm text-gray-500">Aug 2023 - Nov 2023</p>
                  <p>Developed a web application that helps users create mind maps and flowcharts using AI, resulting in a 30% reduction in time spent on creating diagrams.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Dictionary</h4>
                  <p className="text-sm text-gray-500">Oct 2022 - Dec 2022</p>
                  <p>Implemented a Trie data structure to reduce search time by 80% and integrated Google Translate API for English to Vietnamese translation.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Languages</h3>
              <p>Vietnamese (Native proficiency)</p>
              <p>English (Professional working proficiency)</p>
            </div>
          </CardContent>

          <CardFooter className="flex justify-center">
            <Button asChild className="hover:scale-105 transition-transform">
              <a href="/resume/Nguyen_Huy_Hieu_Resume.pdf" download>Download Full Resume</a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
