import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './features/home/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
