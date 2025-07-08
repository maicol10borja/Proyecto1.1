import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  // Aquí puedes agregar propiedades y métodos específicos del footer si es necesario
  currentYear: number = new Date().getFullYear();

  constructor() {
    // Puedes inicializar cualquier lógica aquí si es necesario
  }

}
