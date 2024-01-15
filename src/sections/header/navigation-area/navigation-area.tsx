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

  const navigationItems = [
    {
      label: "About",
      onClickEvent: () => {
        toggleNavigationHandler()
      }
    },
    {
      label: "Experience",
      onClickEvent: () => {
        toggleNavigationHandler()
      }
    },
    {
      label: "Projects",
      onClickEvent: () => {
        toggleNavigationHandler()
      }
    },
    {
      label: "Education",
      onClickEvent: () => {
        toggleNavigationHandler()
      }
    },
    {
      label: "Contact",
      onClickEvent: () => {
        toggleNavigationHandler()
      }
    }
  ]

  useEffect(() => {
    setShowNavigation(isOpen)
  }, [isOpen])

  return (
    <div
      className={`flex flex-col border-y border-light-gray ${
        showNavigation ? "block" : "hidden"
      }`}
    >
      {navigationItems.map(({ label, onClickEvent }, index) => (
        <button key={index} onClick={onClickEvent} className='border-b py-3'>
          {label}
        </button>
      ))}
    </div>
  )
}
