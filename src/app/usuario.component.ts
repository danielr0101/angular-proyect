import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule],  // Asegúrate de importar CommonModule aquí
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent {
  usuarios = ['Luis', 'Fernando', 'Maria'];  // Lista de usuarios
  usuarioNombre: string = '';  // Inicialmente vacío
  visible = false;


  ngOnInit(): void{
    setTimeout(() => {
      this.visible = true;
    }, 3000);

  }

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.usuarioNombre = inputElement.value;
  }

  onAgregarUsuario(){
    this.usuarios.push(this.usuarioNombre);
    this.usuarioNombre = '';
  }
}

