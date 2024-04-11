import { Component } from '@angular/core';
import { RapportService } from './rapport.service';

@Component({
  selector: 'app-rapport-form',
  templateUrl: './rapport-form.component.html',
  styleUrls: ['./rapport-form.component.css']
})
export class RapportFormComponent {
  contenu: string = ''; // Initialisez contenu ici

  constructor(private rapportService: RapportService) { }

  createRapport(): void {
    this.rapportService.createRapport(this.contenu)
      .subscribe(rapport => {
        console.log('Rapport créé avec succès :', rapport);
        // Vous pouvez ici gérer les résultats comme vous le souhaitez, par exemple afficher un message de succès à l'utilisateur
      });
  }
}
