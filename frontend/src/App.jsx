import{BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import LogPage from './pages/LogPage';
import SignPage from './pages/SignPage';
import Dashboard from './pages/Dashboard';
import Main from './components/Main';
import Texting from './components/Texting';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar/>} >
            <Route path='/' element={<Home/>} />
          </Route>
          <Route path='/login' element={<LogPage/>}/>
          <Route path='/sign' element={<SignPage/>}/>
          <Route element={<Main/>}>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/dashboard/:id' element={<Texting/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
