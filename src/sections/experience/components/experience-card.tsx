interface ExperienceCardProps {
  date: string
  workplace: string
  position: string
  description: string
  technologyUsed: Array<string>
}

export default function ExperienceCard({
  date,
  workplace,
  position,
  description,
  technologyUsed
}: ExperienceCardProps) {
  return (
    <div>
      <p className='text-sm'>{date}</p>
      <p className='text-xl font-bold'>{workplace}</p>
      <p className='font-bold'>{position}</p>
      <p className='truncate'>{description}</p>
      <div className='flex flex-nowrap justify-start gap-3 py-2 pl-1 truncate'>
        {technologyUsed.map((value, index) => (
          <p
            key={index}
            className='bg-dark-gray p-1 rounded-full ring-1 ring-light-gray text-xs'
          >
            {value}
          </p>
        ))}
      </div>
    </div>
  )
}
