
import './App.css';
import DaisyNavBar from './Components/DaisyNavBar';
import ItemCount from './Components/ItemCount';
import ItemListContainer from './Components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemList from './Components/ItemList';
import ItemDetail from './Components/itemDetailContainer/ItemDetail'




function App() {

  return (

    <BrowserRouter>
      <DaisyNavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/producto/:cantId' element={<ItemListContainer/>} />
        <Route path='/item/:itemId ' element={<ItemDetail/>} />
        <Route path='/contador' element={<ItemCount/>} />
        <Route />
        <Route />
        
      </Routes>
    </BrowserRouter>


  )
}

export default App;
