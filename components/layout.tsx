import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-background sticky top-0 z-10 border-b">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Nguyen Huy Hieu
          </Link>
          <div className="space-x-4">
            <Button variant="ghost" asChild>
              <Link href="#about">About</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#resume">Resume</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#contact">Contact</Link>
            </Button>
          </div>
        </nav>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-background border-t py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Nguyen Huy Hieu. All rights reserved.</p>
      </footer>
    </div>
  )
}

