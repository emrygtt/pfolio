
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Resume from './pages/resume/Resume';

function App() {

  return (
    <>
    <Router>
      <Layout>
        <div className='container'>
          <Routes>      
            <Route name= 'about'    path='/' exact    element={<About/>}></Route>
            <Route name= 'about'    path='/about'    element={<About/>}></Route>
            <Route name= 'resume'   path='/resume'    element={<Resume/>}></Route>
            <Route name= 'contact'  path='/contact'   element={<Contact/>}></Route>
          </Routes>
        </div>
      </Layout>
      </Router>
    </>
  );
}

export default App;
