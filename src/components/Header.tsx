import Image from "next/image"
import Link from "next/link"
import { Navigation } from "./Navigation"
import { Logo } from "./Logo"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

export function Header() {
  return (
    <header className="flex items-center justify-between py-8">
      <Logo />

      <Navigation.Root>
        <Navigation.Item title="Home" active />
        <Navigation.Item title="About" />
        <Navigation.Item title="Contact" />
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="EN" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">EN</SelectItem>
            <SelectItem value="pt">PT</SelectItem>
          </SelectContent>
        </Select>
      </Navigation.Root>
    </header>
  )
}