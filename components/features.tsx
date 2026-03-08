'use client'

import { Gamepad2, Users, Trophy, Zap, Building2, Coins } from 'lucide-react'

const features = [
  {
    icon: Gamepad2,
    title: 'Immersive Gameplay',
    description: 'Experience realistic roleplay mechanics with advanced character customization and progression systems.',
  },
  {
    icon: Users,
    title: 'Thriving Community',
    description: 'Join a vibrant community of passionate players from around the world.',
  },
  {
    icon: Trophy,
    title: 'Competitive Events',
    description: 'Participate in regular tournaments and events with amazing rewards.',
  },
  {
    icon: Zap,
    title: 'Fast Servers',
    description: 'Experience ultra-low latency with our state-of-the-art server infrastructure.',
  },
  {
    icon: Building2,
    title: 'Custom Properties',
    description: 'Own businesses, homes, and build your own empire in the game world.',
  },
  {
    icon: Coins,
    title: 'Economy System',
    description: 'Engage in a dynamic in-game economy with multiple income opportunities.',
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Incredible Features</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Everything you need for the ultimate roleplay experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-xl bg-secondary/50 border border-primary/20 hover:border-primary/50 transition duration-300 glow-hover"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition">
                  <Icon className="text-primary-light" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
