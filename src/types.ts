import type { LucideIcon } from "lucide-react";

export type Skill = {
  title: string;
  description: string;
  tools: string[];
  icon: LucideIcon;
};

export type Project = {
  title: string;
  type: string;
  description: string;
  problem: string;
  method: string;
  result: string;
  role: string;
  impact?: string;
  tags: string[];
};

export type LabPanel = {
  id: string;
  title: string;
  question: string;
  signal: string;
  color: string;
};

export type Note = {
  title: string;
  meta: string;
  excerpt: string;
};
