import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import SignIn from './SignIn';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<MainContent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


