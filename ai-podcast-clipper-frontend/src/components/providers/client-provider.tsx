"use client";

import { type ReactNode } from "react";

interface ClientProviderProps {
  children: ReactNode;
}

export const ClientProvider = ({ children }: ClientProviderProps) => {
  return <>{children}</>;
}; 