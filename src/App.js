import './App.css';
import WarningBanner from './components/header';
import Navbar from './components/Navbar';
import PropertyList from './components/Properties';



function App() {
  return (
    <div>
    <WarningBanner/>
    <Navbar/>
    <PropertyList/>


    </div>

  );
}

export default App;
