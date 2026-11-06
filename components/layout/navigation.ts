export type NavLink = {
  href: string;
  label: string;
  external?: boolean;
};

export type NavItem =
  | (NavLink & { children?: undefined })
  | {
      label: string;
      children: readonly NavLink[];
    };

export const docsHref = "https://docs.pineryz.com";

export const primaryNav: readonly NavItem[] = [
  { href: "/", label: "Home" },
  {
    label: "Company",
    children: [
      { href: "/about", label: "About Us" },
      { href: docsHref, label: "Docs", external: true },
    ],
  },
  { href: "/vaultos", label: "VaultOS" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export const consoleHref = "https://demo.pineryz.com";

export function isNavGroup(
  item: NavItem,
): item is Extract<NavItem, { children: readonly NavLink[] }> {
  return "children" in item && Array.isArray(item.children);
}
