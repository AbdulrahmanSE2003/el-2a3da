export default function GridPattern() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.06]"
      style={{
        backgroundImage:
          "radial-gradient(var(--color-ink) 1.5px, transparent 1.5px)",
        backgroundSize: "18px 18px",
      }}
    />
  )
}
