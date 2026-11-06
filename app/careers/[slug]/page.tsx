import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getRole, roles } from "../roles";
import { JobPage } from "./JobPage";
import { getJob } from "./jobs";

type RolePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return roles.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({ params }: RolePageProps): Promise<Metadata> {
  const { slug } = await params;
  const role = getRole(slug);

  if (!role) {
    return { title: "Role" };
  }

  return {
    title: role.title,
    description: role.summary,
  };
}

export default async function RolePage({ params }: RolePageProps) {
  const { slug } = await params;
  const job = getJob(slug);

  if (!job) {
    notFound();
  }

  return <JobPage job={job} />;
}
