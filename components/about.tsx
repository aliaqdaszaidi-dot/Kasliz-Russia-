'use client'

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Gradient box */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-xl group-hover:blur-2xl transition"></div>
            <div className="relative bg-secondary/80 rounded-2xl p-8 border border-primary/30 group-hover:border-primary/60 transition">
              <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold gradient-text">Kasliz Russia</h3>
                  <p className="text-foreground/70 mt-2">Since 2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              About <span className="gradient-text">Kasliz Russia</span>
            </h2>

            <p className="text-foreground/80 text-lg leading-relaxed">
              Kasliz Russia is a next-generation Custom Roleplay Multiplayer (CRMP) server that brings immersive storytelling and community-driven gameplay to life. Founded with a vision to create the most engaging roleplay experience, we've grown into a thriving community of thousands of dedicated players.
            </p>

            <p className="text-foreground/80 text-lg leading-relaxed">
              Our server features a deep economy system, countless job opportunities, property ownership, and a rich interactive world where every player's story matters. Whether you're looking to build a business, join law enforcement, or create your own unique narrative, Kasliz Russia offers endless possibilities.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                <div className="text-2xl font-bold gradient-text">Owner</div>
                <p className="text-foreground/70">Zach_Escobar</p>
              </div>
              <div className="p-4 rounded-lg bg-accent/10 border border-accent/30">
                <div className="text-2xl font-bold gradient-text">Since</div>
                <p className="text-foreground/70">2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
