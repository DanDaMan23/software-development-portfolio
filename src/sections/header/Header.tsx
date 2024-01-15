import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import NavigationArea from "./navigation-area/navigation-area"
import { useState } from "react"

export default function Header() {
  const [showNavigation, setShowNavigation] = useState(false)

  const toggleNavigationHandler = () =>
    setShowNavigation((prevState) => !prevState)

  return (
    <>
      <div className='p-3 flex justify-between items-center'>
        <div>
          <p className='text-2xl font-extrabold'>Dan Lawrence Consengco</p>
          <p className='text-lg font-bold'>Software Developer</p>
          <p>I build responsive web applications</p>
        </div>
        <button
          onClick={toggleNavigationHandler}
          className='px-2 py-1 border border-solid border-light-gray rounded-md'
        >
          <FontAwesomeIcon className='text-light-gray' icon={faBars} />
        </button>
      </div>
      <NavigationArea
        isOpen={showNavigation}
        toggleNavigationHandler={toggleNavigationHandler}
      />
    </>
  )
}
