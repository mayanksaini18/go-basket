// app/page.tsx
"use client";

import Link from "next/link";


import Greeting from "@/components/comp/Greeting";

export default function HomePage() {
  return (
    <div>
      <Link href={"/login"}>
      <Greeting/>
      </Link>
    </div>

  );
}
