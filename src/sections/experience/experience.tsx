import Work from "./work"
import text from "./text.json"

export default function Experience() {
  return (
    <div>
      <p className='text-center font-bold text-2xl my-3'>{text.mainTitle}</p>
      <Work />
    </div>
  )
}
