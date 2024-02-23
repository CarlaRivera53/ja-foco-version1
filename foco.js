// se ejecuta al cargar la pagina completa 
window.addEventListener('load', function(){
//llamda a la funcion foco()
// observe como puede estar la declaracion abajo de la llamada 
foco();
});
function foco(){
    // le agrega una clase al body 
    document.querySelector('body').classList.add('ocuridad');

//agrega el titulo
const titulo =document.createElement("h1");
titulo.classList.add("titulo");
const anio = new Date().getFullYear();
titulo.innerText = `Demostraciones de desarrollo web ${2024}`;
document.body.appendChild(titulo);

const img = document.createElement("img"); //crea un elemento html
img.classList.add('foco');
img.setAttribute('src', 'images/foco-apagado.jpg');

// agregamos una funcion en el evento click
img.addEventListener('click',() =>{
    //busca si la cadena 'apagado' esta en el atributo src
    if (img.src.indexOf("apagado")> 0){
        //cambiamos la imagen y el fondo
        img.setAttribute('src', ' images/foco-prendido.jpg');
        Document.body.classList.remove('oscuridad');
        DocumentTimeline.body.classList.add('luz');
    } else {
        //cambiamos la imagen y el fondo 
        img.setAttribute('src', 'images/foco-apagado.jpg');
        document.body.classList.remover('luz');
        document.body.classList.add('oscuridad');
    }

});
//agrega la imagen al dom
document.body.appendChild(img);
}
