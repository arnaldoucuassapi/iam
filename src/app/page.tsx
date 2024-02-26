import { TechCard } from "@/components/TechCard"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Me } from "@/utils/database-in-memory"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRightFromSquare } from "lucide-react";

export default function Home() {
  const me = new Me();
  const maximumAreaIndex = me.myAreas.length - 1;
  const firstName = (me.myFullName).split(" ")[0];

  return (
    <main>
      <section className="my-12">
        <div>
          <h1 className="text-3xl font-extrabold z-50">
            Hi, I’m {firstName}, a
            <span className="ml-2 bg-gradient-to-r from-blue-500 to-white text-transparent bg-clip-text">
              programmer
            </span> 
            <br />
            with passion for web and mobile
          </h1>
        </div>

        <p className="text-xl font-medium text-zinc-200 my-2">
          {me.myAreas.map((myArea, index) => {
            return (maximumAreaIndex > index) ? `${myArea} & ` : `${myArea} `;
          })}
        </p>

        <div className="text-zinc-400">
          <p>
            Product Designer at &nbsp;
            <a 
              href="#" 
              target="_blank" 
              className="text-zinc-100"
            >
              Dominate↗
            </a>
          </p>

          <p>
            Previously worked with &nbsp;
            <a 
              href="#" 
              target="_blank" 
              className="text-zinc-100"
            >
              Lojanniq↗
            </a>
            &nbsp; and &nbsp;
            <a 
              href="#" 
              target="_blank" 
              className="text-zinc-100"
            >
              Jacyland↗
            </a>
          </p>
          {/* <p>Graduated from CMU↗ SAIC↗</p> */}
        </div>

        <a 
          className="flex items-center space-x-2 w-fit py-2 px-8 mt-6 hover:bg-zinc-800 transition-colors border-2 border-transparent hover:border-blue-500/10 bg-blue-500 drop-shadow rounded-full text-zinc-100 font-semibold"
          download="/cv-arnaldoucuassapi.pdf" 
          href="#"
          target="_blank"
        >
          <span>See my resume now</span>
          <ArrowUpRightFromSquare size={16} />
        </a>

        <div className="w-48 h-48 bg-blue-300/10 absolute top-32 right-64 blur-3xl"></div>
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
                <CarouselItem key={tech.name} className="basis-1/7">
                  <TechCard src={tech.icon} alt={tech.name} />
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </section>
      
      <section className="my-4 mt-8">
        <h2 className="text-2xl font-bold mb-4">Selected work</h2>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8 justify-between">
          <Link href="/lojanniq">
            <div className="space-y-4">
              <div className="w-full h-72 grid rounded bg-zinc-900/30 border shadow border-zinc-900">
                <Image className="m-auto self-center" src="/lojanniq_white_full.png" alt="Lojanniq" width={200} height={200} objectFit="cover" />
              </div>
              <div>
                <p className="text-lg">Ecommerce - Meta Reality Labs</p>
                <p className="text-zinc-400">UX Design, FullStack Developer</p>
                <p className="text-zinc-200">Designed user experience for an AR device to improve users social experience at Meta Reality Labs</p>
              </div>
            </div>
          </Link>

          <Link href="/jacyland">
            <div className="space-y-4">
              <div className="w-full h-72 grid rounded bg-zinc-900/30 border shadow border-zinc-900">
                <Image className="m-auto self-center" src="/jacyland.png" alt="Jacyland" width={100} height={100} objectFit="cover" />
              </div>
              <div>
                <p className="text-lg">Ecommerce - Meta Reality Labs</p>
                <p className="text-zinc-400">UX Design, FullStack Developer</p>
                <p className="text-zinc-200">Designed user experience for an AR device to improve users social experience at Meta Reality Labs</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  )
}
