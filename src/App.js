import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './features/home/HomePage';
import { FilterProvider } from './contexts/filterContext/FilterContext';


function App() {
  return (
    <BrowserRouter>
      <FilterProvider>
        <Routes>
          <Route index element={<HomePage/>}/>
        </Routes>
      </FilterProvider>
    </BrowserRouter>
  );
}

export default App;
