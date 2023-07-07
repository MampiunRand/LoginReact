import React,{Component} from "react";
import Login from './components/Login';
import Docs from './components/Pages/Docs';
import Tutorial from './components/Pages/Tutorial';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Menu from './components/Pages/Menu';
class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login name="test"/>}/>
          <Route path="/Docs" element={<Docs/>}/>
          <Route path="/Tutorial" element={<Tutorial/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
export default App;
