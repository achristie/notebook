import Frame from "@/components/Frame";

export default function Page({ params }: { params: { id: string } }) {
  return <Frame name={params.id} />;
}
