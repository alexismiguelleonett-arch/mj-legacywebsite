import { ShieldCheck, Scale, Newspaper } from 'lucide-react'

const items = [
  {
    myth: 'Los medios distorsionaron muchos aspectos de su vida personal.',
    truth:
      'Contexto verificado con fuentes documentadas, separando el sensacionalismo de los hechos.',
  },
  {
    myth: 'Rumores y titulares se repitieron sin verificación durante décadas.',
    truth:
      'Análisis de la cobertura de prensa, filtraciones y su impacto en la percepción pública.',
  },
  {
    myth: 'Polémicas amplificadas fuera de su contexto original.',
    truth:
      'Una mirada equilibrada, respetuosa y centrada en la documentación disponible.',
  },
]

export function MythsTruth() {
  return (
    <section id="mitos" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <div className="grid lg:grid-cols-[1fr_1.2fr]">
            {/* Left intro */}
            <div className="relative border-b border-border p-8 sm:p-12 lg:border-b-0 lg:border-r">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                <Scale className="h-6 w-6" />
              </span>
              <span className="mt-8 block text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Sección Destacada
              </span>
              <h2 className="mt-3 text-balance text-4xl font-bold uppercase tracking-tight sm:text-5xl">
                Mitos vs. Realidad
              </h2>
              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                Un espacio dedicado a desmentir mitos y contextualizar la prensa,
                los leaks y las polémicas con un enfoque limpio, riguroso y
                respetuoso hacia su memoria.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-xs uppercase tracking-wider text-muted-foreground">
                  <Newspaper className="h-4 w-4 text-primary" />
                  Prensa verificada
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-xs uppercase tracking-wider text-muted-foreground">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  Enfoque respetuoso
                </span>
              </div>
            </div>

            {/* Right list */}
            <div className="divide-y divide-border">
              {items.map((item, i) => (
                <div key={i} className="grid gap-4 p-8 sm:grid-cols-2 sm:p-10">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      El mito
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                      {item.myth}
                    </p>
                  </div>
                  <div className="border-l-0 sm:border-l sm:border-primary/40 sm:pl-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      La realidad
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.truth}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
