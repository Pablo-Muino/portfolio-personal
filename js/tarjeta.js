class Tarjeta {
    /*

    */
    constructor(titulo, descripcion, tecnologias, imagen) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.tecnologias = tecnologias
        this.imagen = imagen;
    }

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
