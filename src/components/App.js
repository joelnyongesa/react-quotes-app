import './App.css';
import Home from './Home';
import Quotes from './Quotes';
import NotFound from './NotFound';
import Landing from './LandingPage';
import { Routes, Route, Link } from 'react-router-dom';
import QuoteDetails from './QuoteDetails';

function App() {
  return (
    <div className="App">
      

      <Routes>
        <Route element={<Landing/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/quotes' element={<Quotes/>}/>
          <Route path='/quotes/:id' element={<QuoteDetails/>}/>
        </Route>

        <Route path='*' element={<NotFound/>}/>

      </Routes>


    </div>
  );
}

export default App;
