import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <section className="my-12">
        <div className="relative max-w-max">
          <h1 className="text-5xl font-extrabold z-50">Hey, I’m Arnaldo Ucuassapi 👋</h1>
          <div className="absolute top-1 right-20 z-10 -rotate-3 bg-violet-600 w-96 h-10 opacity-10"></div>
        </div>

        <p className="text-2xl font-semibold my-2">Full Stack & Mobile <span className="underline">Developer</span></p>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          <p className="text-lg">Construindo ótimas soluções para os problemas computacionais</p>
        </div>

        <Link download="/cv-arnaldoucuassapi.pdf" href="#" target="_blank">
          <button className="py-2.5 px-8 mt-6 bg-white hover:bg-white/50 drop-shadow transition-opacity rounded-md text-zinc-900 font-semibold uppercase">Baixar meu CV</button>
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 uppercase">Tecnologias</h2>
        
        <div className="flex items-center gap-4">
          <Image width={60} height={60} src="/next-js.svg" alt="Logo do framework web Next.js 13" />
          <Image width={60} height={60} src="/react.svg" alt="Logo da biblioteca React" />
          <Image width={60} height={60} src="/php.svg" alt="Logo da linguagem PHP" />
          <Image width={60} height={60} src="/typescript.svg" alt="Logo da linguagem TypeScript" />
          <Image width={60} height={60} src="/javascript.svg" alt="Logo da linguagem JavaScript" />
        </div>
      </section>
    </main>
  )
}
