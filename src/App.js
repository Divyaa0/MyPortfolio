// import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Component/Home'
import About from './Component/About';
import Projects from './Component/Projects';
import Skills from './Component/Skills';
import Experience from './Component/Experience';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/experience" element={<Experience/>}/>
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
