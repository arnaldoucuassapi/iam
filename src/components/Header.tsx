import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="flex items-center justify-between py-8">
      <div className="flex items-center gap-4">
        <Image width={40} height={40} src="/logo.svg" alt="Logomarca do Arnaldo Ucuassapi" className="rounded-sm" />
        <h3 className="font-bold text-xl">arnaldoucuassapi</h3>
      </div>

      <nav className="font-bold text-base flex gap-4">
        <Link href="#"><span className="hover:bg-zinc-900 px-4 py-2 rounded-sm transition-colors duration-200">Home</span></Link>
        <Link href="#"><span>Sobre</span></Link>
        <Link href="#"><span>Contato</span></Link>
        <Link href="#"><span>EN</span></Link>
      </nav>
    </header>
  )
}