
import Card from "@/components/Card";
import Overview from "@/components/Overview";
import Nav from "@/components/nav";
import Link from "next/link";

const notebooks = [
  {name: "eWindow", display: "EWindow Market Data"},
  {name: "marketdata", display: "Market Data"},
  {name: "forwardCurves", display: "Forward Curves"},
  {name: "bakerhughes", display: "Baker Hughes Oil Rig Count"},
]

export default function Home() {
  return (
    <main className="container mx-auto">
      <Nav />
      <Overview />
      <div className="mt-4">
      <h1 className="text-lg font-bold">Notebook Gallery</h1>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 mb-3"/>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-3">
        {notebooks.map((nb) => (
          <div key={nb.name} className="w-full">
            <Link href={`/notebooks/${nb.name}`} prefetch={false}>
              <Card title={nb.display} name={nb.name}/>
            </Link>
          </div>
        ))}
      </div></div>
    </main>
  );
}
