# Consumir API

Api utilizada: https://randomuser.me/
Documentación oficial de Fetch Api: https://developer.mozilla.org/es/docs...

Fetch: Trabaja a traves de las url. Trabajaremos con una pagina llamada ramdon user generation.

HOW TO USE:
Usa ajax un metodo de query. 

$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});
    
Como usaremos fetch, de lo anterior solo nos interesa la url. La pegamos en otra pestaña y observamos que es un JSON.
Haremos una llamada a la url y nos traera esta informacion.

----
Cuando trabajamos con archivo txt, necesitamos una funcion con  nombre inventado "traer()" para el boton que debe ejecutar el onclick. Como queremos traer el archivo. Fetch trabaja con el metodo get (leer la url extera y traernos algo) y enviamos la info a travaes del post. Al ser una api publica usamos directamente la url. Si fuese privada como google necesitaras una llava (apikey).
<!--Create button dentro de un container   
    <div class="container my-5 text-center">
        <button class="btn btn-danger w-100" onclick="traer()">Obtener</button>
        <div class="mt-5" id="contenido">
        <p></p> -- > quiero manipular este parrafo dentro de la funcion traer en el script!
        </div>
    </div>
    <script>

    para capturar el contenido usamos queryselector.
    var contenido = docuemnt.querySelector('#contenido')  -- capturamos el div en una variable llamada contenido
    
    function traer(){
      porque cuando hacenos onclick en el boton se ejecuta lo que esta adentro.
      contenido.innerHTML= ``;    -- > con las comillas mezclamos templates literarios. 
      Dentro de ahi pongo lo que quiera, ejemplo 
       contenido.innerHTML= `<p>hola</p> `;  y consola me pinta el hola
     
    }

     pero,
      como quiero traer/leer un archivo externo. Ocupamos fetch api. 

      var contenido = docuemnt.querySelector('#contenido')      
      function traer(){
         fetch('texto.txt')   -- primero ocupamos un fetch y dentro del parentesis la url de destino o directorio raiz.
            .then(data => data.text()) -- hacemos una preomesa que os estamos trayendo/capturando un dato que viene en formato txt, tenemos que transformarlo en algo que nosotros podamos leer data.txt()
            .then(data=> {
                console.log(data) 
                pero commo sabemos pintar  el contendido de una variable lo hacemos con inner.HTML con el nombre de la variable.
                contenido.innerHTML= `${data}`;   y colocamos simplemente la data (una variable dentro de un html)
    </script>
--> 

# 03 - TablaJSON.
Como usar fetch con tablas!
para trabajar con variables dentro de un ciclo, lo replicamos usando el simbolo de dolar y las llaves. ${} dentro coloco los elementos que quiero oobtener. 
el tru or false debemos hacer una sentenia condicional del if en linea dentro de un template, es la magia de ocupar este tipo de comillas. cada vez que cambiamos algo de la tabla .json lo obtendremos. (info dinamica)
Ejemplo si esto ? es verdadero pintame el string sino ; pintame falso. el segundo string. Osea separamos lo verdadero de lo falso en dos puntos.

Queremos obtener todos los datos desde nuestro archivo JSON a través de una tabla de forma ordenada.
Es clave para pasar al JSON  a una base de datos. Y poder leer esta info desde mysql y hacer todas las operaciones del CRUD ( desde leer, crear, eliminar y agregar).

Como es un array de objetos comienza con [] y encerrado cada objeto en {} es decir; [{}].

# Metodo POST.

Crear un formulario sencillo con el metodo POST.
1- Iniciamos el servidor.
2- Creamos nuestro archivo index.html (estructura basica de bootstrap), crearemos el formulario de contacto.
Creamos un container de margen 5 con etiqueta form, el action lo vamos a ejecutar con JS. Colocamos el input de tipo text, usuario, y un placeholder. Este form imagina que es para el registro de tu sistema. Lo replicamos y hacemos otro tipo password y name pass. El placeholder es una ayuda para el usuario ejemplo: "ingresa contraseña"
el button ede clase btn-btn- primary, debe ser de tipo submit (algo nuevo de js). id formulario de dos inputs y un boton, Las claves son los name, y que sea tipu submit el boton.
agregamos una etiqueta de "formulario fecth api"
debemos vincular el archivo php con js.

3- app.js (probemos con un console.log que este funcionando). La forma mas sencilla es el id que le coloque al formulario.
HAcemos un documente.getElementebyId de quien? del formulario. Queremos detectar cuando el usuario presione el boton.
Generalmente usabamos onclick pero trabajar con eventos en js es uan forma mas elegante de hacerlo.
Gaurdamos formulario en una variable addEventListener decimos "agregame un evento" cual? el submit! y cuando alguien presione el formulario el submit hara la funcion. Por eso le agregamos ese atributo a muestro boton.

4- post.php (sera el que va a enviarme la respuesta). 
Quiero que los campos se envien directamente a este archivo. 
1. Agregamos la etiqueta php --> <?php 
2. Creamos unas variables $usuario que sera igual al metodo post, lo que viajara es el name de post y name de pass. 
En php guardamos el usuario dentro de una variable.
Si las variables existen podemos hacer validaciones. Pero me importa es generar una accion asi que enviamos una respuesta con una condicional. Preguntaos que si usuario es igual a un campo vacio o la contraseña viene como un string vacio que realice la sgte accion. "llena todos los campos". Si vieen algo enviamos alas respuestas ede los jsonencode.
//para detectar los campos que se escriben en los inputs. Lo explicito es colocar un new con un nombre en mayuscula le incorpioras el formulario. Como es variable no le colocas las comillas.
//Lo que hacemos es colocar "una nueva información"
   var datos = new FormData(formulario);

   <!-- console.log(datos)  //a este punto revisamos en protpype en consola los elementos nos cuesta ubicarlos. Como se que estos datos se estan pintando/guardando?
    //colocamos console de datos.get y le pasamos el name "usuario"
    console.log(datos.get('usuario'))  //detecto lo que me dice el usuario
    console.log(datos.get('pass')) //hasta aqui hemos detectado los inputs y creamos un nuevo formData. 

    //todo lo anterior hay que mandarlo a un fetch a traves de un form (archivo.)
    //Fetch recibe una url y como tenemos el post en nuestro archivo php lo usamos que esta dentro de nuestro directorio.
    fetch('post.php',{
        method: 'POST',
        body: datos
    })
        .then( res => res.json())
        .then( data => {
            console.log(data) //pintamos la data
            if(data === 'error'){ 
             respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Llena todos los campos
                </div>
                `
            }else{
                //si no hay error pintamos la respuesta con el signo $ y pintamos la data la info de nuestro archivo php
                respuesta.innerHTML = `
                <div class="alert alert-primary" role="alert">
                    ${data}
                </div>
                `
            }
        })
})-->

