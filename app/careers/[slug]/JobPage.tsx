import Link from "next/link";

import { ApplicationForm } from "./ApplicationForm";
import { ApplyLink } from "./ApplyLink";
import type { JobContent } from "./jobs";
import styles from "./job.module.css";

export function JobPage({ job }: { job: JobContent }) {
  return (
    <div className={styles.frame}>
      <article className={styles.page}>
        <p className={styles.back}>
          <Link href="/careers">← Back to jobs</Link>
        </p>
        <p className={styles.brand}>PineryZ</p>
        <div className={styles.titleRow}>
          <h1>{job.title}</h1>
          <ApplyLink />
        </div>
        {job.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        <section aria-labelledby="responsibilities-heading">
          <h2 id="responsibilities-heading">Responsibilities</h2>
          <ul>
            {job.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="requirements-heading">
          <h2 id="requirements-heading">Requirements</h2>
          <ul>
            {job.requirements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="offer-heading">
          <h2 id="offer-heading">What we offer</h2>
          <ul>
            {job.offer.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <ApplicationForm roleTitle={job.title} />
      </article>
    </div>
  );
}
