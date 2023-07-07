import React,{Component} from 'react';
import ModalErrorLogin from './Modal/ModalErrorLogin';
import {Navigate} from 'react-router-dom';
import './LoginStyle.css';
class Login extends Component{
  constructor(props) {
    super(props)
    this.state={
      name:"",
      password:"",
      displayModal:false,
      is_authentificate:false,
    }
    this.name="Mapi";
    this.pass="123";
    //console.log(this.props)
  }
  handleName=e=>{
    this.setState({
        name:e.target.value
    })
  }
  handlePass=e=>{
    this.setState({
        password:e.target.value
    })
  }
  authentificate=()=>{
    if(this.state.name===this.name && this.state.password===this.pass){
      this.setState({
        is_authentificate:"true"
      })
    }else if(this.state.name===""|| this.state.password===""){
        this.setState({
            displayModal:"true",
        })
    }else if(this.state.name !== this.name || this.state.password !== this.pass){
        this.setState({
            displayModal:"true",
        })
    }
  }
  toggleModal=(bool)=>{
    this.setState({
        displayModal:bool
    })
  }

  render(){
        const Modale= this.state.displayModal && (<ModalErrorLogin onModal={this.toggleModal}/>);
        if(this.state.is_authentificate){
            return <Navigate to="/Docs" replace={true} />
        }
        return(
          <div className='BackGround'>
            <div className='container'>
              <div className="Input">
                  <label htmlFor="name">Name:</label>
                  <input id="name" type="text" onChange={this.handleName} value={this.state.name}/><br />
              </div>
              <div className="Input">
                  <label htmlFor="pass">Password:</label>
                  <input id="pass" type="text" onChange={this.handlePass} value={this.state.password}/><br />
              </div>
              <div>{Modale}</div>
            <button onClick={this.authentificate}>Valider</button>
          </div>
          </div>
        );
  }
}
export default Login;