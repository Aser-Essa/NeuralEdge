import React from "react";

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-widest bg-primary/20 text-primary-light border border-primary/30 mb-6">
      {children}
    </span>
  );
}
