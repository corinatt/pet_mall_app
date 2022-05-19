
import './App.css';
import DaisyNavBar from './Components/DaisyNavBar';
import ItemCount from './Components/ItemCount';
import ItemListContainer from './Components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetail from './Components/itemDetailContainer/ItemDetail';
import NoVocales from './Components/NoVocales';
import Home from './Components/Home';




function App() {

  return (

    <BrowserRouter>
      <DaisyNavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/productos' element={<ItemListContainer/>} />
        <Route path='/item/:itemId' element={<ItemDetail/>} />
        <Route path='/contador' element={<ItemCount/>} />
        <Route path='/vocales' element= {<NoVocales/>} />
        
      </Routes>
    </BrowserRouter>


  )
}

export default App;
