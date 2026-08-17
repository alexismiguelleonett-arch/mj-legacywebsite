import { ArrowRight, Play } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/hero-dangerous-tour.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/65 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent" />
      </div>

      <div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-primary">
            1958 — 2009 · Legado Eterno
          </span>

          <h1 className="mt-6 text-balance text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
            Michael Jackson:
            <span className="mt-2 block text-primary">The King of Pop</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Un archivo curado dedicado a la música, la moda, la innovación y el
            legado cultural del artista más influyente de todos los tiempos.
            Explora discografía, tours, videoclips, historia y mucho más.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#categorias"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
            >
              Explorar Archivo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#galeria"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card/50 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary/50 hover:bg-card"
            >
              <Play className="h-4 w-4 text-primary" />
              Ver Galería
            </a>
          </div>

          <dl className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-border/60 pt-8">
            {[
              { value: '750M+', label: 'Discos vendidos' },
              { value: '13', label: 'Premios Grammy' },
              { value: '#1', label: 'Thriller · Álbum más vendido' },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-bold text-foreground sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
