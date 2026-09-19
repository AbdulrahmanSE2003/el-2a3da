import { Button } from "@/components/ui/button"
import Link from "next/link"

const PlayersActions = ({
  clearPlayers,
  href,
}: {
  clearPlayers: () => void
  href: string
}) => {
  return (
    <div className="mt-3 flex flex-col gap-3">
      <Button variant={"destructive"} onClick={clearPlayers}>
        فركش القعدة
      </Button>
      <Button variant={"default"} asChild>
        {/* Continue */}
        <Link href={href}>يلا نلعب</Link>
      </Button>
    </div>
  )
}

export default PlayersActions
