// components/QadaCard.tsx
"use client"

import { motion, AnimatePresence } from "framer-motion"

export interface Qa3daCardProps {
  id: string
  text: string
  badgeLabel?: string
  category?: string
}

export default function Qa3daCard({
  id,
  text,
  badgeLabel = "TOPIC",
  category,
}: Qa3daCardProps) {
  return (
    <div
      className="relative flex min-h-[280px] w-full items-center justify-center"
      style={{ perspective: "1000px" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={id}
          initial={{ rotateY: -90, opacity: 0, scale: 0.95 }}
          animate={{ rotateY: 0, opacity: 1, scale: 1 }}
          exit={{ rotateY: 90, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.28, ease: "easeInOut" }}
          className="relative flex w-full flex-col items-center justify-between overflow-hidden rounded-sm border-2 border-ink bg-paper-warm p-6 text-center shadow-[6px_6px_0px_0px_var(--color-ink)] md:p-8"
        >
          {/* Subtle Watermark Pattern Inside Card */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(var(--color-ink) 1px, transparent 1px)",
              backgroundSize: "12px 12px",
            }}
          />

          {/* Top Badge */}
          <div className="mb-4 flex items-center gap-2 border-b border-copper/30 pb-2">
            <span className="font-mono text-xs font-bold tracking-widest text-copper uppercase">
              {badgeLabel} &middot; {id}
            </span>
            {category && (
              <span className="font-sans text-xs font-semibold text-ink-soft/80">
                ({category})
              </span>
            )}
          </div>

          {/* Card Main Text */}
          <p className="my-auto py-2 text-2xl leading-relaxed font-black text-ink-glow md:text-3xl">
            " <span className="text-ink">{text}</span> "
          </p>

          {/* Card Footer Identifier */}
          <span className="mt-4 font-mono text-[10px] text-ink-soft/40 uppercase">
            القعدة — EL-Qa3DA
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
