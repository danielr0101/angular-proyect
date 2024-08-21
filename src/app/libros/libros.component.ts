import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { LibroComponent } from "../libro/libro.component";
import { FormsModule } from "@angular/forms";
import { LibrosService } from "../services/libros.service";


@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule,
    LibroComponent,
    FormsModule],
  templateUrl: './libros.component.html'
})

export class LibrosComponent {
  //libros = ['Don Quijote', 'Drácula', 'La Divina Comedia'];
  libros: string[] = [];
  constructor(librosService: LibrosService) {
    this.libros = librosService.obtenerLibros();
  }

  eliminarLibro(libro: string) {
    //this.libros = this.libros.filter(p => p !== libro);
  }

  guardarLibro(f: any) {
    if (f.valid) {
      //this.libros.push(f.value.nombreLibro);
    }
  }

}
