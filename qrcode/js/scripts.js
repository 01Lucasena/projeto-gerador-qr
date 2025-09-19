//DOM
const url = document.querySelector("#url")
const botao = document.querySelector("#qr-button")
const qrcode = document.querySelector("#qr-code")


//Eventos
botao.addEventListener("click",gerar_qrcode)
url.addEventListener("keydown",(event)=>{
    if(event.key == 'Enter'){
        gerar_qrcode()
    }
})



//Funçoes
function gerar_qrcode(){
    
    texto = url.value
    
    if(texto){
        qrcode.innerHTML = ''
        code = new QRCode(qrcode,{
            text:texto,
            width:200,
            height:200,
            colorDark:'rgba(0,0,0,0)',
            colorLight:'black',
        }
        ) 
    }
}

