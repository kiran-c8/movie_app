import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Details from './Components/Details/Details';
import Navbar from './Components/Navbar/Navbar.jsx';
import './App.css';
import Video from './Components/Video/Video';
import Search from './Components/SearchField/Search';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route exact path='/' element={<Search />} />
            <Route exact path='/details' element={<Details />} />
            <Route exact path='/details/video' element={<Video />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
