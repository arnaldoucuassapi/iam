
export function Footer() {
  return (
    <footer className="bg-zinc-900/50 py-8 px-16 mt-16 shadow-xl">
      <p 
        className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-white text-transparent bg-clip-text"
      >
        Nice to see you here!
      </p>

      <div className="text-zinc-300 text-sm">
        <p>arnaldoucuassapi@gmail.com</p>
        <p>This website is best viewed on desktop</p>
        <div className="flex items-center justify-between">
          <p>Made with satisfaction © 2024 Arnaldo Ucuassapi</p>
          <p className="flex items-center space-x-6">
            <a href="mailto:arnaldoucuassapi@gmail.com" target="_blank">Email↗</a>
            <a href="https://github.com/arnaldoucuassapi/" target="_blank">Github↗</a>
            <a href="https://www.linkedin.com/in/arnaldo-ucuassapi-740252247" target="_blank">LinkedIn↗</a>
          </p>
        </div>
      </div>
    </footer>
  );
}