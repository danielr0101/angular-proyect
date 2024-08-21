export class LibrosService {
  private libros = [
    "Mi libro",
    "Odisea",
    "Iliada"
  ];

  agregarLibro(libroNombre: string) {
    this.libros.push(libroNombre);
  }

  obtenerLibros() {
    return [...this.libros];
  }

}
