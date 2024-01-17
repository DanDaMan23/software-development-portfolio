import ExperienceCard from "./components/experience-card"

import text from "./text.json"

export default function Work() {
  return (
    <div>
      <p className='text-xl font-bold mb-3'>{text.work.title}</p>
      {text.work.workList.map((work) => (
        <ExperienceCard {...work} />
      ))}
    </div>
  )
}
