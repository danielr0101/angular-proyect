/*import { Subject } from "rxjs";

export class LibrosService {
  librosSubjects = new Subject<string[]>();

  private libros = [
    "Mi libro",
    "Odisea",
    "Iliada"
  ];

  agregarLibro(libroNombre: string) {
    this.libros.push(libroNombre);
    console.log(this.libros);
    this.librosSubjects.next([...this.libros]);  // Emitir la lista completa
    console.log(this.libros);
  }

  eliminarLibro(libroNombre: string) {
    console.log(libroNombre);
    console.log([this.libros]);
    this.libros = this.libros.filter(x => x !== libroNombre);
    this.librosSubjects.next([...this.libros]);  // Emitir la lista completa después de eliminar
    console.log([...this.libros]);
  }

  obtenerLibros() {
    return [...this.libros];
  }
}*/
import { BehaviorSubject } from "rxjs";

export class LibrosService {
  librosSubjects = new BehaviorSubject<string[]>([]);  // Inicializa como un array vacío

  private libros = [
    "Mi libro",
    "Odisea",
    "Iliada"
  ];

  constructor() {
    // Emitimos la lista inicial de libros al BehaviorSubject
    this.librosSubjects.next([...this.libros]);
  }

  agregarLibro(libroNombre: string) {
    this.libros.push(libroNombre);
    this.librosSubjects.next([...this.libros]);  // Emitir la lista completa como una copia
    console.log(this.libros);
  }

  eliminarLibro(libroNombre: string) {
    this.libros = this.libros.filter(x => x !== libroNombre);
    this.librosSubjects.next([...this.libros]);  // Emitir la lista completa después de eliminar
    console.log(this.libros);
  }

  obtenerLibros() {
    return [...this.libros];  // Devolvemos una copia del array
  }
}

