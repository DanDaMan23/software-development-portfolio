import NavigaitonContextProvider from "./navigation-context"
import About from "./sections/about/about"
import Contact from "./sections/contact/contact"
import Education from "./sections/education/education"
import Experience from "./sections/experience/experience"
import Header from "./sections/header/Header"
import Projects from "./sections/projects/projects"

export default function App() {
  return (
    <div className='bg-black text-light-gray p-3'>
      <NavigaitonContextProvider>
        <Header />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </NavigaitonContextProvider>
    </div>
  )
}
