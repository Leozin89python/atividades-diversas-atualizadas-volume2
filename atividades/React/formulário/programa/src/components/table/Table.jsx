import React , {Component} from 'react'
import firebase from 'firebase'

import {Link} from 'react-router-dom'

import './Table.css'

export default class Table extends Component{
    constructor(props){
        super(props)

        this.state = {
           dados:[]
        }


        //this.obtendoNome = this.obtendoNome.bind(this)

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

       firebase.database().ref('banco').on('value', (snapshot) =>{
            let state = this.state
            state.dados = []


            snapshot.forEach((childItem) =>{
                state.dados.push({
                    cargo:childItem.val().cargo,
                    empresa:childItem.val().empresa,
                    escolaridade:childItem.val().escolaridade,
                    nome:childItem.val().nome,
                    sexo:childItem.val().sexo,
                    tecnologia:childItem.val().tecnologia
                })
            })


            this.setState(state)
       })   
    }

 

        render(){
            const {nome} = this.state

            return(
                <div>
                    <Link className="link" to="/" >
                        <p className="linked">formulário de entrada</p>
                    </Link>


                    <div className="tabelaConteiner">
                        <table className="tabela" border="2px">
                            <thead className="cabecalho">
                                <tr>
                                    <td className="cargoCabe">cargo</td>
                                    <td className="nomeCabe">nome</td>
                                    <td className="empresaCabe">empresa</td>
                                    <td className="tecnoCabe">tecnologia</td>
                                    <td className="escolaCabe">escolaridade</td>
                                    <td className="sexoCabe">sexo</td>
                                </tr>
                            </thead>
                            <tbody className="corpo">
                               {

                                this.state.dados.map((elemento,indice)=>{
                                    return(
                                        <tr key={indice}>
                                            <td>{elemento.cargo}</td>
                                            <td>{elemento.nome}</td>
                                            <td>{elemento.empresa}</td>
                                            <td>{elemento.tecnologia}</td>
                                            <td>{elemento.escolaridade}</td>
                                            <td>{elemento.sexo}</td>
                                        </tr>
                                    )
                                })  
                               }
                           </tbody>
                        </table>
                    </div>

                         <footer className="copy">
                                &copy; Leonardo Sousa estudos todos os direitos reservados&trade;.
                        </footer>

                </div>
            )
        }
}