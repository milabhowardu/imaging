import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/page-components/home/home.component';
import Research from './components/page-components/research/research.component';
import FullPublications from './components/page-components/research/full-publications/full-publications.component';
import People from './components/page-components/people/people.component';
import Test from './components/page-components/test/test.component';
import NotFound from './components/page-components/not-found/not-found.component';

import NavBar from './components/base-components/navbar/nav-bar.component';
import Footer from './components/base-components/footer/footer.component';

import { AiOutlineArrowUp } from "react-icons/ai";

function App() {
  useEffect(() => {
    const handleScroll = (event) => {
      let sticky = 500;
      let mybutton = document.getElementById("myBtn");

      if (window.pageYOffset >= sticky) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goBacktoTo = () =>{
    console.log("goBacktoTop");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

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
    <button onClick={goBacktoTo} id="myBtn" className="goBacktoTo"><AiOutlineArrowUp size={25}/> </button>
  </>
  );
}

export default App;
