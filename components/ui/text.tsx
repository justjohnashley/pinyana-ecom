import { cn } from "@/lib/utils"

export const Title = ({ children, className }:
    { children: React.ReactNode, className?: string }) => {
    return <h2 className={cn("text-3xl font-bold capitalize tracking-wide mb-5", className)}>{children}</h2>
}

export const SubtTitle = ({ children, className }:
    { children: React.ReactNode, className?: string }) => {
    return <h3 className={cn("text-shop_light_yellow font-semibold capitalize tracking-wide mb-5", className)}>{children}</h3>
}

export const SubText = ({ children, className }:
    { children: React.ReactNode, className?: string }) => {
    return <p className={cn("text-white text-sm", className)}>{children}</p>
}