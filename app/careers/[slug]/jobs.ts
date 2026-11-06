export type JobContent = {
  title: string;
  paragraphs: readonly string[];
  responsibilities: readonly string[];
  requirements: readonly string[];
  offer: readonly string[];
};

const foundation =
  "This is a chance to build the foundation a business can offer as its own on-chain vault product, and to leave room for the yield platform that comes later.";

export const jobs: Record<string, JobContent> = {
  "smart-contract-development": {
    title: "Smart contract development",
    paragraphs: [
      "As a smart contract developer at PineryZ, you will help design the vault contracts behind VaultOS. The work is the contracts themselves, and also how a business launches a vault under its own name and symbol.",
      "You will design secure, clear, and reusable Solidity for an ERC-4626 vault on an EVM network. That covers the vault pattern, the asset it accepts, and the check that runs before a vault is registered in the console.",
      foundation,
    ],
    responsibilities: [
      "Shape the ERC-4626 vault and the ERC-20 asset it uses, so the same pattern can be launched again under a business’s own name and symbol.",
      "Keep the contracts careful from design through review.",
      "Connect contract creation to the console, which verifies the creation transaction before a vault is registered.",
      "Write the tests and scripts that exercise the vault.",
      "Work with the engineers building the registry and the product around the vault.",
    ],
    requirements: [
      "Experience with Solidity and EVM smart contracts.",
      "Familiarity with ERC-20 and ERC-4626.",
      "Ability to explain a design clearly, in writing and in review.",
      "Comfort reading an existing codebase and extending the same pattern.",
      "Care for testing, and for saying what a demonstration does not yet do.",
    ],
    offer: [
      "Work on VaultOS, PineryZ’s on-chain vault foundation.",
      "A role focused on the vault a business can offer under its own name.",
      "Collaboration with the people building the console and the product around it.",
    ],
  },
  "backend-development": {
    title: "Backend development",
    paragraphs: [
      "As a backend developer at PineryZ, you will help build the registry and APIs behind VaultOS. The work is how a vault is recorded after its creation transaction is checked, and how that record stays available to the console.",
      "You will design clear Node.js and TypeScript services, with PostgreSQL for the vault metadata and a read of the chain for verification. That covers the path from a creation transaction to a vault the console can show.",
      foundation,
    ],
    responsibilities: [
      "Shape the registry that stores vault metadata in PostgreSQL, including the business’s own name and symbol.",
      "Verify the creation transaction before a vault is registered in the console.",
      "Keep the APIs careful from design through review.",
      "Write the tests that exercise registration and verification.",
      "Work with the engineers building the contracts and the product around the vault.",
    ],
    requirements: [
      "Experience with Node.js and TypeScript.",
      "Familiarity with PostgreSQL and HTTP APIs.",
      "Ability to explain a design clearly, in writing and in review.",
      "Comfort reading an existing codebase and extending the same pattern.",
      "Care for testing, and for saying what a demonstration does not yet do.",
    ],
    offer: [
      "Work on VaultOS, PineryZ’s on-chain vault foundation.",
      "A role focused on the registry a business relies on when it offers a vault under its own name.",
      "Collaboration with the people building the contracts and the console.",
    ],
  },
  "frontend-development": {
    title: "Frontend development",
    paragraphs: [
      "As a frontend developer at PineryZ, you will help build the console around VaultOS. The work is the interface a business uses to launch a vault under its own name and symbol, and to see that vault after it is registered.",
      "You will design clear React and Next.js screens in TypeScript. That covers the creation flow, the vault list, and the check the console shows before a vault is registered. Web3 integration is part of the work. The console does not connect a wallet yet.",
      foundation,
    ],
    responsibilities: [
      "Shape the console a business uses to create a vault and review it after registration.",
      "Present the vault under the business’s own name and symbol.",
      "Show the creation-transaction check before a vault is registered.",
      "Keep the interface careful from design through review.",
      "Work with the engineers building the registry and the contracts.",
    ],
    requirements: [
      "Experience with React, Next.js, and TypeScript.",
      "Familiarity with product screens for creating and reviewing a vault.",
      "Interest in Web3 integration, including wallet connection, which the console does not do yet.",
      "Ability to explain a design clearly, in writing and in review.",
      "Comfort reading an existing codebase and extending the same pattern.",
    ],
    offer: [
      "Work on VaultOS, PineryZ’s on-chain vault foundation.",
      "A role focused on the console a business uses to offer a vault under its own name.",
      "Collaboration with the people building the contracts and the registry.",
    ],
  },
  "ui-ux-design": {
    title: "UI/UX design",
    paragraphs: [
      "As a product designer at PineryZ, you will help shape the interfaces around VaultOS. The work is how a business launches a vault under its own name and symbol, and how that vault is understood in the console.",
      "You will design clear flows for creating a vault, reviewing the creation check, and reading the vault after it is registered. The same care applies to the screens that present the vault under the business’s own brand.",
      foundation,
    ],
    responsibilities: [
      "Shape the creation flow, so a business can launch a vault under its own name and symbol.",
      "Design the console views that show the creation check and the registered vault.",
      "Keep the interface clear from the first sketch through review.",
      "Work in Figma, and write the decisions down so the same pattern can be built again.",
      "Work with the engineers building the console and the product around the vault.",
    ],
    requirements: [
      "Experience with product design for software interfaces.",
      "Familiarity with Figma.",
      "Ability to explain a flow clearly, in writing and in review.",
      "Comfort designing inside an existing product and extending the same pattern.",
      "Care for what a screen promises, and for saying what a demonstration does not yet do.",
    ],
    offer: [
      "Work on VaultOS, PineryZ’s on-chain vault foundation.",
      "A role focused on the interface a business uses to offer a vault under its own name.",
      "Collaboration with the people building the console and the contracts.",
    ],
  },
};

export function getJob(slug: string) {
  return jobs[slug];
}
