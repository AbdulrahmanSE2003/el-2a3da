"use client"

import { motion } from "framer-motion"

export default function BackgroundAtmosphere() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-paper opacity-8 select-none">
      {/* 1. ورقة كوتشينة - أعلى اليمين */}
      <motion.div
        initial={{ rotate: -12, y: 0 }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-8 -right-12 text-ink"
      >
        <svg
          width="140"
          height="200"
          viewBox="0 0 100 140"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect
            x="5"
            y="5"
            width="90"
            height="130"
            rx="8"
            fill="var(--color-paper-warm)"
          />
          <text
            x="25"
            y="30"
            fontSize="20"
            fontWeight="bold"
            fill="currentColor"
          >
            A
          </text>
          <path d="M50 50 L65 75 L50 100 L35 75 Z" fill="var(--color-copper)" />{" "}
          {/* Ace Symbol */}
        </svg>
      </motion.div>

      {/* 2. حجر دومينو - أسفل اليسار */}
      <motion.div
        initial={{ rotate: 25 }}
        animate={{ rotate: [25, 28, 25] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-12 bottom-0 text-ink"
      >
        <svg
          width="120"
          height="240"
          viewBox="0 0 80 150"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect
            x="5"
            y="5"
            width="70"
            height="140"
            rx="6"
            fill="var(--color-paper-warm)"
          />
          <line
            x1="10"
            y1="75"
            x2="70"
            y2="75"
            stroke="currentColor"
            strokeWidth="2"
          />
          {/* النقاط */}
          <circle cx="40" cy="40" r="5" fill="currentColor" />
          <circle cx="25" cy="100" r="5" fill="currentColor" />
          <circle cx="55" cy="120" r="5" fill="currentColor" />
        </svg>
      </motion.div>

      {/* 3. ورقة كوتشينة - أعلى اليمين */}
      <motion.div
        initial={{ rotate: -12, y: 0 }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-6 -left-12 rotate-25 text-ink"
      >
        <svg
          width="140"
          height="200"
          viewBox="0 0 100 140"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect
            x="5"
            y="5"
            width="90"
            height="130"
            rx="8"
            fill="var(--color-paper-warm)"
          />
          <text
            x="25"
            y="30"
            fontSize="20"
            fontWeight="bold"
            fill="currentColor"
          >
            A
          </text>
          <path d="M50 50 L65 75 L50 100 L35 75 Z" fill="var(--color-copper)" />{" "}
          {/* Ace Symbol */}
        </svg>
      </motion.div>

      {/* 3. حجر زهر - أعلى اليسار */}
      <motion.div
        initial={{ rotate: -45 }}
        className="absolute top-20 left-4 rotate-35 text-ink"
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 60 60"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect
            x="5"
            y="5"
            width="50"
            height="50"
            rx="8"
            fill="var(--color-paper-warm)"
          />
          <circle cx="18" cy="18" r="4" fill="currentColor" />
          <circle cx="42" cy="42" r="4" fill="currentColor" />
          <circle cx="30" cy="30" r="4" fill="currentColor" />
        </svg>
      </motion.div>
    </div>
  )
}
