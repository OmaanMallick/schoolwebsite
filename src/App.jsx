import './App.css';
import AboutUs from './components/AboutUs';
import Academics from './components/Academics';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Students from './components/Students';

function App() {
  return (
    <>
    <Home/>
    <AboutUs/>
    <Academics />
    <Students/>
    </>
  );
}

export default App;