import { ReactNode, RefObject, createContext, useRef } from "react"

interface INavigationContext {
  aboutSectionRef: RefObject<HTMLDivElement> | null
  experienceSectionRef: RefObject<HTMLDivElement> | null
  projectsSectionRef: RefObject<HTMLDivElement> | null
  educationSectionRef: RefObject<HTMLDivElement> | null
  contactSectionRef: RefObject<HTMLDivElement> | null
  scrollToDiv: (sectionRef: RefObject<HTMLDivElement>) => void
}

export const NavigationContext = createContext<INavigationContext>({
  aboutSectionRef: null,
  experienceSectionRef: null,
  projectsSectionRef: null,
  educationSectionRef: null,
  contactSectionRef: null,
  scrollToDiv: () => {}
})

export default function NavigaitonContextProvider({
  children
}: {
  children: ReactNode
}) {
  const scrollToDiv = (sectionRef: RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      const scrollTo =
        sectionRef.current.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        160

      window.scrollTo({ behavior: "smooth", top: scrollTo })
    }
  }

  const aboutSectionRef = useRef<HTMLDivElement>(null)
  const experienceSectionRef = useRef<HTMLDivElement>(null)
  const projectsSectionRef = useRef<HTMLDivElement>(null)
  const educationSectionRef = useRef<HTMLDivElement>(null)
  const contactSectionRef = useRef<HTMLDivElement>(null)

  const contextValue: INavigationContext = {
    aboutSectionRef,
    experienceSectionRef,
    projectsSectionRef,
    educationSectionRef,
    contactSectionRef,
    scrollToDiv
  }

  return (
    <NavigationContext.Provider value={contextValue}>
      {children}
    </NavigationContext.Provider>
  )
}
