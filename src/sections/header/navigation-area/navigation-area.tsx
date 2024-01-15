import { useEffect, useState } from "react"

interface NavigationAreaProps {
  isOpen: boolean
  toggleNavigationHandler: () => void
}

export default function NavigationArea({
  isOpen,
  toggleNavigationHandler
}: NavigationAreaProps) {
  const [showNavigation, setShowNavigation] = useState(false)

  useEffect(() => {
    setShowNavigation(isOpen)
  }, [isOpen])

  return (
    <div
      className={`flex flex-col gap-3 py-3 border-y border-light-gray ${
        showNavigation ? "block" : "hidden"
      }`}
    >
      <button onClick={toggleNavigationHandler}>About</button>
      <button onClick={toggleNavigationHandler}>Experience</button>
    </div>
  )
}
