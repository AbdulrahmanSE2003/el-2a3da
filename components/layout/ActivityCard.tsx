import Link from "next/link"
import { ArrowUpLeft, type LucideIcon } from "lucide-react"

export interface ActivityCardItem {
  number: string
  href: string
  icon: LucideIcon
  stamp: string
  title: string
  description: string
}

export interface ActivityCardProps {
  item: ActivityCardItem
  className?: string
  showWatermark?: boolean
}

export function ActivityCard({
  item,
  className = "",
  showWatermark = false,
}: ActivityCardProps) {
  const Icon = item.icon

  return (
    <Link href={item.href} className={`group card-brutal ${className}`}>
      {showWatermark && <span className="watermark-num">{item.number}</span>}

      <div className="relative flex items-start justify-between">
        <div className="icon-box">
          <Icon className="size-4" strokeWidth={1.8} />
        </div>
        <span className="stamp-text">{item.number}</span>
      </div>

      <div className="relative">
        <span className="stamp-text">{item.stamp}</span>
        <h3 className="mt-1.5 text-xl leading-none font-black tracking-tight">
          {item.title}
        </h3>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-[11px] font-semibold text-ink-soft/65">
            {item.description}
          </p>
          <ArrowUpLeft className="arrow-hover" />
        </div>
      </div>
    </Link>
  )
}
