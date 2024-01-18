import About from "./sections/about/about"
import Experience from "./sections/experience/experience"
import Header from "./sections/header/Header"
import Projects from "./sections/projects/projects"

export default function App() {
  return (
    <div className='bg-black text-light-gray p-3'>
      <Header />
      <About />
      <Experience />
      <Projects />
    </div>
  )
}
