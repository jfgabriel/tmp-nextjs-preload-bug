import Image from "next/image";

// Converts to static page
export async function generateStaticParams() {
  return [{ name: "alex" }, { name: "juan" }];
}

export default function Page({
  params: { name },
}: {
  params: { name: string };
}) {
  return (
    <main>
      <h1>Hello {name}</h1>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={100}
        height={24}
        priority
      />
      <hr></hr>
      <h3>Built at {Date.now()}</h3>
    </main>
  );
}
