import Link from "next/link";
import { Url } from "url";

interface NavigationItemProps { 
  children?: React.ReactNode,
  title: string,
  href?: string,
  active?: boolean
}

export function NavigationItem({ children, title, href, active }: NavigationItemProps) {
  return (
    <div className="font-medium text-base flex gap-2 shadow">
      <Link href={href ?? "#"}>
        <span className={`${active ? "text-blue-400" : "hover:text-zinc-500"}  px-2 py-2.5 rounded-sm transition-colors duration-200`}>
          {title || children}
        </span>
      </Link>
    </div>
  );
}