import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/page-components/home/home.component';
import Test from './components/page-components/test/test.component';
import NotFound from './components/page-components/not-found/not-found.component';

import NavBar from './components/base-components/navbar/nav-bar.component';
import Hero from './components/base-components/hero/hero.component';
import Footer from './components/base-components/footer/footer.component';

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
