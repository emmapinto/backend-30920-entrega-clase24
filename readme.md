# Desafio Clase 24: COOKIES y SESSION

## Iniciar proyecto con "node app.js"

### Consigna: LOG-IN POR FORMULARIO

<ul>
    <li>Incorporar un mecanismo sencillo que permita loguear un cliente por su nombre, mediante un formulario de ingreso.</li>
    <li>Luego de que el usuario esté logueado, se mostrará sobre el contenido del sitio un cartel con el mensaje “Bienvenido” y el nombre de usuario. Este cartel tendrá un botón de deslogueo a su derecha.</li>
    <li>Verificar que el cliente permanezca logueado en los reinicios de la página, mientras no expire el tiempo de inactividad de un minuto, que se recargará con cada request. Fijar un tiempo de expiración de sesión de 10 minutos recargable con cada visita del cliente al sitio. En caso de alcanzarse ese tiempo, el próximo request de usuario nos llevará al formulario de login. </li>
    <li>Al desloguearse, se mostrará una vista con el mensaje de 'Hasta luego' más el nombre y se retornará automáticamente, luego de dos segundos, a la vista de login de usuario.</li>
    <li>Las sesiones de usuario persisten en Mongo Atlas. Los datos almacenados en session se borran al cerrar la ventana del navegador.</li>
</ul>
