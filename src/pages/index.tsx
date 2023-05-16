import Card from "@/components/Card";
import Overview from "@/components/Overview";
import Nav from "@/components/nav";
import Link from "next/link";

const notebooks = [
  {
    name: "eWindow",
    display: "EWindow Market Data",
  },
  {
    name: "marketdata",
    display: "Market Data",
  },
  {
    name: "forwardCurves",
    display: "Forward Curves",
  },
  {
    name: "bakerhughes",
    display: "Baker Hughes Oil Rig Count",
  },
  {
    name: "databasing",
    display: "Save to Database",
  },
  {
    name: "eu_electricity",
    display: "EU Electricity",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto">
      <Nav />
      <Overview />
      <div className="mt-4">
        <h1 className="text-lg font-bold">Notebook Gallery</h1>
        <hr className="w-96 h-1 mt-2 mb-6 bg-gray-200 border-0 rounded" />
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-3 xl:grid-cols-4">
          {notebooks.map((nb) => (
            <div key={nb.name} className="w-full">
              <Link href={`/notebooks/${nb.name}`} prefetch={false}>
                <Card title={nb.display} name={nb.name} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
