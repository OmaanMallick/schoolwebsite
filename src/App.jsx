import './App.css';
import AboutUs from './components/AboutUs';
import Academics from './components/Academics';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Students from './components/Students';
import Admissions from './components/Admissions';
import Faculty from './components/Faculty';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <>
    <Home/>
    <AboutUs/>
    <Academics />
    <Admissions/>
    <Faculty/>
    <Students/>
    <Gallery/>
    <ContactUs/>
    </>
  );
}

export default App;