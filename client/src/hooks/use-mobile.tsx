import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${MOBILE_BREAKPOINT}px)`)
    const update = () => {
      setIsMobile(!mql.matches)
    }

    update()
    mql.addEventListener("change", update)
    window.addEventListener("resize", update)

    return () => {
      mql.removeEventListener("change", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  return !!isMobile
}