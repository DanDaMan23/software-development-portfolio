import { useContext } from "react"
import { NavigationContext } from "../../navigation-context"
import Work from "./work"
import text from "./text.json"
import Volunteer from "./volunteer"

export default function Experience() {
  const { experienceSectionRef } = useContext(NavigationContext)

  return (
    <div ref={experienceSectionRef}>
      <p className='text-center font-bold text-2xl my-3'>{text.mainTitle}</p>
      <div className='flex flex-col lg:flex-row'>
        <Work />
        <Volunteer />
      </div>
    </div>
  )
}
