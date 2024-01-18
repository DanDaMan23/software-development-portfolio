import { useState } from "react"
import {
  faArrowUpRightFromSquare,
  faLink
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Modal from "../../components/modal/modal"

import text from "./text.json"

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

  const ProjectImage = () => (
    <img src={imagePath} alt={name} className='rounded-md my-3' />
  )

  const TechStackPills = () => (
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
  )

  const modalFooter =
    sourceCodeLink || liveLink ? (
      <div className='flex justify-around'>
        {sourceCodeLink && (
          <a href={sourceCodeLink} target='_blank' rel='noopener noreferrer'>
            {text.sourceCodeLabel} <FontAwesomeIcon icon={faLink} />
          </a>
        )}
        {liveLink && (
          <a href={liveLink} target='_blank' rel='noopener noreferrer'>
            {text.liveLinkLabel} <FontAwesomeIcon icon={faLink} />
          </a>
        )}
      </div>
    ) : undefined

  const ProjectCardModal = () => (
    <Modal
      isOpen={isModalOpen}
      onClose={closeModalHandler}
      footer={modalFooter}
    >
      <div className='p-3'>
        <p className='text-xl font-bold'>{name}</p>
        <ProjectImage />
        <TechStackPills />
      </div>
    </Modal>
  )

  return (
    <div>
      <button className='text-xl font-bold my-3' onClick={openModalHandler}>
        {name} <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </button>
      <ProjectImage />
      <TechStackPills />
      <ProjectCardModal />
    </div>
  )
}
