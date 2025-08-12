import './App.css';
import "@fontsource/inter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Menu from './pages/Menu';
import Layout from './pages/Layout';
import Table from './pages/Table';


function App() {
  return (
    <BrowserRouter>
    <meta charset="UTF-8" />
    <meta name="Author" content="Adrian Boman" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='menu' element={<Menu />} />
          <Route path='table' element={<Table />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
