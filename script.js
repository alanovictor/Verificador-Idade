function verificar() {
    let datahoje = new Date()
    let ano = datahoje.getFullYear()
    let anof = document.querySelector('input#txtano')
    let res = document.querySelector('div#res')
    if ( anof.value.length == 0 || Number(anof.value) > ano ){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        
        let fsex = document.getElementsByName('radsex')
        let idade = Number(ano) - Number(anof.value)
        let gener = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gener = 'Homem'
            if (idade >= 0 && idade < 3){
            //bebe
            img.setAttribute('src', 'imagens/bebe-m.png')
            }   else if (idade >= 3 && idade < 11){
                //criança
                 img.setAttribute('src', 'imagens/crianca-m.png')
                }   else if(idade < 18){
                    //adolescente
                    img.setAttribute('src', 'imagens/adolescente-m.png')
                     } else if(idade < 35){
                        //jovem
                        img.setAttribute('src', 'imagens/jovem-m.png')
                        }   else if(idade < 61){
                            //adulto
                            img.setAttribute('src', 'imagens/adulto-m.png')
                            }   else{
                                    //idoso
                                    img.setAttribute('src', 'imagens/idoso-m.png')
                                }
          
        } else if (fsex[1].checked) {
            gener = 'Mulher'
            if (idade >= 0 && idade < 3){
                //bebe
                img.setAttribute('src', 'imagens/bebe-f.png')
                }   else if (idade >= 3 && idade < 11){
                    //criança
                    img.setAttribute('src', 'imagens/crianca-f.png')
                    }   else if(idade < 18){
                        //adolescente
                        img.setAttribute('src', 'imagens/adolescente-f.png')
                         } else if(idade < 35){
                            //jovem
                            img.setAttribute('src', 'imagens/jovem-f.png')
                            }   else if(idade < 61){
                                //adulto
                                img.setAttribute('src', 'imagens/adulto-f.png')
                                }   else{
                                        //idoso
                                        img.setAttribute('src', 'imagens/idoso-f.png')
                                    }
        }
        res.style.textAlign= 'center'
        res.innerHTML = `Detectamos ${gener} com idade de ${idade} anos`
        res.appendChild(img)
    }
    


}