"use client";

import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
};

export default function SocialButton({ icon, label, onClick }: Props) {
  return (
    <Button
      variant="outline"
      onClick={onClick}
      className="w-full h-12 border-slate-300 hover:bg-slate-50 flex gap-3"
    >
      {icon}
      {label}
    </Button>
  );
}
