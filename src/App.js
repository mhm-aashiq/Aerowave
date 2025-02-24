import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './AW/Home';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ContactUs from './AW/ContactUs';
import AboutUs from './AW/AboutUs';
import AirFreight from './AW/AirServices/AirFreight'
import SeaFreight from './AW/SeaServices/SeaFreight'
import Exports from './AW/Exports/Exports'
import Doc from './AW/DocServices/Doc'
import Transhipment from './AW/TranshipServices/Transhipment'
import Brokerage from './AW/Brokerage/Brokerage'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aw/home" element={<Home />} />
        <Route path="/aw/contactus" element={<ContactUs />} />
        <Route path="/aw/aboutus" element={<AboutUs />} />
        <Route path="/aw/AirServices/AirFreight" element={<AirFreight />} />
        <Route path="/aw/SeaServices/SeaFreight" element={<SeaFreight />} />
        <Route path="/aw/Exports/Exports" element={<Exports />} />
        <Route path="/aw/DocServices/Doc" element={<Doc />} />
        <Route path="/aw/TranshipServices/Transhipment" element={<Transhipment />} />
        <Route path="/aw/Brokerage/Brokerage" element={<Brokerage />} />
      </Routes>
    </div>
  );
}

export default App;
