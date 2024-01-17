import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ReactElement, ReactNode, cloneElement } from "react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  footer?: ReactElement
}

export default function Modal({
  isOpen,
  onClose,
  children,
  footer
}: ModalProps) {
  if (!isOpen) return <></>

  return (
    <div className='fixed inset-0 overflow-y-auto bg-light-gray bg-opacity-60 flex justify-center items-center'>
      <div className='bg-black w-[75vw] rounded-lg'>
        <div className='flex justify-end p-4 border-b'>
          <button onClick={onClose}>
            <FontAwesomeIcon icon={faX} />
          </button>
        </div>
        <div className='h-[75vh] overflow-y-auto'>{children}</div>
        {footer &&
          cloneElement(footer, {
            className: `p-3 border-t border-light-gray ${
              footer.props.className || ""
            }`
          })}
      </div>
    </div>
  )
}
