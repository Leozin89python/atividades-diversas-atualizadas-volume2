import React,{Component} from 'react'
import {Route,BrowserRouter,Switch} from 'react-router-dom'

import Db from './components/Db/Db'

import Cadastro from './components/Cadastro/Cadastro'
import Login from './components/Login/Login'

import Cabecalho from './components/Cabecalho/Cabecalho'
import Rodape from './components/Rodape/Rodape'
import Tabela from './components/Tabela/Tabela'
import Formulario from './components/Formulario/Formulario'

import './App.css';

export default class App extends Component{

  state = {
    login: false
  }


  verificacao = () =>{


  }

  render(){
    return(
      <React.Fragment>


      {
        
            (!this.state.login == true) ?
            
               <Login />
              
             
               :
            

              <BrowserRouter>
                  <Cabecalho/>
                    <Switch>                
                        <Route exact={true} path="/formulario" component={Formulario}/>
                        <Route exact={true} path="/tabela" component={Tabela}/>
                    </Switch>
                  <Rodape/>
            </BrowserRouter>
         
          }
         
           
      </React.Fragment>
    )
  }
}


