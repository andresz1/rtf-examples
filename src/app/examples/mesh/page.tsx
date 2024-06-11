"use client";

import { MeshExample } from "@/components/MeshExample";
import { Suspense } from "react";

export default function MeshExamplePage() {
  return (
    <main className="w-screen h-screen">
      <Suspense fallback={null}>
        <MeshExample />
      </Suspense>
    </main>
  );
}
