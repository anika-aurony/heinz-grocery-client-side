import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login/Login';
import RequiredAuth from './components/Login/RequiredAuth/RequiredAuth';
import SignUp from './components/Login/SignUp/SignUp';
import ManageInventories from './components/ManageInventories/ManageInventories';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import NotFound from './components/Shared/NotFound/NotFound';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/Inventory/:id" element={
          <RequiredAuth>
            <Inventory></Inventory>
          </RequiredAuth>
          }></Route>
        <Route path="/manageInventories" element={
          <RequiredAuth>
            <ManageInventories></ManageInventories>
          </RequiredAuth>
        
        }></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
