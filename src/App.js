import { Routes, Route } from 'react-router';

import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Reservation from './pages/Reservations';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/reservations' element={<Reservation />} />
        </Routes>
      </div>
  );
}

export default App;
