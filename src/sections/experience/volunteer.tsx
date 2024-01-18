import ExperienceCard from "./components/experience-card"
import text from "./text.json"

export default function Volunteer() {
  return (
    <div className='lg:w-1/2 lg:pr-3'>
      <p className='text-xl font-bold mb-3'>{text.volunteer.title}</p>
      {text.volunteer.volunteerList.map((volunteer, index) => (
        <ExperienceCard key={index} {...volunteer} />
      ))}
    </div>
  )
}
