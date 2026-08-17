import { Music2, Star, Globe, Gamepad2, Heart, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Milestone = {
  year: string
  icon: LucideIcon
  title: string
  description: string
}

const milestones: Milestone[] = [
  {
    year: '1964',
    icon: Music2,
    title: 'The Jackson 5',
    description:
      'Comienza su carrera junto a sus hermanos, mostrando un talento vocal excepcional desde niño.',
  },
  {
    year: '1979',
    icon: Star,
    title: 'Off the Wall',
    description:
      'Su primer gran álbum solista con Quincy Jones marca el inicio de una nueva era del pop.',
  },
  {
    year: '1982',
    icon: Sparkles,
    title: 'Thriller',
    description:
      'El álbum más vendido de la historia redefine el videoclip y la producción musical.',
  },
  {
    year: '1992',
    icon: Globe,
    title: 'Heal the World Foundation',
    description:
      'Su labor humanitaria y filantrópica alcanza reconocimiento mundial.',
  },
  {
    year: '2000s',
    icon: Gamepad2,
    title: 'Pasiones Personales',
    description:
      'Amante de los videojuegos, coleccionista y colaborador creativo en múltiples proyectos.',
  },
  {
    year: 'Legado',
    icon: Heart,
    title: 'Influencia Eterna',
    description:
      'Su impacto en la música, la danza y la cultura sigue inspirando a generaciones.',
  },
]

export function Timeline() {
  return (
    <section id="legado" className="scroll-mt-16 border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Línea de Tiempo
          </span>
          <h2 className="mt-3 text-balance text-4xl font-bold uppercase tracking-tight sm:text-5xl">
            Carrera & Legado
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Un recorrido por los momentos que definieron su trayectoria artística,
            sus contribuciones y sus pasiones personales.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-6 top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-1/2" />

          <ol className="space-y-10">
            {milestones.map((m, i) => (
              <li
                key={m.year}
                className={`relative pl-16 md:grid md:grid-cols-2 md:gap-12 md:pl-0 ${
                  i % 2 === 0 ? '' : 'md:[direction:rtl]'
                }`}
              >
                {/* Node */}
                <span className="absolute left-6 top-1 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center md:left-1/2">
                  <span className="h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                </span>

                <div
                  className={`[direction:ltr] ${
                    i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'
                  }`}
                >
                  <div className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50">
                    <div
                      className={`flex items-center gap-3 ${
                        i % 2 === 0 ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                        <m.icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-sm font-semibold uppercase tracking-wider text-primary">
                        {m.year}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {m.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
