"use client";

import { FlatExample } from "@/components/FlatExample";
import { Suspense } from "react";

export default function FlatExamplePage() {
  return (
    <main className="w-screen h-screen">
      <Suspense fallback={null}>
        <FlatExample />
      </Suspense>
    </main>
  );
}
