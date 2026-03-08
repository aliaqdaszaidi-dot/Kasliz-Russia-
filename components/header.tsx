'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative z-50">
      <nav className="flex items-center justify-between px-6 py-5 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-lg">
            KR
          </div>
          <span className="gradient-text text-2xl font-bold">Kasliz Russia</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-foreground hover:text-primary-light transition">
            About
          </a>
          <a href="#features" className="text-foreground hover:text-primary-light transition">
            Features
          </a>
          <a href="#community" className="text-foreground hover:text-primary-light transition">
            Community
          </a>
          <a href="#contact" className="text-foreground hover:text-primary-light transition">
            Contact
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://discord.gg/4JcRA5jad"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Discord
          </a>
          <button className="btn-primary">
            Play Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary border-t border-primary-dark/30 p-4">
          <div className="flex flex-col gap-4">
            <a href="#about" className="text-foreground hover:text-primary-light transition">
              About
            </a>
            <a href="#features" className="text-foreground hover:text-primary-light transition">
              Features
            </a>
            <a href="#community" className="text-foreground hover:text-primary-light transition">
              Community
            </a>
            <a href="#contact" className="text-foreground hover:text-primary-light transition">
              Contact
            </a>
            <a
              href="https://discord.gg/4JcRA5jad"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full text-center"
            >
              Discord
            </a>
            <button className="btn-primary w-full">
              Play Now
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
