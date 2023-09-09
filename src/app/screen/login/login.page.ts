import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';

  constructor(private router: Router) {}

  login() {
    const storedUserDataStr = localStorage.getItem('userData');
    let storedUserData;

    if (storedUserDataStr) {
      storedUserData = JSON.parse(storedUserDataStr);

      // Eliminar espacios en blanco alrededor del correo electrónico antes de comparar
      const trimmedEmail = this.email.trim();
      const storedEmail = storedUserData.email.trim();

      if (trimmedEmail === storedEmail) {
        // El correo electrónico coincide con 'userData', redirigir al usuario a /home
        this.router.navigate(['/home']);
      } else {
        // El correo electrónico no coincide, puedes mostrar un mensaje de error
        console.log('Correo electrónico incorrecto');
      }
    } else {
      // No se encontraron datos de registro, puedes mostrar un mensaje de error o tomar otra acción
      console.log('No se encontraron datos de registro');
    }
  }
}
