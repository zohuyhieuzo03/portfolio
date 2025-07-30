import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, Linkedin, Github } from "lucide-react"

export default function Resume() {
  return (
    <section id="resume" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="text-center pb-8">
            <div className="mb-6">
              <CardTitle className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
                Nguyen Huy Hieu
              </CardTitle>
              <p className="text-xl text-gray-600 font-medium">Fullstack Developer</p>
            </div>
            <CardDescription className="flex items-center gap-6 flex-wrap justify-center text-base">
              <a href="tel:+84388522680" className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-2 transition-colors">
                <Phone size={18} /> +84 388 522 680
              </a>
              <a href="mailto:hhleas03@gmail.com" className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-2 transition-colors">
                <Mail size={18} /> hhleas03@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/hieu-nguyen-huy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-2 transition-colors">
                <Linkedin size={18} /> linkedin.com/in/hieu-nguyen-huy
              </a>
              <a href="https://github.com/hieunh03" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-2 transition-colors">
                <Github size={18} /> github.com/hieunh03
              </a>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>
              Experienced full-stack engineer with strong proficiency in <strong>data structures and algorithms</strong>. Skilled in <strong>DevOps practices</strong>, consistently delivering
              high-quality solutions to complex technical challenges.
            </p>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-blue-200 pb-2">Work Experience</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold"><strong>Fullstack Developer</strong></h4>
                  <p className="text-sm text-gray-500"><strong>Remitano</strong> - Cryptocurrency Exchange | Sep 2024 - Present | Remote</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Developed an <strong>ERP service</strong> that maintains pull requests and links with documents to manage the goals and tasks of the product.</li>
                    <li>Developed an <strong>anomaly detection service</strong> for detecting anomalies in on-ramp and off-ramp flows using <strong>AWS Cloudwatch</strong>.</li>
                    <li>Maintained and optimized the <strong>KYC service (kyc-service)</strong>, reducing operational costs while ensuring stability and performance.</li>
                    <li>Worked within a <strong>Ruby backend stack</strong>, aligning with Remitano's core technology ecosystem.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold"><strong>Software Engineer Intern</strong></h4>
                  <p className="text-sm text-gray-500"><strong>Teko Solution JSC</strong> | Jul 2023 - Aug 2024 | Hanoi</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Developed and maintained web applications using <strong>FastAPI</strong> and <strong>Python</strong> for customer care and reporting systems.</li>
                    <li>Built a website using <strong>Golang</strong> in a monorepo to manage forests and carbon credits, achieving <strong>20% increase in user engagement</strong> and <strong>70% reduction in map loading time</strong>.</li>
                    <li>Improved <strong>CI/CD pipeline</strong>, reducing build time by <strong>20%</strong> and increasing testing efficiency by <strong>15%</strong>.</li>
                    <li>Developed components for mobile applications using <strong>Flutter</strong> and implemented CI/CD workflow with <strong>Fastlane</strong>.</li>
                    <li>Participated in code reviews and contributed to team knowledge sharing sessions.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold"><strong>Researcher</strong></h4>
                  <p className="text-sm text-gray-500"><strong>Software Engineering Laboratory VNU University of Engineering and Technology</strong> | Mar 2022 - Apr 2023 | Hanoi</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Developed a <strong>source code analysis tool</strong>, improving Dependency Analysis speed by <strong>60%</strong>.</li>
                    <li>Published <strong>research paper</strong> and built <strong>microservices</strong> and <strong>authentication systems</strong> for the tool.</li>
                    <li>Conducted research on software engineering methodologies and best practices.</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-blue-200 pb-2">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold"><strong>Bachelor of Information Technology</strong></h4>
                  <p className="text-sm text-gray-500"><strong>VNU University of Engineering and Technology Hanoi</strong> | Jun 2021 - Jan 2025</p>
                  <p><strong>GPA: 3.47/4.0</strong></p>
                  <ul className="list-disc list-inside mt-2">
                    <li><strong>Special Prize</strong> in the Naprock Procon Competition in Japan 2024</li>
                    <li><strong>Champion</strong> in the The National Procon 2023</li>
                    <li><strong>Third prize</strong> in The 2021 ICPC Asia HaNoi Regional Contest</li>
                    <li><strong>Second prize</strong> in the 2021 ICPC Vietnam National Programming Contest</li>
                    <li><strong>First prize</strong> in the IAI-Hackathon (UET Hackathon) 2023</li>
                    <li><strong>First prize</strong> in the Coding Inspiration Hackathon Organized by FPT Japanese club in 2023</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-blue-200 pb-2">Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2"><strong>Programming Languages</strong></h4>
                  <ul className="list-disc list-inside text-sm">
                    <li><strong>C/C++</strong>, <strong>Python</strong>, <strong>Java</strong>, <strong>Golang</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong></li>
                    <li><strong>SQL</strong>, <strong>HTML/CSS</strong>, <strong>Ruby</strong>, <strong>PHP</strong></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2"><strong>Frameworks & Technologies</strong></h4>
                  <ul className="list-disc list-inside text-sm">
                    <li><strong>React</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>FastAPI</strong>, <strong>Spring Boot</strong></li>
                    <li><strong>Flutter</strong>, <strong>Docker</strong>, <strong>Kubernetes</strong>, <strong>Git</strong>, <strong>GitHub</strong></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2"><strong>Tools & Platforms</strong></h4>
                  <ul className="list-disc list-inside text-sm">
                    <li><strong>Postman</strong>, <strong>AWS</strong>, <strong>Google Cloud Platform</strong></li>
                    <li><strong>MongoDB</strong>, <strong>PostgreSQL</strong>, <strong>Redis</strong>, <strong>RabbitMQ</strong></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2"><strong>Other Skills</strong></h4>
                  <ul className="list-disc list-inside text-sm">
                    <li><strong>Data Structures & Algorithms</strong></li>
                    <li><strong>DevOps</strong>, <strong>CI/CD</strong>, <strong>Microservices</strong></li>
                    <li><strong>RESTful APIs</strong>, <strong>GraphQL</strong></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-blue-200 pb-2">Projects</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold"><strong>Smart Home IoT Management System</strong></h4>
                  <p className="text-sm text-gray-500">Mar 2024 - Jun 2024</p>
                  <p>Developed a comprehensive mobile application for managing IoT devices with map-based visualization, using <strong>Home Assistant</strong>, <strong>Flutter</strong>, and <strong>Spring Boot</strong>. Achieved <strong>30% faster response time</strong>, <strong>25% better alert reliability</strong>, and <strong>90% user satisfaction</strong> in testing. Implemented real-time device monitoring and automated alert systems.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold"><strong>MindMap AI - Intelligent Diagram Creator</strong></h4>
                  <p className="text-sm text-gray-500">Aug 2023 - Nov 2023</p>
                  <p>Developed a web application that helps users create mind maps and flowcharts using <strong>AI</strong>, resulting in a <strong>30% reduction in time spent on creating diagrams</strong>. Integrated <strong>natural language processing</strong> to automatically generate diagram structures from text input.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold"><strong>High-Performance Dictionary Application</strong></h4>
                  <p className="text-sm text-gray-500">Oct 2022 - Dec 2022</p>
                  <p>Implemented a <strong>Trie data structure</strong> to reduce search time by <strong>80%</strong> and integrated <strong>Google Translate API</strong> for English to Vietnamese translation. Built a user-friendly interface with advanced search features and pronunciation guides.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold"><strong>E-commerce Platform</strong></h4>
                  <p className="text-sm text-gray-500">Jan 2023 - Mar 2023</p>
                  <p>Developed a full-stack e-commerce platform using <strong>React</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>. Implemented user authentication, product management, shopping cart functionality, and payment integration with <strong>Stripe API</strong>.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-blue-200 pb-2">Languages</h3>
              <p><strong>Vietnamese</strong> (Native proficiency)</p>
              <p><strong>English</strong> (Professional working proficiency)</p>
            </div>
          </CardContent>

          <CardFooter className="flex justify-center">
            <Button asChild className="hover:scale-105 transition-transform">
              <a href="/resume/Nguyen_Huy_Hieu_SWE.pdf" download>Download Full Resume</a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
