import Work from "./work"
import text from "./text.json"
import Volunteer from "./volunteer"

export default function Experience() {
  return (
    <div>
      <p className='text-center font-bold text-2xl my-3'>{text.mainTitle}</p>
      <div className='flex flex-col lg:flex-row'>
        <Work />
        <Volunteer />
      </div>
    </div>
  )
}
