import Image from "next/image";
interface CardProps {
  title: string;
  blurb: string;
}
export default function Card({ title, blurb }: CardProps) {
  return (
    <div className="h-64 p-4 relative rounded-md shadow-lg">
      <Image
        style={{ objectFit: "none", objectPosition: "0% 50%" }}
        src={`/${title}.png`}
        // unoptimized={true}
        alt={title}
        fill
        
      />
      <div className="z-10">
      <h3>{title}</h3>
      <span>{blurb}</span>
</div>
    </div>
  );
}
