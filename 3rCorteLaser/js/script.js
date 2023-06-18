// Home

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 6000);

function nextImage(){
   
    count++;
    if(count > 8){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
   
}

                                 //modal pra galerias das fotos
function clickModal(img){
    var modalJ = document.querySelector("#janelaModal");
    var modalI = document.querySelector("#imgModal");
  var body = document.querySelector('body')
    modalJ.style.display = 'block'
    body.style.overflow ='hidden'
    modalI.src=img;
   
    
}


function fecharModal(){
  var modalJ = document.querySelector("#janelaModal");
  var body = document.querySelector('body')
modalJ.style.display = 'none';
body.style.overflowY ='scroll';
}
// FIM modal pra galerias das fotos
                                    //Fim HOME
                                        // CALCULADORA



function calcular(){
   
    const compr = window.document.querySelector('#comp');
    const lar = window.document.querySelector('#lar');
    const esp  = window.document.querySelector('#esp');
    const pespc = window.document.querySelector('.pesopc');
  
     
 
     if(compr.value.length == 0 || lar.value.length == 0 || esp.value.length == 0 ){
         window.alert('[ERRO] Preencha o Campo Corretamente!!!')
         
     }else{
       const selec = document.getElementsByName('radsex')
       const mm = Number(esp.value)
       const y = Number(lar.value)
       const x = Number(compr.value)
   
         
         var material = ''
 
         if(selec[0].checked){
             material = 'Carbono'
            const som = Number.parseInt(y*x*mm *7.85/10000)
            pespc.innerHTML = `${som.toFixed(1).replace(',')} = kilo Por Cada Chapa`
           
 
        }else if(selec[1].checked){
         material = 'Inox'
        const som = Number.parseInt(y*x*mm *7.85/10000)
         pespc.innerHTML = `${som.toFixed(1).replace(',')} = kilo Por Cada Chapa`
 
        }else if(selec[2].checked){
         material = 'Aluminio'
        const som = Number.parseInt(y*x*mm *2.71/10000)
         pespc.innerHTML = `${som.toFixed(1).replace(',')} = kilo Por Cada Chapa`
 
        }
 
     }
}


                                     
                                     
// FIM DA CALCULADORA



//menu mobile

 
    

       
     
  function btn(){
    var container = document.querySelector(".mobile_nav");
    if(container.style.display === 'block'){
 container.style.display = 'none'
                
 }else{
 container.style.display = 'block'
            
 }
  }
    


                                        //fim do menu mobile