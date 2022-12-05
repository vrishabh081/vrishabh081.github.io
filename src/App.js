import { About } from "./Components/About";
import { Calender } from "./Components/Calender";
import { Contact } from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar/Navbar";
import { Projects } from "./Components/Projects";
import { Skills } from "./Components/Skills/Skill";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Calender/>
      <Contact/>
    </div>
  );
}

export default App;
