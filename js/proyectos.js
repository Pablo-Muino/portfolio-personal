/**
 * Clase que genera las "tarjetas" de los proyectos para después insertarlas en su contenedor dentro de proyectos.html
 */
const proyectoActual = new Tarjeta(     //Se crea la constante proyectoActual donde se especifica y almacena la información la información del proyecto actual
        "Portfolio Personal",
        "Portfolio personal plasmado en una página web, realizado a mano, usando HTML, CSS y JavaScript. Página web de caracter responsive adaptable tanto para ordenadores como pará dispositivos móviles o tablets.",
        "HTML · CSS · JavaScript · Git · GitHub",
        "img/img_portfolio.png"
    );

const proyectos = [     //Se crea la constante proyectos donde se especifican y almacenan la información de los proyetos que se quieren crear
    new Tarjeta(
        "ProCinema",
        "Aplicación de escritorio realizada en C# con Windows Forms y persistencia SQL Server, desarrollada como proyecto final del grado DAM.",
        "C# · .NET Framework · Windows Forms · SQL Server · DataSet tipado · Git · GitHub",
        "img/logo_Procinema.png"
    )
];

// Se obtienen los contenedores de las tarjetas
const contenedorProyectoActual = document.querySelector("#proyectoActual");
const contenedorProyectos = document.querySelector("#proyectos");

//Se genera la tarjeta del proyecto actual
contenedorProyectoActual.insertAdjacentHTML(
    "afterbegin",
    proyectoActual.generarProyecto()
);

//Se recorren los demás proyectos y se generan sus tarjetas
proyectos.forEach(proyecto => {
    contenedorProyectos.insertAdjacentHTML(
        "afterbegin",
        proyecto.generarProyecto()
    );
});