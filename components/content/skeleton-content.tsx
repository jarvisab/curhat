import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonLoad() {
  return (
    <div className="flex flex-col space-y-3">
      <div className="space-y-2">
        <Skeleton className="h-8 w-4/5" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
      <Skeleton className="h-64 w-full rounded-xl" />
    </div>
  )
}