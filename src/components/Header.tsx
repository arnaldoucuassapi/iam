import Image from "next/image"
import Link from "next/link"
import { Navigation } from "./Navigation"
import { Logo } from "./Logo"

export function Header() {
  return (
    <header className="flex items-center justify-between py-8">
      <Logo />

      <Navigation.Root>
        <Navigation.Item title="Home" active />
        <Navigation.Item title="About" />
        <Navigation.Item title="Contact" />
        <Navigation.Item title="EN" />
      </Navigation.Root>
    </header>
  )
}