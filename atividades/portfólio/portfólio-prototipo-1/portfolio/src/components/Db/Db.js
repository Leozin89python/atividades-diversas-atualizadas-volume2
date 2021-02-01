const BANCO = '_BANCO'

export default class Banco {

    enviar = (formulario) =>    {
      let formularios = localStorage.getItem(BANCO)
      if(!formularios){
          formularios = []
      }else{
            formularios = JSON.parse(formularios)
      }

            formularios.push(formulario)
            localStorage.setItem(BANCO,JSON.stringify(formularios))
    }
}