/*import { CommonModule } from "@angular/common";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { LibroComponent } from "../libro/libro.component";
import { FormsModule } from "@angular/forms";
import { LibrosService } from "../services/libros.service";
import { Subscription } from "rxjs";


@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule,
    LibroComponent,
    FormsModule],
  templateUrl: './libros.component.html',
  providers: [LibrosService]  // Agrega esta línea
})

export class LibrosComponent implements OnInit , OnDestroy{
  libros: string[] = [];
  private libroSubscription: Subscription = new Subscription;
  constructor(private librosService: LibrosService) {
    this.libros = this.librosService.obtenerLibros();
    console.log('esto se ejecuto');
  }

  eliminarLibro(libro: string) {

  }

  guardarLibro(f: any) {
    if (f.valid) {
      this.librosService.agregarLibro(f.value.nombreLibro);
    }
  }

  ngOnInit(){
    //this.libros = this.librosService.obtenerLibros();
    //this.libroSubscription = this.librosService.librosSubjects.subscribe( () => {

    //    this.libros = this.librosService.obtenerLibros();

    //});
  this.librosService.librosSubjects.subscribe(librosActualizados => {
    this.libros = librosActualizados;
  });
  }

  ngOnDestroy(){
    this.libroSubscription.unsubscribe();
  }

}*/
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { LibrosService } from "../services/libros.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Importa FormsModule aquí
  templateUrl: './libros.component.html'
})
export class LibrosComponent implements OnInit, OnDestroy {
  libros: string[] = [];
  private libroSubscription: Subscription = new Subscription();

  constructor(private librosService: LibrosService) {}

  ngOnInit() {
    // Nos suscribimos para recibir la lista de libros actualizada
    this.libroSubscription = this.librosService.librosSubjects.subscribe(librosActualizados => {
      this.libros = librosActualizados;
    });
  }

  guardarLibro(f: any) {
    if (f.valid) {
      this.librosService.agregarLibro(f.value.nombreLibro);
    }
  }

  eliminarLibro(libro: string) {
    this.librosService.eliminarLibro(libro);  // Llama al servicio para eliminar el libro
  }

  ngOnDestroy() {
    this.libroSubscription.unsubscribe();  // Cancelar la suscripción cuando el componente sea destruido
  }
}
