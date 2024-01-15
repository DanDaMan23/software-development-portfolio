import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

export default function Header() {
  return (
    <div className='p-3 flex justify-between items-center'>
      <div>
        <p className='text-2xl font-extrabold'>Dan Lawrence Consengco</p>
        <p className='text-lg font-bold'>Software Developer</p>
        <p>I build responsive web applications</p>
      </div>
      <button className='px-2 py-1 border border-solid border-light-gray rounded-md'>
        <FontAwesomeIcon className='text-light-gray' icon={faBars} />
      </button>
    </div>
  )
}
