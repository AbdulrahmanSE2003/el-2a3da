import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface Player {
  id: string
  name: string
}

interface PartyStore {
  players: Player[]

  addPlayer: (name: string) => void
  removePlayer: (id: string) => void
  updatePlayer: (id: string, name: string) => void
  clearPlayers: () => void
}

export const usePartyStore = create<PartyStore>()(
  persist(
    (set) => ({
      players: [],

      addPlayer: (name) =>
        set((state) => ({
          players: [
            ...state.players,
            {
              id: crypto.randomUUID(),
              name: name.trim(),
            },
          ],
        })),

      removePlayer: (id) =>
        set((state) => ({
          players: state.players.filter((player) => player.id !== id),
        })),

      updatePlayer: (id, name) =>
        set((state) => ({
          players: state.players.map((player) =>
            player.id === id ? { ...player, name: name.trim() } : player
          ),
        })),

      clearPlayers: () => set({ players: [] }),
    }),
    {
      name: "qa3da-party",
    }
  )
)
