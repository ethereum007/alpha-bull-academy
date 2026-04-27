"use client";

import { AlertTriangle } from "lucide-react";

export const Disclaimer = () => {
  return (
    <div className="bg-muted/50 border-t border-border py-3">
      <div className="container mx-auto px-4">
        <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-2">
          <AlertTriangle className="w-3 h-3" />
          <span>Disclaimer: We do not provide investment advice or guarantees.</span>
        </p>
      </div>
    </div>
  );
};