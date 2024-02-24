import Image from "next/image"
import { ImageProps } from "next/dist/shared/lib/get-img-props"

export function TechCard({ ...props }: ImageProps) {
  return (
    <div className="w-[106px] h-[106px] cursor-pointer grid place-items-center rounded-md bg-zinc-900/60 border border-zinc-800">
      <Image 
        {...props}
        className="grayscale hover:grayscale-0 transition-all" 
        width={40}
        height={40} 
        src={props.src} 
        alt={props.alt}
      />
    </div>
  )
}