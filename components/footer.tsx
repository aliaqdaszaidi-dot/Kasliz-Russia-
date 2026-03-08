'use client'

import { MessageCircle } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-primary/20 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold">
                KR
              </div>
              <span className="gradient-text font-bold">Kasliz Russia</span>
            </div>
            <p className="text-foreground/60 text-sm">
              Experience the ultimate Custom Roleplay Multiplayer experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-foreground/60 hover:text-primary-light transition">
                  About
                </a>
              </li>
              <li>
                <a href="#features" className="text-foreground/60 hover:text-primary-light transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#community" className="text-foreground/60 hover:text-primary-light transition">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-foreground/60 hover:text-primary-light transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-primary-light transition">
                  Rules & Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-primary-light transition">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Connect</h3>
            <a
              href="https://discord.gg/4JcRA5jad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary-light hover:bg-primary/20 transition"
            >
              <MessageCircle size={18} />
              <span className="text-sm font-semibold">Discord</span>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/60 text-sm">
              © 2024 Kasliz Russia. All rights reserved. Owned by Zach_Escobar
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-foreground/60 hover:text-primary-light transition">
                Privacy Policy
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary-light transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
