import { useState } from "react"
import Modal from "../../../components/modal/modal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

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
  const [isOpenModal, setIsOpenModal] = useState(false)

  const openModalHandler = () => setIsOpenModal(true)

  const closeModalHandler = () => setIsOpenModal(false)

  return (
    <div>
      <p className='text-sm'>{date}</p>
      <button className='text-xl font-bold' onClick={openModalHandler}>
        {workplace} <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </button>
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
      <Modal
        isOpen={isOpenModal}
        onClose={closeModalHandler}
        footer={<div>Helo from the other side</div>}
      >
        <div className='p-3'>
          <p className='text-xl font-bold'>{workplace}</p>
          <p className='font-bold'>{position}</p>
          <p>{description}</p>
          <div className='flex justify-start gap-3 py-2 pl-1'>
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
      </Modal>
    </div>
  )
}
