<html> 

<head> 
<title>Guardamos los datos en la base de datos</title> 
<META name='robot' content='noindex, nofollow'> 
</head> 

<body> 
<?php 

// Recibimos por POST los datos procedentes del formulario 

$nombr = $_POST["nombre"];            // Asi recogemos el nombre desde el formulario 
    $nombre = strip_tags($nombr);    // Eliminamos la etiquetas que puedan existir 
    $n_nombre = strlen($nombre);      // Contamos el numero de caracteres 


$total_car = $n_nombre;    // Si alguno de ellos vale 0, $total_car valdrá 0 

if ($total_car >= 1) {  
    // Abrimos la conexion a la base de datos 
    include("../registra.php"); 
     
    $_GRABAR_SQL = "INSERT INTO $tabla_db1 (nombre) VALUES ('$nombre')";  
    mysql_query($_GRABAR_SQL); 
     
    // Cerramos la conexion a la base de datos 
    include("../registra.php"); 
     
    // Confirmamos que el registro ha sido insertado con exito 
     
    echo " 
    <p>Los datos han sido guardados con exito.</p> 
     
    <p><a href='javascript:history.go(-1)'>VOLVER ATRÁS</a></p> 
     
    <p><a href='index2.html' title='Clic aquí'>Ver los resgistros  
     
    guardados</a></p> 
    "; 
     
} else { 
     
    echo " 
    Los campos <b>nombre</b> y <b>email</b> no pueden estar vacios.<br /> 
    <a href=\"javascript:history.go(-1)\">Volver</a> 
    "; 
} 
?> 
</body> 

</html> 