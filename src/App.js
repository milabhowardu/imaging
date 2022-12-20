import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/page-components/home/home.component';
import Research from './components/page-components/research/research.component';
import FullPublications from './components/page-components/research/full-publications/full-publications.component';
import People from './components/page-components/people/people.component';
import Test from './components/page-components/test/test.component';
import NotFound from './components/page-components/not-found/not-found.component';

import NavBar from './components/base-components/navbar/nav-bar.component';
import Footer from './components/base-components/footer/footer.component';

function App() {
  return (
    <> 
    <NavBar />
      <Router>
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/research" element={<Research />}/>
            <Route exact path="/research/full" element={<FullPublications />}/>
            <Route exact path="/people" element={<People />}/>
            <Route exact path="/test" element={<Test />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
      </Router>
    <Footer />
  </>
  );
}

export default App;
