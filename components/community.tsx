'use client'

import { MessageCircle, Users, Tv, Shield } from 'lucide-react'

const communityItems = [
  {
    icon: MessageCircle,
    title: 'Active Discord',
    description: 'Join our thriving Discord community with thousands of members discussing roleplay, sharing experiences, and organizing events.',
    cta: 'Join Discord',
    link: 'https://discord.gg/4JcRA5jad',
  },
  {
    icon: Users,
    title: 'Community Events',
    description: 'Participate in regular in-game events, tournaments, and special activities organized by our admin team.',
    cta: 'View Events',
    link: '#',
  },
  {
    icon: Tv,
    title: 'Streaming Community',
    description: 'Watch talented community members stream their gameplay and discover new strategies and playstyles.',
    cta: 'Watch Streams',
    link: '#',
  },
  {
    icon: Shield,
    title: 'Admin Support',
    description: 'Our dedicated admin team ensures a safe, fair, and enjoyable experience for all players.',
    cta: 'Report Issue',
    link: '#',
  },
]

export function Community() {
  return (
    <section id="community" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join Our <span className="gradient-text">Community</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Be part of a passionate community of roleplay enthusiasts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {communityItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/30 border border-primary/20 hover:border-primary/50 transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                </div>
                <a
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="mt-6 inline-flex items-center text-primary-light hover:text-primary font-semibold transition"
                >
                  {item.cta}
                  <span className="ml-2 group-hover:translate-x-1 transition">→</span>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
