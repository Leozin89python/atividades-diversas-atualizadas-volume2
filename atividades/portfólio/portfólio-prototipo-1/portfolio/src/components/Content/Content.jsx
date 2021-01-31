import React,{Component} from 'react'
import './Content.css'

import  'react-image-gallery/styles/css/image-gallery.css'

import Devices2 from '../../assets/devices2.jpg'
import Gallery from 'react-image-gallery'
import Manutencao from '../../assets/manutencao.jpg'
import Manutencao2 from '../../assets/manutencao2.jpg'
import Manutencao3 from '../../assets/manutencao3.jpg'
import Tela from '../../assets/tela.jpg'
import Script from '../../assets/script.jpg'
import Desenvolvimento1 from '../../assets/desenvolvimento1.jpg'
import Desenvolvimento2 from '../../assets/desenvolvimento2.jpg'



  const images = [
    {
                        original: Manutencao,
                        thumbnail:'',
    },{
                        original: Manutencao2,
                        thumbnail:'',
    },{
                        original: Manutencao3,
                        thumbnail:'',
    },
    {
                        original: Tela,
                        thumbnail:'',
    },
    {
                        original: Desenvolvimento1 ,
                        thumbnail:'',
    },
    {
                        original: Desenvolvimento2 ,
                        thumbnail:'',
    },{
                        original: Script ,
                        thumbnail:'',
    }
   ,{
                        original: Devices2 ,
                        thumbnail:'',
    }

  ];



export default class Content extends Component{

    state = {
    
        showPlayButton: false,
        showGalleryPlayButton: false,
        showNav: true,
        showFullscreenButton: false,
        showGalleryFullscreenButton: false,
        showVideo: {},
        showThumbnails:false
    }

    render(){
        return(
            <div className="ComponentContent">

                {/**
                    
                    <div className="componentGalleryDesign">
                </div> 

                 */}
                  
                    <Gallery 
                            items={images}
                            showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
                            showNav={this.state.showNav}
                            showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton} 
                            showThumbnails={this.state.showThumbnails}     
                        /> 
                     
                       <h6 className="componentGalleryDescription">
                           As imagens são meramente ilustrativas *
                       </h6>

                        {/** funciona porque é filho do body 
                        e não está contido em nehum 
                        conteiner */}
                       <h1 className="stick">
                         stick  
                       </h1>

                    <div className="componentContentLargerToSmallDevices">
                       <div className="ComponentContentContent">
                            <div className="ComponentContentContentServicos">
                                <div className="componentServiceCard">
                                    <h3 className="componentContentTitle" >Serviços:</h3>

                                        <div className="componentContentJobs">
                                            <strong className="combo">combo:</strong> Formatação + Limpeza + Backup! de <del>180,00R$</del> por 150,00R$ 
                                            <strong className="combo">combo:</strong> Formatação + Limpeza! de <del>150,00R$</del> por 120,00R$
                                            <strong className="servico">Serviço:</strong> Formatação! de <del>100,00R$</del> por 80,00R$
                                            <strong className="servico">Serviço:</strong>Orçamento! de <del>50,00R$</del> por 30,00R$ 
                                            <strong className="servico">Serviço:</strong> Substituição de periférico (Peça/Componente)! de <del>70,00R$</del> por 50,00R$ + valor do componente
                                            <strong className="servico">Serviço:</strong> Limpeza! de <del>70,00R$</del> por 50,00R$
                                            <strong className="servico">Serviço:</strong> Backup! de <del>70,00R$</del> por 50,00R$
                                            <strong className="servico">Serviço:</strong> Troca de tela! (Notebook somente *) de <del>120,00R$</del> por 60,00R$ + valor de tela nova
                                            <strong className="servico">Serviço:</strong> Criação de site! A combinar!
                                            <strong className="servico">Serviço:</strong> Criação de aplicativo! A combinar!
                                            <strong className="combo">Combo:</strong>  Site + Aplicativo!  A combinar com <span>30% de desconto cada!</span>
                                        </div>
                                </div>
                            </div>

                            <div  className="ComponentContentContentMe">
                            <div className="componentMeCard">
                                    <h3 className="componentContentTitle" >Quem eu sou:</h3>
                                </div>
                            </div>
                       </div>

                       <div className="componentContentFooter">
                                <h4>footer aqui</h4>
                       </div>

                       <div className="componentContentCopy">
                                <p></p> <hr />
                                <p>Site criado por  
                               
                                    <a>
                                        Leonardo Sousa
                                    </a>
                            </p>
                       </div>
                </div>

                





                <div className="componentContentLittleDevices">
                    <h1>
                        little devices
                    </h1>
                </div>





            </div>
        )
    }
}