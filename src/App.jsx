import "./App.css";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Animations from "./Animations";
import Links from "./Links";

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Projects />
      <Animations />
      <Links />
    </div>
  );
}

export default App;