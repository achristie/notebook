import Frame from "@/components/Frame";
import Nav from "@/components/nav";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { motion } from "framer-motion";

interface UrlQuery extends ParsedUrlQuery {
  id: string;
}

export default function Page() {
  const router = useRouter();
  const { id } = router.query as UrlQuery;
  return (
    <div className="container mx-auto">
      <Nav />
      <div className="flex flex-row justify-between mx-6">
        <motion.h1 className="text-red-300 text-4xl font-bold">{id}</motion.h1>
        <div className="flex gap-8 items-center">
          <a href="" rel="nofollow">
            <img
              src="https://warehouse-camo.ingress.cmh1.psfhosted.org/74d996556a82b2f1dd5252d2fd8bead60f9e9d21/68747470733a2f2f636f6c61622e72657365617263682e676f6f676c652e636f6d2f6173736574732f636f6c61622d62616467652e737667"
              alt="Open In Colab"
            />
          </a>
          <div>
            <h3>Download</h3>
          </div>
        </div>
      </div>
      <div>
        <Frame name={id} />
      </div>
    </div>
  );
}
