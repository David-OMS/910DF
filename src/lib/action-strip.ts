export type ActionStripVariantId = "pills" | "diagonal" | "stepped" | "arc";

export type ActionStripVariant = {
  id: ActionStripVariantId;
  code: "A" | "C" | "D" | "F";
  label: string;
  description: string;
};

export const ACTION_STRIP_STORAGE_KEY = "910df-action-strip";

export const DEFAULT_ACTION_STRIP_ID: ActionStripVariantId = "diagonal";

export const ACTION_STRIP_VARIANTS: ActionStripVariant[] = [
  {
    id: "pills",
    code: "A",
    label: "Pills",
    description: "Soft rounded bubbles with gaps, floating on the hero edge.",
  },
  {
    id: "diagonal",
    code: "C",
    label: "Diagonal band",
    description: "One full-width shelf with an angled top cut.",
  },
  {
    id: "stepped",
    code: "D",
    label: "Stepped blocks",
    description: "Three separate panels at different heights, bottom-aligned.",
  },
  {
    id: "arc",
    code: "F",
    label: "Arc shelf",
    description: "Curved shelf under the hero; actions spaced along the arc.",
  },
];

export function getActionStripVariant(
  id: string,
): ActionStripVariant | undefined {
  return ACTION_STRIP_VARIANTS.find((variant) => variant.id === id);
}
