// import { Component, OnInit } from '@angular/core';
// import { Avis } from './models/avis.model';
// import { AvisService } from './avis.service';
// import { Subscription } from 'rxjs';

// @Component({
//   selector: 'app-avis',
//   templateUrl: './avis.component.html',
//   styleUrls: ['./avis.component.css']
// })
// export class AvisComponent implements OnInit {
//   avis: Avis[] = [];
//   loading = true;
//   error = '';

//   avisSubscription: Subscription | undefined;

//   constructor(private avisService: AvisService) {}

//   ngOnInit(): void {
//     this.fetchAvis();
//   }

//   fetchAvis(): void {
//     this.loading = true;
//     this.avisSubscription = this.avisService.getAvis().subscribe({
//       next: (avis: Avis[]) => {
//         this.avis = avis;
//         this.loading = false;
//       },
//       error: (error: any) => {
//         console.error('Une erreur est survenue lors de la récupération des avis :', error);
//         this.loading = false;
//         this.error = 'Une erreur est survenue lors de la récupération des avis.';
//       }
//     });
//   }

//   ngOnDestroy(): void {
//     if (this.avisSubscription) {
//       this.avisSubscription.unsubscribe();
//     }
//   }
// }


// Dans le fichier TypeScript de votre composant Angular
import { Component, OnInit } from '@angular/core';
import { Avis } from './models/avis.model';
import { AvisService } from './avis.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {
  avis: Avis[] = [];
  classValue: string = ''; // Nouvelle propriété pour stocker la valeur de la classe
  loading = true;
  error = '';

  avisSubscription: Subscription | undefined;

  constructor(private avisService: AvisService) {}

  ngOnInit(): void {
    this.fetchAvis();
  }

  fetchAvis(): void {
    this.loading = true;
    // Utilisez la valeur de la classe pour récupérer les avis
    this.avisSubscription = this.avisService.getAvis(this.classValue).subscribe({
      next: (avis: Avis[]) => {
        this.avis = avis;
        this.loading = false;
      },
      error: (error: any) => {
        console.error('Une erreur est survenue lors de la récupération des avis :', error);
        this.loading = false;
        this.error = 'Une erreur est survenue lors de la récupération des avis.';
      }
    });
  }

  ngOnDestroy(): void {
    if (this.avisSubscription) {
      this.avisSubscription.unsubscribe();
    }
  }
}
