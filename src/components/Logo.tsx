import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center gap-4">
        <Image width={40} height={40} src="/logo.svg" alt="Logomarca do Arnaldo Ucuassapi" className="rounded-sm" />
        <h3 className="font-medium text-xl">arnaldoucuassapi</h3>
      </div>
    </Link>
  );
}