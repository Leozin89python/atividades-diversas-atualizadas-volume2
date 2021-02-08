import React , {Component} from 'react'
import firebase from 'firebase'

import {Link} from 'react-router-dom'


import './Home.css'

export default class Home extends Component{

    constructor(props){
        super(props)

        this.state = {
            nome:'',
            cargo:'',
            empresa:'',
            tecnologia:'',
            escolaridade:'',
            sexo:[]
        }

        this.banco = this.banco.bind(this)
        this.limpar = this.limpar.bind(this)



        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyDOVegwUOZ-FAoDQqrp6IUL89_d1AIm2wI",
            authDomain: "programa-932e3.firebaseapp.com",
            projectId: "programa-932e3",
            storageBucket: "programa-932e3.appspot.com",
            messagingSenderId: "835620291903",
            appId: "1:835620291903:web:1fd397d9035de7ab6b3f8a"
        };
        // Initialize Firebase
        if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig)
        }
    }



    banco = (e) =>{
        let cadastro = firebase.database().ref('banco')
        let chave    = cadastro.push().key
        
        cadastro.child(chave).set({
            nome:this.state.nome,
            cargo:this.state.cargo,
            empresa:this.state.empresa,
            tecnologia:this.state.tecnologia,
            escolaridade:this.state.escolaridade,
            sexo:this.state.sexo
        })
        this.limpar()
        e.preventDefault()
    }


    limpar = () =>{
        this.setState({
            nome:'',
            cargo:'',
            empresa:'',
            tecnologia:'',
            escolaridade:'',
            sexo:[]
        })
    }
 

        render(){
            const {nome,
                  cargo,
                  empresa,
                  tecnologia,
                  escolaridade,
                  sexo} = this.state

            return(
                <div>
                    <Link className="link" to="/tables" >
                        <p className="linked">tabela de exibição dos formulários</p>
                    </Link>

                    <div className="formulárioConteiner">
                        <form className="formulário">

                            <input className="nome"
                                placeholder="nome"
                                type="text"
                                value={nome}
                                onChange={(nome) => this.setState({nome:nome.target.value}) }
                            />
                            <input className="cargo"
                                placeholder="cargo"
                                type="text"
                                value={cargo}
                                onChange={(cargo) => this.setState({cargo:cargo.target.value})}
                            />
                            <input className="empresa"
                                placeholder="empresa"
                                type="text"
                                value={empresa}
                                onChange={(empresa) => this.setState({empresa:empresa.target.value})}
                            />
                            <input className="tecnologias"
                                placeholder="tecnologias"
                                type="text"
                                value={tecnologia}
                                onChange={(tecnologia) => this.setState({tecnologia:tecnologia.target.value})}
                            />
                            <input className="escolaridade"
                                placeholder="escolaridade"
                                type="text"
                                value={escolaridade}
                                onChange={(escolaridade) => this.setState({escolaridade:escolaridade.target.value})}
                            />

                            <select className="sexo"
                                value={sexo}
                                onChange={(sexo) => this.setState({sexo:sexo.target.value})}>
                                <option>sexo...</option>
                                <option>masculino</option>
                                <option>feminino</option>
                            </select>

                           
                        </form>

                        
                    </div>

                        <button className="limpar" onClick={this.limpar}>limpar</button>
                        <button className="enviar" onClick={this.banco}>enviar</button>

                        <footer>
                                &copy; Leonardo Sousa estudos todos os direitos reservados&trade;.
                        </footer>

                </div>
            )
        }
}