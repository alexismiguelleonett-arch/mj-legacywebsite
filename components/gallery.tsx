const items = [
  {
    src: '/gallery-glove.png',
    title: 'El Guante Icónico',
    tag: 'Moda',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: '/gallery-vinyl.png',
    title: 'Ediciones en Vinilo',
    tag: 'Discografía',
    span: '',
  },
  {
    src: '/gallery-concert.png',
    title: 'En Vivo · Tours',
    tag: 'Conciertos',
    span: '',
  },
  {
    src: '/gallery-costume.png',
    title: 'Vestuario de Escenario',
    tag: 'Archivo',
    span: '',
  },
  {
    src: '/gallery-magazine.png',
    title: 'Revistas & Prensa',
    tag: 'Editorial',
    span: '',
  },
  {
    src: '/gallery-gates.png',
    title: 'Neverland',
    tag: 'Legado',
    span: 'md:col-span-2',
  },
]

export function Gallery() {
  return (
    <section id="galeria" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Colección
            </span>
            <h2 className="mt-3 text-balance text-4xl font-bold uppercase tracking-tight sm:text-5xl">
              Galería & Productos
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Fotografías raras, revistas de época, vestuario y merchandising
              presentados como una colección de portafolio.
            </p>
          </div>
          <a
            href="#comunidad"
            className="rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary/50"
          >
            Contribuir material
          </a>
        </div>

        <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {items.map((item) => (
            <figure
              key={item.title}
              className={`group relative overflow-hidden rounded-xl border border-border bg-card ${item.span}`}
            >
              <img
                src={item.src || '/placeholder.svg'}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <span className="inline-block rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                  {item.tag}
                </span>
                <p className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                  {item.title}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
