// console.log('funcionando');

var formulario = document.getElementById('formulario');
var respuesta = document.getElementById('respuesta');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('me diste un click')

   var datos = new FormData(formulario);

    console.log(datos) 
    console.log(datos.get('usuario'))  //detecto lo que me dice el usuario
    console.log(datos.get('pass')) //hasta aqui hemos detectado los inputs y creamos un nuevo formData. 

    fetch('post.php',{
        method: 'POST',
        body: datos
    })
    .then(res => res.json())
    .then(data => {
            console.log(data) 
            if(data === 'error'){ 
             respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Llena todos los campos
                </div>
                `
            }else{
                respuesta.innerHTML = `
                <div class="alert alert-primary" role="alert">
                    ${data}
                </div>
                `
            }
        })
})