import Image from "next/image";
interface CardProps {
  title: string;
  name: string;
}
export default function Card({ title, name }: CardProps) {
  return (
    <div className="h-64 rounded-lg shadow-lg flex flex-col">
      <h1 className="text-xl h-8 px-4 font-bold text-indigo-800 bg-gray-100 ">{title}</h1>
      <div className="relative h-56 w-full">
        <Image
          style={{ objectFit: "none", objectPosition: "0% 50%" }}
          src={`/${name}.png`}
          // unoptimized={true}
          alt={title}
          fill
        />
      </div>
    </div>
  );
}
