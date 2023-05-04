import Card from "@/components/Card";
import Overview from "@/components/Overview";
import Link from "next/link";

const notebooks = ["eWindow", "MarketData", "ForwardCurves"];

export default function Home() {
  return (
    <main className="container mx-auto">
      <Overview />
      <h1>Sample Notebooks</h1>
      <div className="columns-3 gap-x-8">
        {notebooks.map((nb) => (
          <div key={nb} className="w-full">
            <Link href={`/notebooks/${nb}`}>
              <Card title={nb} blurb={"temp"} />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
