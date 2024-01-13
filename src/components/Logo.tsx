import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-4">
      <Image width={40} height={40} src="/logo.svg" alt="Logomarca do Arnaldo Ucuassapi" className="rounded-sm" />
      <h3 className="font-bold text-xl">arnaldoucuassapi</h3>
    </div>
  );
}