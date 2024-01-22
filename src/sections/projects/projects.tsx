import { useContext } from "react"
import { NavigationContext } from "../../navigation-context"
import ProjectCard from "./project-card"

import text from "./text.json"

export default function Projects() {
  const { projectsSectionRef } = useContext(NavigationContext)

  return (
    <div ref={projectsSectionRef}>
      <p className='text-center font-bold text-2xl my-3'>{text.title}</p>
      <div className='flex flex-col lg:flex-row lg:justify-between gap-3'>
        {text.projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}
