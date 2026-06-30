import type { FC } from "react";

type JsonLdProps = {
  /** A single schema.org object or an array of them. */
  data: Record<string, unknown> | Record<string, unknown>[];
};

/**
 * Server-rendered JSON-LD structured data block.
 * Mirrors the inline pattern used in app/layout.tsx.
 */
const JsonLd: FC<JsonLdProps> = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export default JsonLd;
