
import Card from "@/components/Card";
import Overview from "@/components/Overview";
import Nav from "@/components/nav";
import Link from "next/link";

const notebooks = ["eWindow", "MarketData", "ForwardCurves", "bakerhughes"];

export default function Home() {
  return (
    <main className="container mx-auto">
      <Nav />
      <Overview />
      <div className="mt-4">
      <h1 className="text-lg font-bold mb-2">Notebook Gallery</h1>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-3">
        {notebooks.map((nb) => (
          <div key={nb} className="w-full">
            <Link href={`/notebooks/${nb}`} prefetch={false}>
              <Card title={nb} blurb={"temp"} />
            </Link>
          </div>
        ))}
      </div></div>
    </main>
  );
}
