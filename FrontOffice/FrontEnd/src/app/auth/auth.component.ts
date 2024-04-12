
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  private authSubscription: Subscription | undefined;

  constructor(private authService: AuthService,  private router: Router) { }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.authSubscription = this.authService.authenticate(form.value.username, form.value.password)
        .subscribe({
          next: (response) => {
            // Traitez la réponse de l'endpoint auth ici (succès d'authentification)
            console.log('Authentification réussie', response);
            if (response.status === 'resp_class') {
              this.router.navigate(['/resp_class'])
            }else if (response.status === 'resp_pedagogique') {
              this.router.navigate(['/resp_pedagogique'])
            }else if (response.status === 'coord_pedagogique') {
              this.router.navigate(['/coord_pedagogique'])
            }else if (response.status === 'equipe_pedagogique') {
              this.router.navigate(['/equipe_pedagogique'])
            }else if (response.status === 'chef_departement') {
              this.router.navigate(['/chef_departement'])
            }else if (response.status === 'dir-etude') {
              this.router.navigate(['/dir-etude'])
            }
            
          },
          error: (error) => {
            // Traitez les erreurs d'authentification ici
            console.error('Erreur lors de l\'authentification', error);
          }
        });
    }
  }

  // ngOnDestroy(): void {
  //   // // Assurez-vous de vous désabonner pour éviter les fuites de mémoire
  //   // if (this.authSubscription) {
  //   //   this.authSubscription.unsubscribe();
  //   // }
  // }
}
