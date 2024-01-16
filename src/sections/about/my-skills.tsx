export default function MySkills() {
  const skillSets = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL"
  ]

  return (
    <div className='md:flex-1'>
      <p className='text-xl font-bold mb-3'>My Skills</p>
      <div className='flex flex-wrap justify-around gap-6'>
        {skillSets.map((value, index) => (
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
