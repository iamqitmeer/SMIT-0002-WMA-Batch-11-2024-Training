import React from 'react'
import Link from 'next/link'
import { BookOpen, Feather, PenTool, User } from "lucide-react"
import { Button } from "@/components/ui/button"

function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300 p-12">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">About</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-white">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-white">
                Team
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-white">
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/docs" className="hover:text-white">
                Documentation
              </Link>
            </li>
            <li>
              <Link href="/tutorials" className="hover:text-white">
                Tutorials
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:text-white">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <ul className="space-y-2">
            <li>
              <Link href="https://twitter.com" className="hover:text-white">
                Twitter
              </Link>
            </li>
            <li>
              <Link
                href="https://facebook.com"
                className="hover:text-white"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                href="https://instagram.com"
                className="hover:text-white"
              >
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-zinc-700 text-center">
        <p>&copy; 2024 BlogApp. All rights reserved.</p>
      </div>
    </div>
  </footer>  )
}

export default Footer