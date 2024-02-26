export default function Page() {
  return (
    <div className="flex justify-between space-x-16 px-8 py-16">
      
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
  )
}