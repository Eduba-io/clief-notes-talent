export default function DemoWatermark() {
  // Fixed bottom-right badge so stakeholders always know this is a mockup.
  return (
    <div
      aria-label="Demo mockup watermark"
      className="mono pointer-events-none fixed bottom-3 right-3 z-50 select-none border border-warmGray bg-cream/90 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-muted"
    >
      Demo · Mockup
    </div>
  );
}
