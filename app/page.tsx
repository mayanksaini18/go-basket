// app/page.tsx
"use client";

import Link from "next/link";


import Greeting from "@/components/comp/greeting";

export default function HomePage() {
  return (
    <div>
      <Link href={"/home"}>
      <Greeting/>
      </Link>
    </div>

  );
}
