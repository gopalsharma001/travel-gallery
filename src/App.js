import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import City from "./pages/City";
import BucketList from "./pages/BucketList";
import Layout from './components/Layouts';
import './App.css';
import DelhiPage from "./pages/DelhiPage.jsx";
import CityPage from './components/CityPage';
import assests from "./assests";
import PlaceDetails from './components/PlaceDetails.jsx';
function App() {
  const delhiAttractions = [
      { title: "Red Fort", location: "Symbol of India's Independence", imageUrl: assests.redfort },
      { title: "India Gate", location: "War Memorial Honoring Soldiers", imageUrl: assests.delhiIndiagate },
      { title: "Humayun's Tomb", location: "Inspiration for the Taj Mahal", imageUrl: assests.humayuntomb },
      { title: "Jama Masjid", location: "One of India's Largest Mosques", imageUrl: assests.delhiIndiagate },
      { title: "Akshardham Temple", location: "Spectacular Hindu Temple with Light Show", imageUrl: assests.akshardhamdelhi },
  ];
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="city" element={<City />} />
          {/* <Route path="city/delhi" element={<DelhiPage />} /> */}
          <Route path="/places/:placeId" element={<PlaceDetails />} />
          <Route path="city/:cityName" element={ <CityPage />} />
          <Route path="bucket-list" element={<BucketList />} />
        </Route>
      </Routes>
    </Router>
  );
};



export default App;
