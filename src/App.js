
import './App.css';
import DaisyNavBar from './Components/DaisyNavBar';
import ItemCount from './Components/ItemCount';
//import ItemDetailContainer from './Components/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <div className='bg-gradient-to-r from-indigo-500 '/>
      
      <DaisyNavBar/>
      <ItemListContainer/>
      {/* <ItemDetailContainer/> */}
      <ItemCount/>
      
    
    </div>
  );
}

export default App;
