export default function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="text-fuchsia-800 bg-gray-100 border border-gray-400 px-1 py-0.5 text-sm">
      {children}
    </code>
  );
}
