import Navbr from "./Components/Navbar/Navbr";
import Frist from "./Components/Fristpage/Frist";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";
import Cantact from "./Components/Cantact/Cantact";
function App() {
  return (
    <div className="App">
       <Navbr />
       <Frist />
       <About />
       <Project />
       <Cantact/>
    </div>
  );
}

export default App;
