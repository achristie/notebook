import Image from "next/image";
import IconOpenOutline from "./IconOpenOutline";

interface CardProps {
  title: string;
  name: string;
}
export default function Card({ title, name }: CardProps) {
  return (
    <div className="h-72 rounded-lg shadow-lg flex flex-col align-middle transform transition duration-500 hover:scale-110">
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          style={{ objectFit: "cover", objectPosition: "0% 50%", transform: "scale(2.25)", transformOrigin: "0 0" }}
          src={`/${name}.png`}
          unoptimized
          alt={title}
          fill
          className="rounded-t-lg"
        />
      </div>
      <div className="text-md px-8 h-12 font-semibold flex items-center text-sky-700">
        <p className="flex-grow">{title}</p>
        <p
          // href={`/notebooks/${name}`}
          // target="_blank"
          className="hover:text-red-600 hover:font-bold"
        >
          <IconOpenOutline />
        </p>
      </div>
    </div>
  );
}
