import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import NavIgation from './Pages/NavIgation/NavIgation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavIgation />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
