import { TechBoxImage } from "@/components/TechBoxImage"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Me } from "@/utils/database-in-memory"
import Link from "next/link"

export default function Home() {
  const me = new Me();
  const maximumAreaIndex = me.myAreas.length - 1;

  return (
    <main>
      <section className="my-12">
        <div className="relative max-w-max">
          <h1 className="text-5xl font-extrabold z-50">Hey, I’m {me.myFullName} 👋</h1>
          <div className="absolute top-1 right-20 z-10 -rotate-3 bg-violet-600 w-96 h-10 opacity-10"></div>
        </div>

        <p className="text-2xl font-semibold my-2">
          {me.myAreas.map((myArea, index) => {
            return (maximumAreaIndex > index) ? `${myArea} & ` : `${myArea} `;
          })}
          <span className="underline">Developer</span>
        </p>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          <p className="text-lg">{me.myDescription}</p>
        </div>

        <Link download="/cv-arnaldoucuassapi.pdf" href="#" target="_blank">
          <button className="py-2.5 px-8 mt-6 bg-white hover:bg-white/50 drop-shadow transition-opacity rounded-md text-zinc-900 font-semibold uppercase">Baixar meu CV</button>
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 uppercase">Tecnologias</h2>
        
        <Carousel 
          className="flex items-center gap-4"
          opts={{ align: "start", }}
        >
          <CarouselPrevious />
          <CarouselContent>
            {me.myTechs.map((tech) => {
              return (
                <CarouselItem key={tech.name} className="basis-1/7">
                  <TechBoxImage src={tech.icon} alt={tech.name} />
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </section>
    </main>
  )
}
