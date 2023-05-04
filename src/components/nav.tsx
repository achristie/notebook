import Link from "next/link";

export default function Nav() {
  return (
    <ul className="flex flex-row h-24 items-center justify-center gap-x-10 text-xl">
      <li>API Marketplace </li>
      <li>Nav Item</li>
      <li>Nav Item</li>
      <li>Nav Item</li>
      <Link href="/">
        <li className="text-red-500 font-semibold">Python</li>
      </Link>
    </ul>
  );
}
