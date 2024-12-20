import { Component } from '@angular/core';
import { AthentificationService } from '../athentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AthentificationService , private router: Router ) {}

  login(data: any): void {
    // Vérifiez si les champs nécessaires sont présents avant d'envoyer la requête
    if (!data.email || !data.password) {
      console.error('Les champs email et password sont requis.');
      return;
    }

    this.authService.singin(data).subscribe(
      (response) => {
        console.log('Réponse reçue:', response);

        // Vérifiez si user et role existent avant de les utiliser
        if (response && response.user && response.user.role) {
          // Stockage des informations dans le localStorage
          localStorage.setItem('access_token', response.accessToken);
          localStorage.setItem('role', response.user.role);
          if (response.user.role === 'ROLE_ADMIN') {
            this.router.navigate(['/dashboard']);
          }
        }
      },
      (error) => {
        // Gestion des erreurs serveur ou réseau
        if (error.status === 400) {
          console.error('Requête invalide. Vérifiez les données envoyées.');
        } else {
          console.error('Erreur lors de la connexion :', error);
        }
      }
    );
  }
}
