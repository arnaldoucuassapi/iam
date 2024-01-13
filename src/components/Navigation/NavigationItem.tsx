import Link from "next/link";
import { Url } from "url";

interface NavigationItemProps { 
  children?: React.ReactNode,
  title: string,
  href?: Url,
  active?: boolean
}

export function NavigationItem({ children, title, href, active }: NavigationItemProps) {
  return (
    <nav className="font-bold text-base flex gap-2">
      <Link href={href ?? "#"}>
        <span className={`${active ? "bg-zinc-900" : ""} hover:bg-zinc-900 px-4 py-3 rounded-sm transition-colors duration-200`}>
          {title || children}
        </span>
      </Link>
    </nav>
  );
}