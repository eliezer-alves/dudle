import { ReactNode } from "react"

type BodyProps = {
  children?: ReactNode;
}
export function Body({ children }: BodyProps) {
  return (
    <div className="py-24 px-64 flex flex-col gap-24">
      {children}
    </div>
  )
}