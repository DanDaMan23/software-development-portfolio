import { useContext } from "react"
import { NavigationContext } from "../../navigation-context"

import text from "./text.json"
import EducationCard from "./education-card"

export default function Education() {
  const { educationSectionRef } = useContext(NavigationContext)

  return (
    <div ref={educationSectionRef}>
      <p className='text-center font-bold text-2xl my-3'>{text.mainTitle}</p>
      {text.educationList.map((education, index) => (
        <EducationCard key={index} {...education} />
      ))}
    </div>
  )
}
