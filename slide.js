var rad = document.querySelector( '.btnmanual')
var cont = 1 

document.getElementById('rad1').checked = true 

setInterval(() => (
    proximaImg()
), 3000)

function  proximaImg(){
    cont++
    if (cont > 3){
        cont = 1
    }

    document.getElementById('rad'+cont).checked = true 
}