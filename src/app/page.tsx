import { TechCard } from "@/components/TechCard"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Me } from "@/utils/database-in-memory"
import Image from "next/image";
import Link from "next/link"

export default function Home() {
  const me = new Me();
  const maximumAreaIndex = me.myAreas.length - 1;

  return (
    <main>
      <section className="my-12">
        <div>
          <h1 className="text-4xl font-extrabold z-50">
            Hey, I’m <span className="text-violet-500">{me.myFullName}</span> 👋
          </h1>
        </div>

        <p className="text-xl font-medium text-zinc-200 my-2">
          {me.myAreas.map((myArea, index) => {
            return (maximumAreaIndex > index) ? `${myArea} & ` : `${myArea} `;
          })}
          <span className="underline text-violet-400">Developer</span>
        </p>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          <p className="text-lg">{me.myDescription}</p>
        </div>

        <Link download="/cv-arnaldoucuassapi.pdf" href="#" target="_blank">
          <button className="py-2 px-8 mt-6 bg-zinc-900 border border-zinc-800 hover:bg-violet-500 drop-shadow transition-opacity rounded-md text-zinc-100 font-semibold">
            Donwload CV
          </button>
        </Link>

        <div className="w-48 h-48 bg-violet-300/20 absolute top-16 right-0 blur-3xl"></div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        
        <Carousel 
          className="grid items-center gap-4"
          opts={{ align: "start" }}
        >
          <CarouselPrevious />
          <CarouselContent>
            {me.myTechs.map((tech) => {
              return (
                <HoverCard key={tech.name}>
                  <HoverCardTrigger>
                    <CarouselItem className="basis-1/7">
                      <TechCard src={tech.icon} alt={tech.name} />
                    </CarouselItem>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    {tech.name}
                  </HoverCardContent>
                </HoverCard>
              )
            })}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </section>

      
     
    </main>
  )
}
