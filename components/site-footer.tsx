import { Music } from 'lucide-react'

const columns = [
  {
    title: 'Archivo',
    links: [
      { label: 'Discografía & Ediciones', href: '#categorias' },
      { label: 'Tours & Conciertos', href: '#categorias' },
      { label: 'Videoclips & Sesiones', href: '#categorias' },
      { label: 'Biografía', href: '#categorias' },
    ],
  },
  {
    title: 'Explorar',
    links: [
      { label: 'Mitos vs. Realidad', href: '#mitos' },
      { label: 'Legado', href: '#legado' },
      { label: 'Galería & Productos', href: '#galeria' },
      { label: 'Albums y Singles', href: '#discografia' },
    ],
  },
  {
    title: 'Más',
    links: [
      { label: 'Moda & Neverland', href: '#categorias' },
      { label: 'Libros & Documentales', href: '#categorias' },
      { label: 'Studio Albums', href: '#discografia' },
      { label: 'Greatest Hits', href: '#discografia' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <Music className="h-5 w-5 text-primary-foreground" />
              </span>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
                Legacy
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Un archivo independiente dedicado a preservar y celebrar el legado
              del Rey del Pop con respeto y rigor.
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Legacy. Sitio tributo de fans. No
            oficial.
          </p>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            Michael Jackson · 1958 — 2009
          </p>
        </div>
      </div>
    </footer>
  )
}
