<?php

$usuario = $_POST['usuario'];
$pass = $_POST['pass'];

//recibir las respuestas y trasnformamos el jsonencode para enviar la resp en formato json y procesar con fetch api
if($usuario === '' || $pass=== ''){
    echo json_encode('error');  //el error lo pintamos con js en respuesta
}else{
    echo json_encode('Correcto: <br>Usuario:'.$usuario.'<br>Pass:'.$pass); //.$usuario y .$pass son las variables declaradas al inciio.
}