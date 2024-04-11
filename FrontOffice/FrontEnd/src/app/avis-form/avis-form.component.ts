import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AvisService } from './avis.service';
import { Avis } from './models/avis.model';

@Component({
  selector: 'app-avis-form',
  templateUrl: './avis-form.component.html',
  styleUrls: ['./avis-form.component.css']
})
export class AvisFormComponent implements OnInit {
  avisList: Avis[] = []; // Initialisation de la propriété avisList avec un tableau vide
  avisForm!: FormGroup;

  constructor(private avisService: AvisService, private fb: FormBuilder) {
    this.avisForm = this.fb.group({
      contenu: ['', Validators.required],
      classe: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadAvis();
  }

  loadAvis(): void {
    this.avisService.getAvis().subscribe(avis => {
      this.avisList = avis;
    });
  }

  submitAvis(): void {
    if (this.avisForm.valid) {
      const newAvis: Avis = this.avisForm.value;
      this.avisService.createAvis(newAvis).subscribe(() => {
        this.loadAvis();
        this.avisForm.reset();
      });
    }
  }
}
