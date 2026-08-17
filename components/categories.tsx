import {
  Disc3,
  Ticket,
  Video,
  GitBranch,
  Shirt,
  BookOpen,
  ArrowUpRight,
  Rat,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Category = {
  icon: LucideIcon
  title: string
  description: string
  count: string
}

const categories: Category[] = [
  {
    icon: Disc3,
    title: 'Discografía & Ediciones',
    description:
      'Álbumes de estudio, sencillos, remixes y ediciones de coleccionista a lo largo de su carrera.',
    count: '10 álbumes',
  },
  {
    icon: Ticket,
    title: 'Tours & Conciertos',
    description:
      'Bad, Dangerous, HIStory y This Is It: giras que redefinieron el espectáculo en vivo.',
    count: '5 giras mundiales',
  },
  {
    icon: Video,
    title: 'Videoclips & Sesiones',
    description:
      'Cortometrajes musicales y sesiones fotográficas que revolucionaron el arte visual.',
    count: '60+ videos',
  },
  {
    icon: GitBranch,
    title: 'Biografía & Árbol Genealógico',
    description:
      'Desde Gary, Indiana hasta el estrellato mundial. Familia, orígenes y momentos clave.',
    count: 'Cronología completa',
  },
  {
    icon: Rat,
    title: 'Mascotas & Neverland',
    description:
      'El mítico rancho Neverland y mucho más de sus mascotas.',
    count: 'Archivo de estilo',
  },
  {
    icon: Shirt,
    title: 'Moda',
    description:
      'El guante icónico, la chaqueta militar, Entre otras más.',
    count: 'Archivo de estilo',
  },
  {
    icon: BookOpen,
    title: 'Libros, Películas & Documentales',
    description:
      'Publicaciones, biografías, documentales y producciones que exploran su vida y obra.',
    count: 'Biblioteca curada',
  },
]

export function Categories() {
  return (
    <section id="categorias" className="scroll-mt-16 border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            El Archivo
          </span>
          <h2 className="mt-3 text-balance text-4xl font-bold uppercase tracking-tight sm:text-5xl">
            Categorías Principales
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Navega por las áreas fundamentales que componen el legado del Rey del
            Pop, cada una documentada con detalle y respeto.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <article
              key={cat.title}
              className="group relative flex flex-col rounded-xl border border-border bg-card p-7 transition-colors hover:border-primary/50"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <cat.icon className="h-6 w-6" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>

              <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground">
                {cat.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {cat.description}
              </p>
              <span className="mt-6 text-xs font-medium uppercase tracking-wider text-primary">
                {cat.count}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
