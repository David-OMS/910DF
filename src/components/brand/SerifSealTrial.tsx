type SerifSealTrialProps = {
  /** svg = plate in SVG fill; css = frosted plate via backdrop-blur (+ SVG type for edge snap) */
  mode: "svg" | "css";
  /** 1 = solid 910; ~0.45 = translucent 910 */
  numeralOpacity?: number;
  size?: "masthead" | "compact" | "footer" | "header";
};

const BOX: Record<"masthead" | "compact" | "footer" | "header", string> = {
  masthead: "h-[6.75rem] w-[5.0625rem] md:h-[7.5rem] md:w-[5.625rem]",
  footer: "h-[5.5rem] w-[4.125rem] md:h-28 md:w-[5.25rem]",
  compact: "h-9 w-16 md:h-11 md:w-[4.875rem]",
  header: "h-[6.75rem] w-[5.0625rem] md:h-[7.5rem] md:w-[5.625rem]",
};

function SealGlyphs({ numeralOpacity }: { numeralOpacity: number }) {
  return (
    <svg
      viewBox="0 0 100 133"
      className="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 910 stretched to ~92% width — real edge snap, not model padding */}
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fill="#fff"
        opacity={numeralOpacity}
        fontSize="44"
        fontFamily="var(--font-newsreader), Georgia, serif"
        textLength="92"
        lengthAdjust="spacingAndGlyphs"
      >
        910
      </text>
      <text
        x="50"
        y="86"
        textAnchor="middle"
        fill="#fff"
        fontSize="5.2"
        fontFamily="var(--font-montserrat), system-ui, sans-serif"
        fontWeight="600"
        letterSpacing="0.14em"
      >
        DEVELOPMENT
      </text>
      <text
        x="50"
        y="96"
        textAnchor="middle"
        fill="#fff"
        fontSize="5.2"
        fontFamily="var(--font-montserrat), system-ui, sans-serif"
        fontWeight="600"
        letterSpacing="0.14em"
      >
        FOUNDATION
      </text>
    </svg>
  );
}

/**
 * Local trial: Newsreader 910 + Montserrat wordmark.
 * Compare SVG plate vs CSS frosted plate; both use SVG type for edge hug.
 */
export function SerifSealTrial({
  mode,
  numeralOpacity = 1,
  size = "masthead",
}: SerifSealTrialProps) {
  const box = BOX[size];

  if (size === "compact") {
    return (
      <span
        className={`relative inline-flex ${box} items-center justify-center overflow-hidden rounded-sm bg-black/50 text-white backdrop-blur-sm`}
        aria-hidden
      >
        <span
          className="font-display text-[1.35rem] leading-none md:text-[1.55rem]"
          style={{ opacity: numeralOpacity }}
        >
          910
          <span className="font-montserrat text-[0.65em] tracking-tight">DF</span>
        </span>
      </span>
    );
  }

  if (mode === "css") {
    return (
      <span
        className={`relative inline-block ${box} overflow-hidden rounded-sm bg-black/45 shadow-sm backdrop-blur-md`}
        aria-hidden
      >
        <SealGlyphs numeralOpacity={numeralOpacity} />
      </span>
    );
  }

  return (
    <span className={`relative inline-block ${box}`} aria-hidden>
      <svg
        viewBox="0 0 100 133"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0"
          y="0"
          width="100"
          height="133"
          rx="2"
          fill="rgb(11 11 11 / 0.5)"
        />
        <text
          x="50"
          y="58"
          textAnchor="middle"
          fill="#fff"
          opacity={numeralOpacity}
          fontSize="44"
          fontFamily="var(--font-newsreader), Georgia, serif"
          textLength="92"
          lengthAdjust="spacingAndGlyphs"
        >
          910
        </text>
        <text
          x="50"
          y="86"
          textAnchor="middle"
          fill="#fff"
          fontSize="5.2"
          fontFamily="var(--font-montserrat), system-ui, sans-serif"
          fontWeight="600"
          letterSpacing="0.14em"
        >
          DEVELOPMENT
        </text>
        <text
          x="50"
          y="96"
          textAnchor="middle"
          fill="#fff"
          fontSize="5.2"
          fontFamily="var(--font-montserrat), system-ui, sans-serif"
          fontWeight="600"
          letterSpacing="0.14em"
        >
          FOUNDATION
        </text>
      </svg>
    </span>
  );
}
