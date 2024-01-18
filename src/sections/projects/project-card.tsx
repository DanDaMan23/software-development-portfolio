import { useState } from "react"
import {
  faArrowUpRightFromSquare,
  faLink
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Modal from "../../components/modal/modal"

interface ProjectCardProps {
  name: string
  imagePath: string
  techStack: Array<string>
  sourceCodeLink?: string
  liveLink?: string
}

export default function ProjectCard({
  name,
  imagePath,
  techStack,
  sourceCodeLink,
  liveLink
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModalHandler = () => setIsModalOpen(true)

  const closeModalHandler = () => setIsModalOpen(false)

  return (
    <div>
      <button className='text-xl font-bold my-3' onClick={openModalHandler}>
        {name} <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </button>
      <img src={imagePath} alt={name} className='rounded-md my-3' />
      <div className='flex flex-nowrap justify-start gap-3 py-2 pl-1 truncate'>
        {techStack.map((value, index) => (
          <p
            key={index}
            className='bg-dark-gray p-1 rounded-full ring-1 ring-light-gray text-xs'
          >
            {value}
          </p>
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModalHandler}
        footer={
          <div className='flex justify-around'>
            <a href={sourceCodeLink}>
              Source Code <FontAwesomeIcon icon={faLink} />
            </a>
            <a href={liveLink}>
              Live Link <FontAwesomeIcon icon={faLink} />
            </a>
          </div>
        }
      >
        <div className='p-3'>
          <p className='text-xl font-bold'>{name}</p>
          <img src={imagePath} alt={name} className='rounded-md my-3' />
          <div className='flex flex-nowrap justify-start gap-3 py-2 pl-1 truncate'>
            {techStack.map((value, index) => (
              <p
                key={index}
                className='bg-dark-gray p-1 rounded-full ring-1 ring-light-gray text-xs'
              >
                {value}
              </p>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  )
}
