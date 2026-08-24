import Header from "./components/Header.jsx"
import About from "./components/About.jsx"
import Projects from "./components/Projects.jsx"
import Animations from "./components/Animations.jsx"
import Links from "./components/Links.jsx"

export default function App() {
  return (
    <>
      <Header />
      <About />
      <div className="divider" />
      <Projects />
      <div className="divider" />
      <Animations />
      <div className="divider" />
      <Links />
      <div className="divider" />
    </>
  )
}