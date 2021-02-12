let mudeElementoVerdade = () =>{
    let elemento = true
    let valor = elemento
    return valor
}

let mudeElementoFalso =  () =>{
    let elemento = false
    let valor = elemento
    return valor
}


let mudanca = setInterval(objeto = () =>{   
    mudeElementoVerdade()
    mudeElementoFalso()
    
   if(mudeElementoVerdade() ==  mudeElementoVerdade()){
   console.log('value:' +  mudeElementoFalso())
   valor = this.objeto.map(name => name.name)
   console.log(valor)
   
   }if(mudeElementoFalso() == mudeElementoFalso()){
    console.log('value:'+ mudeElementoVerdade())
    valor = this.objeto.map(mail => mail.mail)
    console.log(valor)
        
   }
},3000)



this.objeto = [{
        name:'nick'
},{
        mail:123
}]


==================================================================================================================

console.log('=== Intervalo ===')

let intervalo = setInterval(alteracao = () =>{
     (console.log('tempo 1'))
},19989) //2221 * 9 

let intervalo2 = setInterval(alteracao = () =>{
    (console.log('tempo 2'))
},29016) //*3224 * 9

let intervalo3 = setInterval(alteracao = () =>{
    (console.log('tempo 3'))
},47043) //5227 * 9

/*
curiosidade em programação
o método assincrono (async( ) await( )) permite uma performance em 
tempo de execução onde cada task(tarefa) pode acontecer simultaneamente 
sem atraso na entrega de pacotes(online) */

/*
deve-se calcular tempos que não colidam
e possam operar a mudança com melhor 
performance possível
*/