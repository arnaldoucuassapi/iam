import Image from "next/image"

export default function Home() {
  return (
    <main>
      <section className="my-16">
        <h1 className="text-5xl font-extrabold">Hey, I’m Arnaldo Ucuassapi 👋</h1>

        <p className="text-2xl font-semibold my-2">Full Stack | Mobile <span className="underline">Developer</span></p>

        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-emerald-500 rounded-full animate-pulse"></div>
          <p className="text-lg">Construindo ótimas soluções para os problemas computacionais</p>
        </div>
        <button className="py-2 px-4 mt-6 bg-white hover:bg-white/50 transition-opacity rounded-sm text-zinc-900 font-semibold">Baixar meu CV</button>
      </section>

      <section className="">
        <h2 className="text-2xl font-bold mb-4">Tecnologias & Habilidades</h2>
        
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
