import MySkills from "./my-skills"
import WhoAmI from "./who-am-i"

import text from "./text.json"

export default function About() {
  return (
    <div className='pt-40'>
      <p className='text-center font-bold text-2xl my-3'>{text.mainTitle}</p>
      <div className='flex flex-wrap gap-5'>
        <WhoAmI />
        <MySkills />
      </div>
    </div>
  )
}
