// // emploi-du-temps.component.ts

// import { Component, OnInit } from '@angular/core';
// import { Planning } from './models/planning.model';
// import { PlanningService } from './planning.service';
// import { EffectiviteService } from './effectivite.service';

// @Component({
//   selector: 'app-emploi-du-temps',
//   templateUrl: './emploi-du-temps.component.html',
//   styleUrls: ['./emploi-du-temps.component.css']
// })
// export class EmploiDuTempsComponent implements OnInit {
//   timeSlots: string[] = ['08H-10H', '10H-12H', '12H-14H30', '14H30-16H30', '16H30-18H30'];
//   daysOfWeek: string[] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
//   planningData: Planning[][] = [];

//   constructor(private planningService: PlanningService, private effectiviteService: EffectiviteService) {}

//   ngOnInit(): void {
//     this.fetchPlanningData();
//   }

//   fetchPlanningData(): void {
//     this.planningService.getPlanningData().subscribe(data => {
//       console.log('Données récupérées depuis le service :', data);
//       this.planningData = [];
//       this.timeSlots.forEach(timeSlot => {
//         const timeSlotData: Planning[] = [];
//         this.daysOfWeek.forEach(day => {
//           const course = data.find(course => course.jour === day && course.heure === timeSlot);
//           timeSlotData.push(course || {} as Planning);
//         });
//         this.planningData.push(timeSlotData);
//       });
//       console.log('planningData final :', this.planningData);
//     });
//   }

//   markAsDone(jour: string, heure: string): void {
//     this.effectiviteService.markAsDone(jour, heure).subscribe(() => {
//       this.fetchPlanningData();
//     });
//   }

//   getCourseForDayAndTime(day: string, timeSlot: string): Planning[] {
//     const dayData = this.planningData.find(data => data[0]?.jour === day);
//     return dayData ? dayData.filter(course => course.heure === timeSlot) : [];
//   }
// }

// emploi-du-temps.component.ts

import { Component, OnInit } from '@angular/core';
import { Planning } from './models/planning.model';
import { PlanningService } from './planning.service';
import { EffectiviteService } from './effectivite.service';

@Component({
  selector: 'app-emploi-du-temps',
  templateUrl: './emploi-du-temps.component.html',
  styleUrls: ['./emploi-du-temps.component.css']
})
export class EmploiDuTempsComponent implements OnInit {
  selectedClass: string = ''; // Propriété pour stocker la classe sélectionnée
  timeSlots: string[] = ['08H-10H', '10H-12H', '12H-14H30', '14H30-16H30', '16H30-18H30'];
  daysOfWeek: string[] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  planningData: Planning[][] = [];

  constructor(private planningService: PlanningService, private effectiviteService: EffectiviteService) {}

  ngOnInit(): void {}

  fetchPlanningData(): void {
    if (this.selectedClass) {
      this.planningService.getPlanningDataByClass(this.selectedClass).subscribe(data => {
        console.log('Données récupérées depuis le service :', data);
        this.planningData = [];
        this.timeSlots.forEach(timeSlot => {
          const timeSlotData: Planning[] = [];
          this.daysOfWeek.forEach(day => {
            const course = data.find(course => course.jour === day && course.heure === timeSlot);
            timeSlotData.push(course || {} as Planning);
          });
          this.planningData.push(timeSlotData);
        });
        console.log('planningData final :', this.planningData);
      });
    }
  }

  markAsDone(jour: string, heure: string): void {
    this.effectiviteService.markAsDone(jour, heure).subscribe(() => {
      this.fetchPlanningData();
    });
  }

  getCourseForDayAndTime(day: string, timeSlot: string): Planning[] {
    const dayData = this.planningData.find(data => data[0]?.jour === day);
    return dayData ? dayData.filter(course => course.heure === timeSlot) : [];
  }
}
