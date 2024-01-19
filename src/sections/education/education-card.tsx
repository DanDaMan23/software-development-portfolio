interface EducationCardProps {
  date: string
  institution: string
  program: string
}

export default function EducationCard({
  date,
  institution,
  program
}: EducationCardProps) {
  return (
    <div className='my-4'>
      <p className='text-sm'>{date}</p>
      <p className='text-xl font-bold'>{institution}</p>
      <p className='font-bold'>{program}</p>
      {/* TODO: Think about putting technologies touched */}
      {/* TODO: Consider putting modal and explain things I did */}
    </div>
  )
}
