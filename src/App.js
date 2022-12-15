import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/home.component';
import Test from './components/test/test.component';
import NotFound from './components/not-found/not-found.component';
import NavBar from './components/navbar/nav-bar.component';

function App() {
  return (
    <> 
    <NavBar />
    Department of Radiology
    hero
    {/* <Router>
      <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/test" element={<Test />}/>
          <Route path="*" element={<NotFound />}/>
      </Routes>
    </Router> */}
    footer
  </>
  );
}

export default App;
