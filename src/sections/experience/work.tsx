import ExperienceCard from "./components/experience-card"

export default function Work() {
  return (
    <div>
      <p className='text-xl font-bold mb-3'>Work</p>
      <ExperienceCard
        date='October 2021 - June 2023'
        workplace='Cambrian Credit Union'
        position='Programmer 1'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
      quod ipsam molestias itaque voluptatibus quo. Rerum assumenda
      explicabo consequatur nobis, facere sint dolore laborum consectetur
      obcaecati repellat, quae unde distinctio.'
        technologyUsed={[
          "JavaScript",
          "React",
          "Redux",
          "C#",
          ".NET Core",
          "WBDK",
          "SQL"
        ]}
      />
    </div>
  )
}
