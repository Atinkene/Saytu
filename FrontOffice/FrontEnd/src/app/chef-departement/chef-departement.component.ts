import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chef-departement',
  templateUrl: './chef-departement.component.html',
  styleUrl: './chef-departement.component.css'
})
export class ChefDepartementComponent {
  @ViewChild('rapport') rapportElement!: ElementRef;
  @ViewChild('pv') pvElement!: ElementRef;
  
  constructor(private authService: AuthService, private router: Router) { }

  scrollToRapport(): void {
    this.rapportElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  scrollToPv(): void {
    this.pvElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  ngOnInit(): void {
  }
}
