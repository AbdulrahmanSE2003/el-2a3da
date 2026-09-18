import * as React from "react"
import { cn } from "@/lib/utils"

function Card({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm" }) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "group/card relative flex flex-col justify-between overflow-hidden rounded-sm border-2 border-ink bg-paper-warm text-ink shadow-[5px_5px_0px_0px_var(--color-ink)] transition-all duration-200 [--card-spacing:theme(spacing.6)] data-[size=sm]:[--card-spacing:theme(spacing.4)]",
        className
      )}
      {...props}
    >
      {/* Background Micro Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-ink) 1px, transparent 1px)",
          backgroundSize: "8px 8px",
        }}
      />
      {props.children}
    </div>
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "relative z-10 grid auto-rows-min items-start gap-2 p-(--card-spacing) pb-2 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:border-ink/10",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("text-xl font-black text-ink md:text-2xl", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn(
        "text-xs leading-relaxed font-medium text-ink-soft",
        className
      )}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end border border-copper/30 bg-copper/10 px-2 py-0.5 font-mono text-[9px] font-bold tracking-widest text-copper",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn(
        "relative z-10 px-(--card-spacing) py-2 text-sm leading-relaxed font-medium text-ink",
        className
      )}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "relative z-10 flex items-center justify-between border-t border-ink/10 p-(--card-spacing) pt-3 font-mono text-[10px] font-bold text-ink-soft/40",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
