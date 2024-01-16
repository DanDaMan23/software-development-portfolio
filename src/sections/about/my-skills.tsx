import text from "./text.json"

export default function MySkills() {
  return (
    <div className='md:flex-1'>
      <p className='text-xl font-bold mb-3'>{text.mySkills.title}</p>
      <div className='flex flex-wrap justify-around gap-6'>
        {text.mySkills.skillsSet.map((value, index) => (
          <p
            key={index}
            className='bg-dark-gray p-2 rounded-full ring-1 ring-light-gray'
          >
            {value}
          </p>
        ))}
      </div>
    </div>
  )
}
