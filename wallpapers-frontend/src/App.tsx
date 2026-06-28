import { useEffect, useState } from 'react'
import { Github, Instagram } from 'lucide-react';

interface Wallpaper {
  id: string;
  title: string;
  imageUrl: string;
  resolution: string;
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

function App() {
  const [wallpapers, setWallpapers] = useState<Wallpaper[]>([])
  const [loaded, setLoaded] = useState(false) // Estado para controlar a animação de entrada

  useEffect(() => {
    // Procura os wallpapers na API
    fetch(`${API_URL}/wallpapers`)
      .then(res => res.json())
      .then(data => {
        setWallpapers(data)
        // Pequena pausa para disparar a animação após o carregamento dos dados
        setTimeout(() => setLoaded(true), 100)
      })
  }, [])

  return (
    <div className="min-h-screen bg-zinc-950 p-9 font-sans overflow-x-hidden">
      <h1 className="text-5xl font-black text-white mb-12 text-center uppercase tracking-tighter">
        M-Wallpapers
      </h1>

      <div>
        <p className="max-w-6xl mx-auto text-zinc-400 text-center mb-16">
          The wallpaper collection here, I've downloaded from different sites, I have no way of knowing if there is a copyright on these images. If you find any of the image hosted here is yours and of limited use, please let me know and i will remove it.
        </p>
      </div>

      <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-16 max-w-[90%] mx-auto transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'} mb-20`}>
        {wallpapers.map((wall, index) => (
          <div
            key={wall.id}
            // 'transitionDelay' cria o efeito cascata: cada card espera 50ms a mais que o anterior
            style={{ transitionDelay: !loaded ? `${index * 50}ms` : '0ms' }}
            className={`
              group bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 flex flex-col
              transition-all duration-500
              ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
              hover:border-zinc-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:-translate-y-1
            `}
          >
            <div className="overflow-hidden h-40">
              <img
                src={wall.imageUrl}
                alt={wall.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>

            <div className="p-2.5">
              <h3 className="text-[13px] font-bold text-zinc-400 truncate uppercase tracking-tight transition-colors group-hover:text-white">
                {wall.title}
              </h3>
              <p className="text-zinc-600 text-[9px] font-mono mb-2">
                {wall.resolution}
              </p>

              <a
                href={wall.imageUrl}
                target="_blank"
                className="block w-full text-center py-1 bg-zinc-800 text-zinc-400 text-[11px] font-bold rounded transition-all duration-300 group-hover:bg-white group-hover:text-black"
              >
                VIEW
              </a>
            </div>
          </div>
        ))}
      </div>

        <div className="flex justify-center gap-5 mb-10 mt-12">
            <a
            href="https://github.com/JotaG09"
            target="_blank"
            className="p-2 bg-zinc-900 rounded-full border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all"
            >
            <Github size={19} />
            </a>
            <a
            href="https://www.instagram.com/_joao.gbl/"
            target="_blank"
            className="p-2 bg-zinc-900 rounded-full border border-zinc-800 text-zinc-400 hover:text-pink-500 hover:border-pink-500/50 transition-all"
            >
            <Instagram size={19} />
            </a>
        </div>

      <div>
        <footer className="mt-10 text-center text-zinc-600 text-[14px]">
          Developed by João Gabriel 2024 @ All rights reserved.
        </footer>
      </div>
    </div>

  )
}

export default App