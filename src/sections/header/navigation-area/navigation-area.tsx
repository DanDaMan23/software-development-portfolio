import { RefObject, useContext, useEffect, useState } from "react"
import { NavigationContext } from "../../../navigation-context"

interface NavigationAreaProps {
  isOpen: boolean
  toggleNavigationHandler: () => void
}

export default function NavigationArea({
  isOpen,
  toggleNavigationHandler
}: NavigationAreaProps) {
  const [showNavigation, setShowNavigation] = useState(false)

  const {
    aboutSectionRef,
    experienceSectionRef,
    projectsSectionRef,
    scrollToDiv
  } = useContext(NavigationContext)

  const navigationItems = [
    {
      label: "About",
      onClickEvent: () => {
        toggleNavigationHandler()
        scrollToDiv(aboutSectionRef as RefObject<HTMLDivElement>)
      }
    },
    {
      label: "Experience",
      onClickEvent: () => {
        toggleNavigationHandler()
        scrollToDiv(experienceSectionRef as RefObject<HTMLDivElement>)
      }
    },
    {
      label: "Projects",
      onClickEvent: () => {
        toggleNavigationHandler()
        scrollToDiv(projectsSectionRef as RefObject<HTMLDivElement>)
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
      className={`flex flex-col border-y border-light-gray bg-dark-gray text-light-gray ${
        showNavigation ? "block" : "hidden"
      }`}
    >
      {navigationItems.map(({ label, onClickEvent }, index) => (
        <button
          key={index}
          onClick={onClickEvent}
          className='border-b py-3 font-bold'
        >
          {label}
        </button>
      ))}
    </div>
  )
}
