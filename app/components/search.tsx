import { Input } from "~/components/ui/input"
import { cn } from "~/lib/utils"

export function Search({
  className,
  ...props

}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div>
      <Input
        type="search"
        placeholder="Search..."
        className={cn("md:w-[200px] lg:w-[300px] dark:",className)}
      />
    </div>
  )
}