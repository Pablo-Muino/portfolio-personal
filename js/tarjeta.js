/**
 * Clase Tarjeta que define un div en el que se incluirá la información de un proyecto
 */
class Tarjeta {
    
    /**
     * Constructor de la clase
     * @param {*} titulo - Título del proyecto
     * @param {*} descripcion - Descripción corta del proyecto
     * @param {*} tecnologias - Tencologías usadas en el dedsarrollo del proyecto
     * @param {*} imagen - Imagen asociada al proyecto
     */
    constructor(titulo, descripcion, tecnologias, imagen) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.tecnologias = tecnologias
        this.imagen = imagen;
    }

    /**
     * Función que genera el div proyecto a partir de los datos recopilados en el constructor
     * @returns - Elemento HTML "proyecto" con su título, descripción, tecnologías usadas y una imagen de muestra
     */
    generarProyecto() {
        return `
            <div class="proyecto">
                <div class="textos">
                    <h3>${this.titulo}</h3>
                    <p>${this.descripcion}</p>
                    <p class="textoTecnologias">${this.tecnologias}</p>
                    <a>Ver más sobre el proyecto -></a>
                </div>
                <img src="${this.imagen}" alt="Imagen del proyecto ${this.titulo}">
            </div>
        `;
    }
}
