import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function MediaLinks() {
  return (
    <div className='flex jusify-start gap-10'>
      <a
        href='https://www.linkedin.com/in/consengcodanlaw236/'
        target='_blank'
        rel='noopener noreferrer'
        className='text-4xl text-light-gray'
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href='https://github.com/DanDaMan23'
        target='_blank'
        rel='noopener noreferrer'
        className='text-4xl text-light-gray'
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  )
}
