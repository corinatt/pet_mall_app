
import './App.css';
import DaisyNavBar from './Components/DaisyNavBar';
import ItemCount from './Components/ItemCount';
import ItemListContainer from './Components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetail from './Components/itemDetailContainer/ItemDetail';
import NoVocales from './Components/NoVocales';




function App() {

  return (

    <BrowserRouter>
      <DaisyNavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/contenedor' element={<ItemListContainer/>} />
        <Route path='/item/:itemId' element={<ItemDetail/>} />
        <Route path='/contador' element={<ItemCount/>} />
        <Route path='/vocales' element= {<NoVocales/>} />
        <Route />
        <Route />
        
      </Routes>
    </BrowserRouter>


  )
}

export default App;
