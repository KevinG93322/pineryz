export const roles = [
  {
    slug: "smart-contract-development",
    title: "Smart contract development",
    summary: "Solidity, EVM, and ERC-4626 vaults",
  },
  {
    slug: "backend-development",
    title: "Backend development",
    summary: "Node.js, TypeScript, APIs, and PostgreSQL",
  },
  {
    slug: "frontend-development",
    title: "Frontend development",
    summary: "React, Next.js, and TypeScript",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX design",
    summary: "Product design and interfaces for vault products",
  },
] as const;

export type Role = (typeof roles)[number];

export function getRole(slug: string) {
  return roles.find((role) => role.slug === slug);
}
