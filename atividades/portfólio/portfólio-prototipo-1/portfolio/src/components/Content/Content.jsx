import React,{Component} from 'react'
import './Content.css'

import  'react-image-gallery/styles/css/image-gallery.css'

/**content e gallery */
import Devices2 from '../../assets/devices2.jpg'
import Gallery from 'react-image-gallery'
import Manutencao from '../../assets/manutencao.jpg'
import Manutencao2 from '../../assets/manutencao2.jpg'
import Manutencao3 from '../../assets/manutencao3.jpg'
import Tela from '../../assets/tela.jpg'
import Script from '../../assets/script.jpg'
import Desenvolvimento1 from '../../assets/desenvolvimento1.jpg'
import Desenvolvimento2 from '../../assets/desenvolvimento2.jpg'
import Profile from '../../assets/perfil.jpg'

/**footer e redes sociais */
import Facebook from '../../assets/facebook.png'
import Instagram from '../../assets/instagram.png'
import Twitter from '../../assets/twitter.jpg'
import Whattzap from '../../assets/zap.png'

/** footer tecnologias */
import Css from '../../assets/css.png'
import Ecma from '../../assets/ecma.png'
import Node from '../../assets/node.png'
import ReactImg from '../../assets/react.png'
import Html from '../../assets/html.png'
import Firebase from '../../assets/firebase.png'
import Bootstrap from '../../assets/bootstrap.png'

/**footer formulario */
import Caneta from '../../assets/caneta.png'
import Fone from '../../assets/fone.png'
import Mail from '../../assets/mail-2.png'

/**localstorage e database */
import BANCO from '../Db/Db'


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
    },{
                        original: Tela,
                        thumbnail:'',
    },{
                        original: Desenvolvimento1 ,
                        thumbnail:'',
    },{
                        original: Desenvolvimento2 ,
                        thumbnail:'',
    },{
                        original: Script ,
                        thumbnail:'',
    },{
                        original: Devices2 ,
                        thumbnail:'',
    }

  ];



export default class Content extends Component{
    constructor(){
        super()
        this.Banco = new BANCO()
    }

    state = {
    
        showPlayButton: false,
        showGalleryPlayButton: false,
        showNav: true,
        showFullscreenButton: false,
        showGalleryFullscreenButton: false,
        showVideo: {},
        showThumbnails:false,
        nome:'',
        tel:'',
        email:'',
        texto:''
    }

    save = (e) =>{
        let nome  = e.target.name
        let valor = e.target.value 
        this.setState({
            [nome]:valor
        })
    }

    clear = () =>{
       this.setState({
        nome:'',
        tel:'',
        email:'',
        texto:''
       })
    }

    send = () =>{
        let formulario = {
        nome:this.state.nome,
        tel:this.state.tel,
        email:this.state.email,
        texto:this.state.texto
        } 
        this.Banco.enviar(formulario)
        this.clear()
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
                                            <strong className="servico">Serviço:</strong> Criação de site de exibição (somente uma página e interação minima)!  <span>200,00R$</span>
                                            <strong className="servico">Serviço:</strong> Criação de aplicativo! A combinar!
                                            <strong className="combo">Combo:</strong>  Site + Aplicativo!  A combinar com <span>30% de desconto cada!</span>
                                        </div>
                                </div>
                            </div>

                            <div  className="ComponentContentContentMe">
                            <div className="componentMeCard">
                                    <h3 className="componentContentTitle" >Quem eu sou:</h3>
                                    <img className="componentContentProfile" src={Profile} />
                                    <div className="componentContentProfileDescriptionSkills">
                                            <p className="componentContentProfileDescriptionSkillsText">
                                                Olá a todos! Meu nome é <strong className="me">Leonardo Sousa.</strong>
                                                Sou formado em Logística pela <strong className="university">Unijorge&copy;</strong>
                                                e estou me pós-graduando em Engenharia de software para dispositivos móveis pela
                                                <strong className="university">Uninter&copy;</strong>.
                                                Sou profissional de manutenção em computadores a mais de 8 anos e possuo
                                                experiência também no setor varejista de alimentos, o que me levou a escolha do curso de 
                                                minha 1° graduação.
                                                Trabalho com desenvolvimento de aplicativos e web sites como este,
                                                que construi.
                                                Possuo uma base sólida em fazer meus serviços fundamentados
                                                em minha melhor performance, gerando aos meus clientes competitividade e desempenho com suas 
                                                ferramentas. 
                                            </p>
                                    </div>
                                </div>
                            </div>
                       </div>

                       <div className="componentContentFooter">

                                <div className="componentContentFooterContato">
                                        <h4>Contato:</h4>
                                        <div className="componentContentFooterContatoSocial-1">
                                            <a  className="componentContentFooterContatoSocial-1" 
                                                href="https://web.whatsapp.com/"
                                                target="blank">
                                                 <img className="whattzap" src={Whattzap} />
                                                 <p className="contactZap">Tel: (071) 98106-3448</p>
                                            </a>
                                        </div>
                                        <div className="componentContentFooterContatoSocial-2">
                                            <a className="componentContentFooterContatoSocial-2"
                                                href="https://www.facebook.com/profile.php?id=100039697203669"
                                                target="blank">
                                                <img className="facebook" src={Facebook} />
                                                <p className="contactFace">Leonardo Sousa</p>
                                            </a>
                                        </div>{/**aqui */}
                                        <div className="componentContentFooterContatoSocial-3">
                                            <a className="componentContentFooterContatoSocial-3"
                                                href="https://www.facebook.com/Torre.Digital989/"
                                                target="blank">
                                                <img className="facebook" src={Facebook} />
                                                <p className="contactFace">Loja (Torre-Digital)</p>
                                            </a>
                                        </div>
                                        <div className="componentContentFooterContatoSocial-4">
                                                <a className="componentContentFooterContatoSocial-4">
                                                    <img className="instagram" src={Instagram} />
                                                    <p className="contactInsta">Leonardo Sousa</p>
                                                </a>
                                        </div>
                                        <div className="componentContentFooterContatoSocial-5">
                                                <a className="componentContentFooterContatoSocial-5"
                                                    href="https://www.instagram.com/torre.digital77/?hl=en"
                                                    target="blank">
                                                    <img className="instagramTorre" src={Instagram} />
                                                    <p className="contactInsta">Loja (Torre-Digital)</p>
                                                </a>

                                        </div>
                                        <div className="componentContentFooterContatoSocial-6">
                                                <a className="componentContentFooterContatoSocial-6"
                                                    href="https://twitter.com/LeoSant97854129"
                                                    target="blank">
                                                    <img className="twitter" src={Twitter} />
                                                    <p className="contactTwitter">Leo Santos</p>
                                                </a>

                                        </div>

                                        
                                        <div className="componentFooterTecnologias">
                                            <h5>
                                                Tecnologias usadas:
                                            </h5>

                                            <di className="componentFooterTecnologiasDescription">
                                                <img className="tec" src={Html}/>
                                                <img className="tec" src={Css}/>
                                                <img className="tec" src={Ecma}/>
                                                <img className="tec" src={Node}/>
                                                <img className="tec" src={ReactImg}/>
                                                <img className="tec" src={Firebase}/>
                                                <img className="tec" src={Bootstrap}/>
                                            </di>
                                        </div>
                                </div>

                                
                                <div className="componentContentFooterFormulario">
                                        <h4>Preencha o formulário para atendimento:</h4>

                                       <div className="componentFooterName">
                                            <img  className="CanetaImg" src={Caneta}/>
                                            <input
                                             type="text"
                                             className="put"
                                             placeholder="Digite seu nome:"
                                             value={this.state.nome}
                                             onChange={this.save}
                                             name="nome"
                                             />
                                       </div>
                                       <div className="componentFooterFone">
                                            <img className="FoneImg" src={Fone}/>
                                            <input 
                                            type="text"
                                            className="put"
                                            placeholder="Digite seu telefone para contato:"
                                            value={this.state.tel}
                                            onChange={this.save}
                                            name="tel"
                                            />
                                      </div>
                                       <div className="componentFooterMail">
                                            <img className="MailImg" src={Mail}/>
                                            <input 
                                            type="text"
                                            className="put"
                                            placeholder="Digite seu email:"
                                            value={this.state.email}
                                            onChange={this.save}
                                            name="email"
                                            />
                                       </div>
                                       <div className="componentFooterText">
                                            <textarea 
                                             type="text"
                                             className="textContact"
                                             placeholder="Aqui descreva seu projeto,dúvidas ou criticas:"
                                             value={this.state.texto}
                                             onChange={this.save}
                                             name="texto"
                                             />
                                       </div>
                                       
                                       <div className="componentFooterButtonAction">
                                            <button className="enviar" onClick={this.send}>Enviar</button>
                                            <button className="limpar" onClick={this.clear}>Limpar</button>
                                       </div>
                                </div>
                       </div>
                    </div>

             
                                            {  /**   responsividade  */  }


                <div className="componentContentLittleDevices">
                    <h1>
                        little devices
                    </h1>


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
                                            <strong className="servico">Serviço:</strong> Criação de site de exibição (somente uma página e interação minima)! <span>200,00R$</span>
                                            <strong className="servico">Serviço:</strong> Criação de aplicativo! A combinar!
                                            <strong className="combo">Combo:</strong>  Site + Aplicativo!  A combinar com <span>30% de desconto cada!</span>
                                        </div>
                                </div>
                            </div>

                            <div  className="ComponentContentContentMe">
                            <div className="componentMeCard">
                                    <h3 className="componentContentTitle" >Quem eu sou:</h3>
                                    <img className="componentContentProfile" src={Profile} />
                                    <div className="componentContentProfileDescriptionSkills">
                                            <p className="componentContentProfileDescriptionSkillsText">
                                                Olá a todos! Meu nome é <strong className="me">Leonardo Sousa.</strong>
                                                Sou formado em Logística pela <strong className="university">Unijorge&copy;</strong>
                                                e estou me pós-graduando em Engenharia de software para dispositivos móveis pela
                                                <strong className="university">Uninter&copy;</strong>.
                                                Sou profissional de manutenção em computadores a mais de 8 anos e possuo
                                                experiência também no setor varejista de alimentos, o que me levou a escolha do curso de 
                                                minha 1° graduação.
                                                Trabalho com desenvolvimento de aplicativos e web sites como este,
                                                que construi.
                                                Possuo uma base sólida em fazer meus serviços fundamentados
                                                em minha melhor performance, gerando aos meus clientes competitividade e desempenho com suas 
                                                ferramentas. 
                                            </p>
                                    </div>
                                </div>
                            </div>
                       </div>


                        <div className="componentContentFooterLittleDevices">
                                        
                        </div>  


                     </div>

                  
                        

                   
                    
                                          {  /**   responsividade  */  }









                      <div className="componentContentCopy">
                                <p></p> <hr />
                                <p>&copy; 2021 Site criado por  
                               
                                    <a className="meLinkedin"
                                        href="https://linkedin.com/in/leonardo-dos-santos-sousa-238651173" 
                                        target="blank">
                                        Leonardo Sousa
                                    </a>
                            </p>
                       </div>


            </div>
        )
    }
}