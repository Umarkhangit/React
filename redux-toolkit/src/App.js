import './App.css';
import Home from './Components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Create from './Components/Create';
import Update from './Components/Update';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/edit/:id' element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
