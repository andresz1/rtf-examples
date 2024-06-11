"use client";

import { MaterialExample } from "@/components/MaterialExample";
import { Suspense } from "react";

export default function LightExamplePage() {
  return (
    <main className="w-screen h-screen">
      <Suspense fallback={null}>
        <MaterialExample />
      </Suspense>
    </main>
  );
}
