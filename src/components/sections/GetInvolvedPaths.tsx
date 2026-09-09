import { getInvolvedPage } from "@/content/get-involved";

/** Jump links under the Get involved hero — page lands here, not on Donate. */
export function GetInvolvedPaths() {
  return (
    <nav
      aria-label="Get involved options"
      className="border-b border-line bg-white"
    >
      <div className="container-site flex flex-wrap gap-x-8 gap-y-3 py-5">
        {getInvolvedPage.paths.map((path) => (
          <a
            key={path.href}
            href={path.href}
            className="text-sm font-medium text-ink underline-offset-4 hover:text-accent hover:underline"
          >
            {path.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
