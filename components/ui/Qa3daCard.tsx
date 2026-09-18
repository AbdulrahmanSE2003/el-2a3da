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
  badgeLabel = "الموضوع",
  category,
}: Qa3daCardProps) {
  const cardId = id.padStart(2, "0")

  return (
    <div
      className="relative flex min-h-[340px] w-full items-center justify-center p-4"
      style={{ perspective: "1000px" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={id}
          initial={{ rotateY: -90, opacity: 0, scale: 0.95 }}
          animate={{ rotateY: 0, opacity: 1, scale: 1 }}
          exit={{ rotateY: 90, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.32, ease: "easeInOut" }}
          className="qa3da-card"
        >
          {/* Subtle Pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-6 mix-blend-multiply"
            style={{
              backgroundImage: `
                radial-gradient(var(--color-ink) 1px, transparent 1px),
                repeating-linear-gradient(45deg, var(--color-ink) 0, var(--color-ink) 1px, transparent 0, transparent 50%)
              `,
              backgroundSize: "16px 16px, 20px 20px",
            }}
          />

          {/* Inner Border */}
          <div className="pointer-events-none absolute inset-3.5 rounded-sm border-2 border-ink/80" />

          {/* Corner IDs */}
          <span className="card-corner-id top-5 right-5">{cardId}</span>
          <span className="card-corner-id bottom-5 left-5 rotate-180">
            {cardId}
          </span>

          {/* Top Badge */}
          <div className="badge-container">
            <div className="mb-1 text-[10px] tracking-widest text-danger-brand">
              ✦ ❖ ✦
            </div>
            <div className="badge-pill">
              <span className="text-[10px] font-black tracking-wider text-danger-brand uppercase">
                {badgeLabel} {category ? `· ${category}` : ""}
              </span>
            </div>
          </div>

          {/* Main Text */}
          <div className="relative z-10 my-auto py-2">
            <p className="text-xl leading-loose font-extrabold tracking-tight text-ink md:text-[28px]">
              {text}
            </p>
          </div>

          {/* Footer Divider */}
          <div className="relative z-10 mt-6 flex flex-col items-center gap-1">
            <div className="card-divider">
              <span>──</span>
              <span>❖</span>
              <span>──</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
