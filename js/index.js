/**
 * Clase que genera las "tarjetas" de los proyectos para después insertarlas en su contenedor dentro de index.html
 */
const proyectos = [     //Se crea la constante proyectos donde se especifican y almacenan la información de los proyetos que se quieren crear
    new Tarjeta(
        "Portfolio Personal",
        "Portfolio personal plasmado en una página web, realizado a mano, usando HTML, CSS y JavaScript. Página web de caracter responsive adaptable tanto para ordenadores como pará dispositivos móviles o tablets.",
        "HTML · CSS · JavaScript · Git · GitHub",
        "img/img_portfolio.png"
    ),

    new Tarjeta(
        "ProCinema",
        "Aplicación de escritorio realizada en C# con Windows Forms y persistencia SQL Server, desarrollada como proyecto final del grado DAM.",
        "C# · .NET Framework · Windows Forms · SQL Server · DataSet tipado · Git · GitHub",
        "img/logo_Procinema.png"
    )
];

// Se obtiene el contenedor de las tarjetas
const enlaceProyectos = document.querySelector(".enlaceProyectos");

//Se recorren los proyectos y se genera su tarjeta
proyectos.forEach(proyecto => {
    enlaceProyectos.insertAdjacentHTML(
        "beforebegin",
        proyecto.generarProyecto()
    );
});
