import Image from "next/image";
interface CardProps {
  title: string;
  blurb: string;
}
export default function Card({ title, blurb }: CardProps) {
  return (
    <div className="h-64 p-4 relative rounded-md shadow-md border border-stone-300">
      <Image
        style={{ objectFit: "cover" }}
        src={`/${title}.png`}
        alt={title}
        fill
      />
      <h3>{title}</h3>
      <span>{blurb}</span>
    </div>
  );
}
