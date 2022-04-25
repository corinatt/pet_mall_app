
import './App.css';
import DaisyNavBar from './Components/DaisyNavBar';
import ItemCount from './Components/ItemCount';
import ItemListContainer from './Components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <div className='bg-gradient-to-r from-indigo-500 '/>
      
      <DaisyNavBar/>
      <ItemListContainer/>
      <ItemCount/>
      
    
    </div>
  );
}

export default App;
