import React,{Component} from 'react'
import {Link} from 'react-router-dom'

import Db from '../Db/Db'

import Caneta from '../assets/caneta.png'
import Email from '../assets/mail-2.png'
import Face from '../assets/facebook.png'
import Linked from '../assets/linkedin.png'
import Insta from '../assets/instagram.png' 

import './Login.css'


export default class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
          email:'',
          senha:'',
          estado:false
        }
    
        this.logar  = this.logar.bind(this)
        this.enviar = this.enviar.bind(this)
        this.limpar = this.limpar.bind(this)
      }


  limpar = () =>{
    this.setState({
       email:'',
       senha:'' 
    })
  } 

  logar = (e) =>{

    e.preventDefault()
  }    

  enviar = (e) =>{
    let cadastro = Db.database().ref('cadastro')
    let chave = cadastro.push().key

    cadastro.child(chave).set({
      email:this.state.email,
      senha:this.state.senha
    })
    this.limpar()
    e.preventDefault()
  }


    render(){
        return(
            <div className="login">

            {

              !this.state.estado == true?

             ( <div className="cardLogin">

                  <h3 className="loginText">Login</h3>
                        <form>
                              <div className="cardEmail">
                                  <img className="imgEmail" 
                                    src={Email}
                                  />
                                  <input className="putMail" 
                                        placeholder=" digite seu email..." 
                                        type="text"
                                        value={this.state.email}
                                        />
                              </div>
                            
                              <div className="cardSenha">
                                  <img className="imgSenha" 
                                    src={Caneta}
                                  />
                                  <input className="putSenha" 
                                        placeholder=" digite sua senha..." 
                                        type="password"
                                        value={this.state.senha}
                                        />
                              </div>

                              <button className="logar" onClick={this.logar}>Login</button>
                        </form>
                        <button className="cadastre-se"
                          value={this.state.estado}
                          onClick={() => this.setState({estado:true})}
                        >não possui conta? Cadastre-se!</button>

                        <hr/>

                        <p className="visite">Visitem nossas redes sociais!</p>
                        <div className="redes">
                        <a >
                          <img className="face"
                                src={Face}
                          />
                        </a>
                        <a >
                          <img className="link"
                            src={Linked}
                          />
                        </a>
                        <a >
                          <img className="insta"
                            src={Insta}
                          />
                        </a>
                        </div>
                  </div> )
:
      
      ( <div className="cardCadastro">

                <h3 className="loginText">Cadastro</h3>
                <form>
                      <div className="cardEmail">
                          <img className="imgEmail" 
                            src={Email}
                          />
                          <input className="putMail" 
                                placeholder=" digite um email..." 
                                type="text"
                                value={this.state.email}
                                onChange={(email) => this.setState({email:email.target.value})}
                                />
                      </div>
                    
                      <div className="cardSenha">
                          <img className="imgSenha" 
                            src={Caneta}
                          />
                          <input className="putSenha" 
                                placeholder=" digite uma senha senha..." 
                                type="password"
                                value={this.state.senha}
                                onChange={(senha) => this.setState({senha:senha.target.value})}
                                />
                      </div>

                      <div className="cardSenha">
                          <img className="imgSenha" 
                            src={Caneta}
                          />
                          <input className="putSenha" 
                                placeholder=" confirme sua senha..." 
                                type="password"
                                value={this.state.senha}
                                onChange={(senha) => this.setState({senha:senha.target.value})}
                                />
                      </div>

                      <button className="enviar" 
                      onClick={this.enviar}>Enviar</button>
                </form>
                <button className="facaLogin"
                value={this.state.estado}
                onClick={() => this.setState({estado:false})}>possui conta? faça Login!</button>

                <hr/>

                <p className="visite">Visitem nossas redes sociais!</p>
                <div className="redes">
                <a >
                  <img className="face"
                        src={Face}
                  />
                </a>
                <a >
                  <img className="link"
                    src={Linked}
                  />
                </a>
                <a >
                  <img className="insta"
                    src={Insta}
                  />
                </a>
                </div>
          </div>)

            }

            </div>
        )
    }
}