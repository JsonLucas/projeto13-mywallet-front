import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NewAction from './pages/NewAction';
import SignUp from './pages/SignUp';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />}></Route>
        <Route path='/sign-up' element={<SignUp />}></Route>
        <Route path='/home/:name' element={<Home />}></Route>
        <Route path='/new-action/:actionType' element={<NewAction />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
