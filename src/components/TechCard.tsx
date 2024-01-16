import Image from "next/image"
import { ImageProps } from "next/dist/shared/lib/get-img-props"

export function TechCard({ ...props }: ImageProps) {
  return (
    <div className="w-[106px] h-[106px] grid place-items-center rounded-md bg-zinc-800 border border-zinc-700">
      <Image 
        {...props}
        className="grayscale" 
        width={40} 
        height={40} 
        src={props.src} 
        alt={props.alt}
      />
    </div>
  )
}