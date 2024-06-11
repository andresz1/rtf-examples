"use client";

import { LightExample } from "@/components/LightExample";
import { Suspense } from "react";

export default function LightExamplePage() {
  return (
    <main className="w-screen h-screen">
      <Suspense fallback={null}>
        <LightExample />
      </Suspense>
    </main>
  );
}
