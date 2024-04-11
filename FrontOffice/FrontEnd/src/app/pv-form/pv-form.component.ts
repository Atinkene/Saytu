// pv-form.component.ts

import { Component } from '@angular/core';
import { PvService } from './pv.service';

@Component({
  selector: 'app-pv-form',
  templateUrl: './pv-form.component.html',
  styleUrls: ['./pv-form.component.css']
})
export class PvFormComponent {
  contenu: string = ''; // Initialisation de la propriété contenu

  constructor(private pvService: PvService) {}

  onSubmit() {
    this.pvService.createPv(this.contenu)
      .subscribe({
        next: (response) => {
          console.log('PV créé avec succès :', response);
          // Vous pouvez afficher un message de succès ou rediriger l'utilisateur vers une autre page ici
        },
        error: (error) => {
          console.error('Erreur lors de la création du PV :', error);
          // Gérer les erreurs ici, afficher un message d'erreur à l'utilisateur, etc.
        }
      });
  }
}
