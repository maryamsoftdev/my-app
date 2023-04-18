
import './App.css';
import Header from './components/Header';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Cart from './components/Cart';
import Home from './components/Home';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header />
    <Routes>
      <Route path="/" Component={Home} exact/>
      <Route path="/cart" Component={Cart}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
