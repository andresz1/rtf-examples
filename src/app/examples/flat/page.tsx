"use client";

import { FlatExample } from "@/components/FlatExample";
import { Suspense, useEffect, useState } from "react";

export default function FlatExamplePage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main className="w-screen h-screen">
      <Suspense fallback={null}>{isMounted && <FlatExample />}</Suspense>
    </main>
  );
}
