import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Shared/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Help from './pages/Help/Help/Help';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

