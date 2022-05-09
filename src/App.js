import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NewAction from './pages/NewAction';
import SignUp from './pages/SignUp';
import UpdateRegister from './pages/UpdateRegister';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />}></Route>
        <Route path='/sign-up' element={<SignUp />}></Route>
        <Route path='/home/:name' element={<Home />}></Route>
        <Route path='/action/:actionType' element={<NewAction />}></Route>
        <Route path='/update/:actionType' element={<UpdateRegister />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
