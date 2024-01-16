import text from "./text.json"

export default function WhoAmI() {
  return (
    <div className='md:flex-1'>
      <p className='text-xl font-bold mb-3'>{text.whoAmI.title}</p>
      <p>{text.whoAmI.description}</p>
    </div>
  )
}
