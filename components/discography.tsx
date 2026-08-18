'use client'

import { useEffect, useState } from 'react'
import { Disc3, ListMusic, X, Sparkles, Layers } from 'lucide-react'

type Category = 'studio' | 'singles' | 'hits'

type Edition = {
  name: string
  type: string
  tracks: string[]
}

type Album = {
  title: string
  cover: string
  year: string
  category: Category
  label: string
  tracklist: string[]
  themeColor?: string;          // Color temático
  alternativeCovers?: string[];  // Galería de carátulas alternativas
  editions: Edition[]
  
}

const albums: Album[] = [
  {
    title: 'Got to Be There',
    cover: '/Gottobethere.jpg',
    year: '1972',
    category: 'studio',
    label: 'Motown · Debut en solitario',
    themeColor: '#800080',
    tracklist: [
      'Ain\u2019t No Sunshine',
      'I Wanna Be Where You Are',
      'Girl Don\u2019t Take Your Love from Me',
      'In Our Small Way',
      'Got to Be There',
      'Rockin\u2019 Robin',
      'Wings of My Love',
      'Maria (You Were the Only One)',
      'Love Is Here and Now You\u2019re Gone',
      'You\u2019ve Got a Friend',
    ],
    editions: [
      {
        name: 'Reedición Motown (2009)',
        type: 'Reissue',
        tracks: ['Masterización remasterizada', 'Notas de archivo ampliadas'],
      },
    ],
  },
  {
    title: 'Ben',
    cover: '/BEN.png',
    year: '1972',
    category: 'studio',
    label: 'Motown',
    themeColor: '#556B2F', // Color verde oliva
    tracklist: [
      'Ben',
      'Greatest Show on Earth',
      'People Make the World Go \u2019Round',
      'We\u2019ve Got a Good Thing Going',
      'Everybody\u2019s Somebody\u2019s Fool',
      'My Girl',
      'What Goes Around Comes Around',
      'In Our Small Way',
      'Shoo-Be-Doo-Be-Doo-Da-Day',
      'You Can Cry on My Shoulder',
    ],
    editions: [
      {
        name: 'Single "Ben"',
        type: 'Single',
        tracks: ['Ben', 'You Can Cry on My Shoulder (cara B)'],
      },
    ],
  },
  {
    title: 'Music & Me',
    cover: '/Music and Me.png',
    year: '1973',
    category: 'studio',
    label: 'Motown',
    themeColor: '#197965', // Color verde esmeralda
    tracklist: [
      'With a Child\u2019s Heart',
      'Up Again',
      'All the Things You Are',
      'Happy',
      'Too Young',
      'Doggin\u2019 Around',
      'Euphoria',
      'Morning Glow',
      'Johnny Raven',
      'Music and Me',
    ],
    editions: [],
  },
  {
    title: 'Forever, Michael',
    cover: '/ForeverMichael.png',
    year: '1975',
    category: 'studio',
    label: 'Motown',
    themeColor: '#E56357', // Color rojo salmon 
    tracklist: [
      'We\u2019re Almost There',
      'Take Me Back',
      'One Day in Your Life',
      'Cinderella Stay Awhile',
      'We\u2019ve Got Forever',
      'Just a Little Bit of You',
      'You Are There',
      'Dapper-Dan',
      'Dear Michael',
      'I\u2019ll Come Home to You',
    ],
    editions: [],
  },
  {
    title: 'Off the Wall',
    cover: '/offthewall.jpg',
    year: '1979',
    category: 'studio',
    label: 'Epic · Prod. Quincy Jones',
    themeColor: '#814327', // Color marrón cálido
    tracklist: [
      'Don\u2019t Stop \u2019Til You Get Enough',
      'Rock with You',
      'Working Day and Night',
      'Get on the Floor',
      'Off the Wall',
      'Girlfriend',
      'She\u2019s Out of My Life',
      'I Can\u2019t Help It',
      'It\u2019s the Falling in Love',
      'Burn This Disco Out',
    ],
    editions: [
      {
        name: 'Off the Wall (Reissue 2016)',
        type: 'Reissue',
        tracks: [
          'Álbum remasterizado',
          'Documental "Journey from Motown to Off the Wall" (Spike Lee)',
        ],
      },
    ],
  },
  {
    title: 'Thriller',
    cover: '/Thriller.jpg',
    year: '1982',
    category: 'studio',
    label: 'Epic · Álbum más vendido de la historia',
    themeColor: '#4682B4', // Color azul acero
    tracklist: [
      'Wanna Be Startin\u2019 Somethin\u2019',
      'Baby Be Mine',
      'The Girl Is Mine',
      'Thriller',
      'Beat It',
      'Billie Jean',
      'Human Nature',
      'P.Y.T. (Pretty Young Thing)',
      'The Lady in My Life',
    ],
    editions: [
      {
        name: 'Thriller 25 (2008)',
        type: 'Bonus Tracks',
        tracks: [
          'The Girl Is Mine 2008 (con will.i.am)',
          'P.Y.T. 2008 (con will.i.am)',
          'Wanna Be Startin\u2019 Somethin\u2019 2008 (con Akon)',
          'Beat It 2008 (con Fergie)',
          'Billie Jean 2008 (Kanye West Mix)',
          'For All Time (inédito)',
        ],
      },
      {
        name: 'Thriller 40 (2022)',
        type: 'Reissue',
        tracks: ['Disco de demos y versiones inéditas', 'Sessions de estudio 1982'],
      },
    ],
  },
  {
    title: 'Bad',
    cover: '/BAD.jpg',
    year: '1987',
    category: 'studio',
    label: 'Epic · Cinco #1 en Billboard',
    themeColor: '#DC2626', // Color rojo intenso
    tracklist: [
      'Bad',
      'The Way You Make Me Feel',
      'Speed Demon',
      'Liberian Girl',
      'Just Good Friends',
      'Another Part of Me',
      'Man in the Mirror',
      'I Just Can\u2019t Stop Loving You',
      'Dirty Diana',
      'Smooth Criminal',
      'Leave Me Alone',
    ],
    editions: [
      {
        name: 'Bad 25 (2012)',
        type: 'Demos',
        tracks: [
          'Don\u2019t Be Messin\u2019 \u2019Round',
          'I\u2019m So Blue',
          'Song Groove (A/K/A Abortion Papers)',
          'Free',
          'Price of Fame',
          'Al Capone',
          'Streetwalker',
          'Fly Away',
        ],
      },
    ],
  },
  {
    title: 'Dangerous',
    cover: '/dangerous.jpg',
    year: '1991',
    category: 'studio',
    label: 'Epic · Prod. Teddy Riley',
    themeColor: '#FFD700', // Color dorado
    tracklist: [
      'Jam',
      'Why You Wanna Trip on Me',
      'In the Closet',
      'She Drives Me Wild',
      'Remember the Time',
      'Can\u2019t Let Her Get Away',
      'Heal the World',
      'Black or White',
      'Who Is It',
      'Give In to Me',
      'Will You Be There',
      'Keep the Faith',
      'Gone Too Soon',
      'Dangerous',
    ],
    editions: [],
  },
  {
    title: 'HIStory',
    cover: '/History.jpg',
    year: '1995',
    category: 'studio',
    label: 'Epic · Book I (disco de material nuevo)',
    themeColor: '#8B0000', // Color rojo oscuro
    tracklist: [
      'Scream (con Janet Jackson)',
      'They Don\u2019t Care About Us',
      'Stranger in Moscow',
      'This Time Around',
      'Earth Song',
      'D.S.',
      'Money',
      'Come Together',
      'You Are Not Alone',
      'Childhood',
      'Tabloid Junkie',
      '2 Bad',
      'HIStory',
      'Little Susie',
      'Smile',
    ],
    editions: [
      {
        name: 'Blood on the Dance Floor: HIStory in the Mix (1997)',
        type: 'Remixes + Inéditos',
        tracks: [
          'Blood on the Dance Floor',
          'Morphine',
          'Superfly Sister',
          'Ghosts',
          'Is It Scary',
        ],
      },
    ],
  },
  {
    title: 'Blood on the Dance Floor',
    cover: '/Blood of the Dance Floor.png',
    year: '1997',
    category: 'studio',
    label: 'Epic · HIStory in the Mix',
    themeColor: '#680000', // Color rojo sangre
    tracklist: [
      'Blood on the Dance Floor',
      'Morphine',
      'Superfly Sister',
      'Ghosts',
      'Is It Scary',
      'Scream Louder (Flyte Tyme Remix)',
      'Money (Fire Island Radio Edit)',
      '2 Bad (Refugee Camp Mix)',
      'Stranger in Moscow (Tee\u2019s In-House Club Mix)',
      'This Time Around (D.M. Radio Mix)',
      'Earth Song (Hani\u2019s Club Experience)',
      'You Are Not Alone (Classic Club Mix)',
      'History (Tony Moran\u2019s HIStory Lesson)',
    ],
    editions: [
      {
        name: 'Formato',
        type: 'Special Edition',
        tracks: ['5 canciones nuevas + 8 remixes de HIStory', 'Primer álbum de remixes #1 en UK'],
      },
    ],
  },
  {
    title: 'Invincible',
    cover: '/invincible.jpg',
    year: '2001',
    category: 'studio',
    label: 'Epic · Último álbum de estudio',
    themeColor: '#808080', // Color gris/plata
  alternativeCovers: [
    '/invincible.jpg',
    '/images/invincible-blue.jpg',
    '/images/invincible-red.jpg',
    '/images/invincible-green.jpg',
    '/images/invincible-yellow.jpg'
  ],
    tracklist: [
      'Unbreakable',
      'Heartbreaker',
      'Invincible',
      'Break of Dawn',
      'Heaven Can Wait',
      'You Rock My World',
      'Butterflies',
      'Speechless',
      '2000 Watts',
      'You Are My Life',
      'Privacy',
      'Don\u2019t Walk Away',
      'Cry',
      'The Lost Children',
      'Whatever Happens (con Carlos Santana)',
      'Threatened',
    ],
    editions: [],
  },
  {
    title: 'Michael',
    cover: '/images/michael.jpg',
    year: '2010',
    category: 'studio',
    label: 'Epic / MJJ Productions · Primer álbum póstumo',
    themeColor: '#193070', 
    tracklist: [
      'Hold My Hand (con Akon)',
      'Hollywood Tonight',
      'Keep Your Head Up',
      '(I Like) The Way You Love Me',
      'Monster (con 50 Cent)',
      'Best of Joy',
      'Breaking News',
      '(I Can\u2019t Make It) Another Day (con Lenny Kravitz)',
      'Behind the Mask',
      'Much Too Soon',
    ],
    editions: [
      {
        name: 'Deluxe Edition',
        type: 'Bonus',
        tracks: ['DVD con documental del making-of', 'Caja de lujo con libro de fotos'],
      },
    ],
  },
  {
    title: 'Xscape',
    cover: '/images/xscape.jpg',
    year: '2014',
    category: 'studio',
    label: 'Epic / MJJ Productions · Segundo álbum póstumo',
    themeColor: '#191970', // Color azul medianoche
    tracklist: [
      'Love Never Felt So Good',
      'Chicago',
      'Loving You',
      'A Place with No Name',
      'Slave to the Rhythm',
      'Do You Know Where Your Children Are',
      'Blue Gangsta',
      'Xscape',
    ],
    editions: [
      {
        name: 'Deluxe Edition',
        type: 'Bonus',
        tracks: ['Versiones originales (demo) de cada tema', 'Documental de la producción'],
      },
    ],
  },
  {
    title: 'Thriller 25',
    cover: '/albums/thriller-25.svg',
    year: '2008',
    category: 'singles',
    label: 'Epic · Edición aniversario',
    themeColor: '#808080',
    tracklist: [
      'Álbum original remasterizado (9 temas)',
      'The Girl Is Mine 2008 (con will.i.am)',
      'P.Y.T. 2008 (con will.i.am)',
      'Wanna Be Startin\u2019 Somethin\u2019 2008 (con Akon)',
      'Beat It 2008 (con Fergie)',
      'Billie Jean 2008 (Kanye West Mix)',
      'For All Time (inédito de las sesiones de 1982)',
      'Vincent Price Thriller Voice-Over Session',
    ],
    editions: [
      {
        name: 'DVD incluido',
        type: 'Bonus',
        tracks: ['Videos de Billie Jean, Beat It y Thriller', 'Actuación en Motown 25'],
      },
    ],
  },
  {
    title: 'Number Ones',
    cover: '/images/number-ones-1.png',
    year: '2003',
    category: 'hits',
    label: 'Epic / MJJ · Grandes éxitos',
    themeColor: '#FFFFFF',
    alternativeCovers: [
    '/images/number-ones-1.png',
    '/images/number-ones-2.png',
    '/images/number-ones-3.png',
    '/images/number-ones-4.png'
  ],
    tracklist: [
      'Don\u2019t Stop \u2019Til You Get Enough',
      'Rock with You',
      'Billie Jean',
      'Beat It',
      'Thriller',
      'Bad',
      'The Way You Make Me Feel',
      'Man in the Mirror',
      'Dirty Diana',
      'Smooth Criminal',
      'Black or White',
      'You Are Not Alone',
      'Earth Song',
      'You Rock My World',
      'Break of Dawn',
      'One More Chance (inédito)',
    ],
    editions: [],
  },
  {
    title: 'The Essential',
    cover: '/images/The Essential Michael Jackson.png',
    year: '2005',
    category: 'hits',
    themeColor: '#5c5c5c',
    label: 'Epic / Legacy · Doble recopilatorio',
    tracklist: [
      'Disco 1: era Motown y Off the Wall',
      'I Want You Back (The Jackson 5)',
      'Got to Be There',
      'Don\u2019t Stop \u2019Til You Get Enough',
      'Rock with You',
      'Off the Wall',
      'Disco 2: era Thriller a Invincible',
      'Billie Jean',
      'Beat It',
      'Bad',
      'Smooth Criminal',
      'Black or White',
      'You Are Not Alone',
      'You Rock My World',
    ],
    editions: [
      {
        name: 'Edición 3.0 (2008)',
        type: 'Reissue',
        tracks: ['Tercer disco con éxitos adicionales y remixes'],
      },
    ],
  },
  {
    title: 'King of Pop',
    cover: '/albums/king-of-pop.svg',
    year: '2008',
    category: 'hits',
    themeColor: '#474747',
    label: 'Epic · Recopilatorio votado por fans',
    tracklist: [
      'Recopilación con listas distintas por país',
      'Billie Jean',
      'Thriller',
      'Smooth Criminal',
      'Man in the Mirror',
      'Earth Song',
      'They Don\u2019t Care About Us',
      'Remember the Time',
      'Heal the World',
    ],
    editions: [
      {
        name: 'Ediciones regionales',
        type: 'Special Edition',
        tracks: ['Tracklists elegidos por los fans de cada territorio'],
      },
    ],
  },
]

const tabs: { id: Category; label: string; icon: typeof Disc3 }[] = [
  { id: 'studio', label: 'Studio Albums', icon: Disc3 },
  { id: 'singles', label: 'Singles & Special Editions', icon: Sparkles },
  { id: 'hits', label: 'Greatest Hits', icon: Layers },
]

function AlbumCover({ album }: { album: Album }) {
  return (
    <div className="relative aspect-square w-full overflow-hidden border-b border-border bg-secondary">
      <img
        src={album.cover}
        alt={`Portada de ${album.title}`}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-background/90 via-background/30 to-transparent p-4">
        <h3 className="text-balance text-lg font-bold uppercase leading-tight tracking-tight text-foreground">
          {album.title}
        </h3>
        <span className="shrink-0 rounded-full border border-primary/40 bg-background/70 px-2.5 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
          {album.year}
        </span>
      </div>
    </div>
  )
}

export function Discography() {
  const [active, setActive] = useState<Category>('studio')
  const [selected, setSelected] = useState<Album | null>(null)
  const [currentCover, setCurrentCover] = useState<string>('')

  // Sincroniza la portada actual con la del álbum seleccionado al abrir el modal
  useEffect(() => {
    if (selected) {
      setCurrentCover(selected.cover)
    }
  }, [selected])
  useEffect(() => {
    if (!selected) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setSelected(null)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [selected])

  const visible = albums.filter((a) => a.category === active)

  return (
    <section
      id="discografia"
      className="scroll-mt-16 border-t border-border/60 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Discografía
          </span>
          <h2 className="mt-3 text-balance text-4xl font-bold uppercase tracking-tight sm:text-5xl">
            Albums y Singles
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Explora la obra completa del Rey del Pop: desde sus inicios en Motown
            hasta sus lanzamientos póstumos. Filtra por categoría y abre cada portada
            para ver el tracklist y sus ediciones especiales.
          </p>
        </div>

        {/* Tab filters */}
        <div
          role="tablist"
          aria-label="Filtrar discografía"
          className="mt-10 flex flex-wrap gap-2"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = active === tab.id

            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(tab.id)}
                className={
                  'inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold uppercase tracking-wider transition-colors ' +
                  (isActive
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground')
                }
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Album grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((album) => (
            <article
              key={album.title}
              className="group flex flex-col overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:scale-[1.02]"
              style={{
                borderColor: album.themeColor || 'hsl(var(--primary) / 0.4)',
                boxShadow: album.themeColor ? `0 0 20px ${album.themeColor}40` : undefined,
              }}
            >
              <AlbumCover album={album} />
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {album.label}
                </p>
                <div className="mt-4 flex flex-1 items-end">
<button
  onClick={() => setSelected(album)}
  className="inline-flex w-full items-center justify-center gap-2 rounded-md border bg-secondary/80 px-4 py-2.5 text-sm font-semibold transition-all hover:bg-secondary"
  style={{
    borderColor: album.themeColor || 'hsl(var(--primary))',
    color: album.themeColor || 'hsl(var(--primary))'
  }}
>
  <ListMusic className="h-4 w-4" />
  View Tracklist / Editions
</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-background/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={() => setSelected(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="album-modal-title"
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl border bg-card sm:rounded-2xl transition-all duration-300"
            style={{
              borderColor: selected?.themeColor || 'rgba(255, 255, 255, 0.1)',
              boxShadow: selected?.themeColor ? `0 0 30px ${selected.themeColor}55` : 'none',
            }}
          >
            <div className="flex items-start gap-5 border-b border-border p-6">
              <div className="hidden shrink-0 flex-col items-center gap-2 sm:flex">
                <img
                  src={currentCover || selected.cover}
                  alt={`Portada de ${selected.title}`}
                  className="h-28 w-28 rounded-lg object-cover shadow-md transition-all duration-300"
                />

                {selected.alternativeCovers && selected.alternativeCovers.length > 0 && (
                  <div className="mt-1 flex max-w-[112px] flex-wrap justify-center gap-1.5">
                    {selected.alternativeCovers.map((cov, idx) => (
                      <button
                        key={cov + idx}
                        onClick={() => setCurrentCover(cov)}
                        className={`h-5 w-5 overflow-hidden rounded-full border transition-all ${
                          (currentCover || selected.cover) === cov
                            ? 'scale-110 border-primary ring-2 ring-primary/50'
                            : 'border-border opacity-50 hover:opacity-100'
                        }`}
                      >
                        <img src={cov} alt="Carátula" className="h-full w-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-primary/40 px-2.5 py-1 text-xs font-semibold text-primary">
                    {selected.year}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    {selected.label}
                  </span>
                </div>
                <h3
                  id="album-modal-title"
                  className="text-balance text-2xl font-bold uppercase tracking-tight text-foreground"
                >
                  {selected.title}
                </h3>
              </div>

              <button
                onClick={() => setSelected(null)}
                aria-label="Cerrar"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="overflow-y-auto p-6">
              <div className="flex items-center gap-2">
                <ListMusic
                  className="h-4 w-4"
                  style={{ color: selected.themeColor || 'hsl(var(--primary))' }}
                />
                <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  Tracklist
                </h4>
              </div>

              <ol className="mt-4 grid gap-1.5 sm:grid-cols-2">
                {selected.tracklist.map((track, i) => (
                  <li
                    key={track + i}
                    className="flex items-baseline gap-3 rounded-md px-2 py-1.5 text-sm text-foreground/90 hover:bg-secondary"
                  >
                    <span
                      className="w-5 shrink-0 text-right text-xs font-semibold"
                      style={{ color: selected.themeColor || 'hsl(var(--primary))' }}
                    >
                      {i + 1}
                    </span>
                    <span className="leading-snug">{track}</span>
                  </li>
                ))}
              </ol>
            </div>

            {selected.editions.length > 0 && (
              <div className="px-6 pb-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                    Ediciones especiales
                  </h4>
                </div>

                <div className="mt-4 space-y-4">
                  {selected.editions.map((ed) => (
                    <div
                      key={ed.name}
                      className="rounded-lg border border-border bg-secondary/50 p-4"
                    >
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-primary px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                          {ed.type}
                        </span>
                        <p className="text-sm font-semibold text-foreground">{ed.name}</p>
                      </div>
                      <ul className="mt-3 space-y-1.5">
                        {ed.tracks.map((track) => (
                          <li
                            key={track}
                            className="flex items-baseline gap-2 text-sm text-muted-foreground"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                            {track}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
