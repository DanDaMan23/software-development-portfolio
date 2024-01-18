import ExperienceCard from "./components/experience-card"

import text from "./text.json"

export default function Work() {
  return (
    <div className='lg:w-1/2 lg:pr-3'>
      <p className='text-xl font-bold mb-3'>{text.work.title}</p>
      {text.work.workList.map((work, index) => (
        <ExperienceCard key={index} {...work} />
      ))}
    </div>
  )
}
