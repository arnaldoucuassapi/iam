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

        

        <Link 
          download="/cv-arnaldoucuassapi.pdf" 
          href="#"
          target="_blank"
        >
          <button className="flex items-center space-x-2 py-2 px-8 mt-6 hover:bg-zinc-800 transition-colors border border-zinc-800 bg-blue-500 drop-shadow rounded-full text-zinc-100 font-semibold">
            <span>See my resume now</span>
            <ArrowUpRightFromSquare size={16} />
          </button>
        </Link>

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

      <section className="bg-zinc-900/20 border border-zinc-900 my-12 rounded-lg drop-shadow-xl">
        <div className="bg-gradient-to-r from-zinc-900 to-blue-500 text-transparent w-full h-2 rounded-tl-lg rounded-tr-lg"></div>

        <div className="flex justify-between space-x-8 p-8">
          <div className="flex-1 space-y-4">
            <h2 className="font-bold text-2xl">About me...</h2>
            <p className="text-zinc-300">
              Software developer with 3 years of experience in web development, 
              showcasing strong skills in PHP, HTML, CSS, JavaScript, JQuery, 
              TypeScript, and React for the frontend. 
              In the backend, I have developed expertise in Node.js 
              with Fastify and Express to create REST APIs, as 
              well as managing relational databases using 
              ORM{`'`}s such as Prisma and SQL DBMS. 
            </p>

            <p className="text-zinc-300">
              In the mobile arena, I have accumulated 1 year of experience, 
              emphasizing the use of Kotlin for native Android development 
              and React Native for cross-platform app creation. <br />
            </p>

            <p className="text-zinc-300">
              Recognized for problem-solving abilities and the capability 
              to craft efficient solutions, my passion in the field propels a 
              continual pursuit of new knowledge and experimentation with 
              innovative technologies.  
            </p>
          </div>
          <div className="bg-zinc-700 border drop-shadow-2xl border-zinc-800 w-72 h-96 rounded-lg profile-img"></div>
        </div>
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
