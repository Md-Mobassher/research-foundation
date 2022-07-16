import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Contact from './Pages/More/Contact';
import More from './Pages/More/More';
import People from './Pages/People/People';
import TeamMemberDetails from './Pages/People/TeamMemberDetails';
import Publications from './Pages/Publications/Publications';
import Research from './Pages/Research/Research';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import NotFound from './Pages/Shared/NotFound';

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='research' element={<Research />}></Route>
          <Route path='people' element={<People />}></Route>
          <Route path='people/:id' element={<TeamMemberDetails />}></Route>
          <Route path='more' element={<More />}></Route>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='publications' element={<Publications />}></Route>

          <Route path='*' element={<NotFound />}></Route>
        </Routes>
        
        <Footer></Footer>
      </Navbar>


      
    </div>
  );
}

export default App;
