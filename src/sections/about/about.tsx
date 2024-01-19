import { useContext } from "react"
import { NavigationContext } from "../../navigation-context"
import MySkills from "./my-skills"
import WhoAmI from "./who-am-i"

import text from "./text.json"

export default function About() {
  const { aboutSectionRef } = useContext(NavigationContext)

  return (
    <div className='pt-40' ref={aboutSectionRef}>
      <p className='text-center font-bold text-2xl my-3'>{text.mainTitle}</p>
      <div className='flex flex-wrap gap-5'>
        <WhoAmI />
        <MySkills />
      </div>
    </div>
  )
}
