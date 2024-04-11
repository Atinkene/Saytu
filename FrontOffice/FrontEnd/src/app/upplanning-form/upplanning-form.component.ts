// upplanning-form.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UpplanningService } from './upplanning.service';

@Component({
  selector: 'app-upplanning-form',
  templateUrl: './upplanning-form.component.html',
  styleUrls: ['./upplanning-form.component.css']
})
export class UpplanningFormComponent {
  upplanningForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private upplanningService: UpplanningService
  ) {
    this.upplanningForm = this.formBuilder.group({
      className: '',
      jour: '',
      heure: '',
      nomCours: '',
      salle: '',
      prof: '',
      statusCours: ''
    });
  }

  onSubmit(): void {
    const formData = this.upplanningForm.value;
    const { className, jour, heure, ...rest } = formData;
    this.upplanningService.updateUpplanning(className, jour, heure, rest)
      .subscribe(
        (response) => {
          console.log('Updated planning:', response);
          // Handle successful response here
        },
        (error) => {
          console.error('Error updating planning:', error);
          // Handle error response here
        }
      );
  }
}
