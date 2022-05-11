import './App.css';
import HomeContainer from './pages/home/HomeContainer';
import MainNavBar from './components/MainNavBar';
import AddABeer from './components/AddABeer';
import SignUp from './components/SignUp';
import {Route, Routes} from "react-router-dom";
import SingleBeer from './pages/singlebeer/SingleBeer';
import EditBeer from './pages/editBeer/EditBeer'

function App() {
  return (
    <div className="App">
      <h1>Beer Rater</h1>
      <MainNavBar/>
      <Routes>
        <Route path='/' exact element={<HomeContainer/>}/>
        <Route path='/add-a-beer' exact element={<AddABeer/>}/>
        <Route path='/sign-up' exact element={<SignUp/>}/>
        <Route path='/beers/:id' exact element={<SingleBeer/>}/>
        <Route path='/edit/:id' exact element={<EditBeer/>}/>
      </Routes>
    </div>
  );
}

export default App;
