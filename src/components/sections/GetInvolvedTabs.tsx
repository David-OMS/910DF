"use client";

import { useEffect, useId, useState } from "react";

import { DonateSection } from "@/components/sections/DonateSection";
import { PartnerSection } from "@/components/sections/PartnerSection";
import { VolunteerSection } from "@/components/sections/VolunteerSection";
import { getInvolvedPage, type GetInvolvedPathId } from "@/content/get-involved";

const TAB_IDS: readonly GetInvolvedPathId[] = [
  "donate",
  "volunteer",
  "partner",
];

function isTabId(value: string): value is GetInvolvedPathId {
  return (TAB_IDS as readonly string[]).includes(value);
}

function tabFromHash(): GetInvolvedPathId {
  if (typeof window === "undefined") {
    return "donate";
  }

  const hash = window.location.hash.replace(/^#/, "");
  return isTabId(hash) ? hash : "donate";
}

/** Donate / Volunteer / Partner as tabs — one panel visible at a time. */
export function GetInvolvedTabs() {
  const baseId = useId();
  const [active, setActive] = useState<GetInvolvedPathId>("donate");

  useEffect(() => {
    setActive(tabFromHash());

    const onHashChange = () => {
      setActive(tabFromHash());
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  function selectTab(id: GetInvolvedPathId) {
    setActive(id);
    window.history.replaceState(null, "", `#${id}`);
  }

  return (
    <div>
      <div className="border-b border-line bg-white">
        <div
          role="tablist"
          aria-label="Get involved options"
          className="container-site flex flex-wrap gap-x-1 gap-y-2"
        >
          {getInvolvedPage.paths.map((path) => {
            const isSelected = active === path.id;
            const tabId = `${baseId}-tab-${path.id}`;
            const panelId = `${baseId}-panel-${path.id}`;

            return (
              <button
                key={path.id}
                type="button"
                role="tab"
                id={tabId}
                aria-selected={isSelected}
                aria-controls={panelId}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => selectTab(path.id)}
                className={`border-b-2 px-3 py-4 text-sm font-medium transition-colors ${
                  isSelected
                    ? "border-accent text-accent"
                    : "border-transparent text-ink/70 hover:text-ink"
                }`}
              >
                {path.label}
              </button>
            );
          })}
        </div>
      </div>

      {getInvolvedPage.paths.map((path) => {
        const isSelected = active === path.id;
        const tabId = `${baseId}-tab-${path.id}`;
        const panelId = `${baseId}-panel-${path.id}`;

        return (
          <div
            key={path.id}
            role="tabpanel"
            id={panelId}
            aria-labelledby={tabId}
            hidden={!isSelected}
          >
            {isSelected && path.id === "donate" ? <DonateSection /> : null}
            {isSelected && path.id === "volunteer" ? <VolunteerSection /> : null}
            {isSelected && path.id === "partner" ? <PartnerSection /> : null}
          </div>
        );
      })}
    </div>
  );
}
