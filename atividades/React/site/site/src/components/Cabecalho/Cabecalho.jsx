import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './Cabecalho.css'

import Tabela from '../Tabela/Tabela'
import Formulario from '../Formulario/Formulario'

export default class Cabecalho extends Component{

    render(){
        return(
            <div className="cabecalho">
                <Link to="/tabela"><h1>tabela</h1></Link> 
                <Link to="/formulario"><h1>formulario</h1></Link>
            </div>
        )
    }
}