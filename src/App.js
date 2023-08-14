
import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import Header from './Components/Header';
import CardContext from './Global/CardContext';
function App() {
  return (
<>
<BrowserRouter>
<CardContext>
<Navbar/>
<Routes>
  <Route path='/' element={<Header/>

}/>
  <Route path='/card' element={<Card/>}/>

</Routes>
</CardContext>
</BrowserRouter>

</>




  );
}

export default App;
