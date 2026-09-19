"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { usePartyStore } from "@/store/party-store"
import { sheikhQuestions } from "@/contents/sheikh-questions"
import { createContentDeck } from "@/lib/create-content-deck"

export type SheikhPhase = "idle" | "revealed" | "questions"

export function useSheikh() {
  const router = useRouter()
  const players = usePartyStore((state) => state.players)

  const deckRef = useRef(createContentDeck(sheikhQuestions))

  const [phase, setPhase] = useState<SheikhPhase>("idle")
  const [sheikhId, setSheikhId] = useState<string | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(() =>
    deckRef.current.next()
  )

  useEffect(() => {
    if (players.length === 0) {
      router.replace("/players?redirect=/sheikh")
    }
  }, [players.length, router])

  const sheikh = players.find((player) => player.id === sheikhId)

  const chooseSheikh = () => {
    if (players.length === 0) return
    const randomIndex = Math.floor(Math.random() * players.length)
    setSheikhId(players[randomIndex].id)
    setPhase("revealed")
  }

  const startQuestions = () => {
    setCurrentQuestion(deckRef.current.next())
    setPhase("questions")
  }

  const nextQuestion = () => {
    setCurrentQuestion(deckRef.current.next())
  }

  const reset = () => {
    setSheikhId(null)
    deckRef.current.reset()
    setCurrentQuestion(deckRef.current.next())
    setPhase("idle")
  }

  return {
    players,
    sheikh,
    phase,
    currentQuestion,
    chooseSheikh,
    startQuestions,
    nextQuestion,
    reset,
  }
}
