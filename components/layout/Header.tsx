import { ArrowRight } from "lucide-react"
import Link from "next/link"

const Header = ({ stamp }: { stamp: string }) => {
  return (
    <header className="relative z-10 w-full max-w-md">
      <div className="flex items-center justify-between border-b border-ink/10 pb-3">
        <Link
          href="/"
          className="group flex items-center gap-1.5 font-mono text-xs font-bold text-ink-soft transition-colors hover:text-copper"
        >
          <ArrowRight className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
          <span>الرئيسية</span>
        </Link>

        <span className="border border-copper/30 bg-copper/10 px-2.5 py-1 font-mono text-[10px] font-bold tracking-widest text-copper">
          {stamp}
        </span>
      </div>
    </header>
  )
}

export default Header
