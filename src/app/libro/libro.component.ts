import { CommonModule } from "@angular/common";
import { Component, Input, EventEmitter, Output } from "@angular/core";
import { LibrosService } from "../services/libros.service";

@Component({
  selector: 'app-libro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css'],
  providers: [LibrosService]
})
export class LibroComponent {
  @Input() tituloLibro: string = '';

  @Output() libroClicked = new EventEmitter();

  constructor(private librosService: LibrosService){

  }

  onClicked() {

    //this.libroClicked.emit();
    //console.log(this.tituloLibro);
    this.librosService.eliminarLibro(this.tituloLibro);
  }
}
