import 'tailwindcss/tailwind.css';
import '../node_modules/daisyui/dist/base';
// import 'daisyui/dist/daisyui.css';
import "./styles/index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//pages
import Home from './pages/Home';
import AboutPg from './pages/AboutPg';
import PortfolioPg from './pages/PortfolioPg';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<AboutPg />}></Route>
        <Route path='/portfolio' element={<PortfolioPg />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
