'use client'

import { ArrowRight, Zap } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl -top-40 -left-40 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl -bottom-40 -right-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary-light">
            <Zap size={16} />
            <span className="text-sm font-semibold">Welcome to the Next Generation CRMP</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="gradient-text">Kasliz Russia</span>
            <br />
            <span className="text-foreground">Immersive Roleplay Experience</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Join thousands of players in the most immersive Custom Roleplay Multiplayer experience. Build your story, create your legacy, and become part of a thriving community.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="btn-primary flex items-center justify-center gap-2 group">
              Start Playing
              <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
            </button>
            <a
              href="https://discord.gg/4JcRA5jad"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center justify-center gap-2"
            >
              Join Our Discord
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-16 border-t border-primary/20">
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">2,500+</div>
              <div className="text-sm text-foreground/70">Active Players</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">500+</div>
              <div className="text-sm text-foreground/70">Custom Jobs</div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-3xl md:text-4xl font-bold gradient-text">24/7</div>
              <div className="text-sm text-foreground/70">Server Online</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
