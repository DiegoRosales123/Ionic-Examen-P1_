import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-SIGNUP',
  templateUrl: './SIGNUP.page.html',
  styleUrls: ['./SIGNUP.page.scss'],
})
export class SIGNUPPage {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  register() {
    if (this.password === this.confirmPassword) {
      const user = {
        email: this.email,
        password: this.password,
      };

      console.log('Datos de usuario a almacenar:', user); // Agrega esta línea

      // Guardar el usuario en el LocalStorage
      localStorage.setItem('userData', JSON.stringify(user));

      // Redirigir al usuario a la página de inicio de sesión (login)
      this.router.navigate(['/login']);
    } else {
      console.log('Las contraseñas no coinciden');
      // Puedes mostrar un mensaje de error al usuario si las contraseñas no coinciden
    }
  }
}
