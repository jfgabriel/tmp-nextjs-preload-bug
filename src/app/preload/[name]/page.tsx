import Component from "@/app/component";
import Image from "next/image";
import { Suspense } from "react";

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
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={100}
        height={24}
        priority
      />
      {/* THIS IS THE OFFENDING CODE: REMOVE <SUSPENSE> AND NEXT.JS WILL DROP 'preload' TAGS */}
      <Suspense>
        <Component />
      </Suspense>
      {/* /////////////// */}
      <hr></hr>
      <h3>Run this script in the console:</h3>
      <code>
        {
          "Array.from(document.querySelectorAll('[rel=\"preload\"]')).map(l => l.href)"
        }
      </code>
      <hr></hr>
      <h3>Built at {Date.now()}</h3>
    </main>
  );
}
