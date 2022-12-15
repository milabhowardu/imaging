import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/home.component';
import Test from './components/test/test.component';
import NotFound from './components/not-found/not-found.component';
import NavBar from './components/navbar/nav-bar.component';
import Hero from './components/hero/hero.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <> 
    <NavBar />
    <Hero />
    <Router>
      <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/test" element={<Test />}/>
          <Route path="*" element={<NotFound />}/>
      </Routes>
    </Router>
    <Footer />
  </>
  );
}

export default App;
