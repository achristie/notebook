import Frame from "@/components/Frame";
import Nav from "@/components/nav";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

interface UrlQuery extends ParsedUrlQuery {
  id: string;
}

export default function Page() {
  const router = useRouter();
  const { id } = router.query as UrlQuery;
  return (

    <div className="container mx-auto">
      <Nav />
      <div>
        <h1 className="text-red-300 text-4xl font-bold">{id}</h1>
      </div>
      <div>
        <Frame name={id} />
      </div>
    </div>
  );
}
