import Layout from "../components/layout"
import About from "../components/about"
import Portfolio from "../components/portfolio"
import Contact from "../components/contact"
import Resume from "../components/resume"

export default function Home() {
  return (
    <Layout>
      <About />
      <Resume />
      <Contact />
    </Layout>
  )
}

