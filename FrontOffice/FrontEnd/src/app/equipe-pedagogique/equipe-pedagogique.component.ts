import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipe-pedagogique',
  templateUrl: './equipe-pedagogique.component.html',
  styleUrl: './equipe-pedagogique.component.css'
})
export class EquipePedagogiqueComponent {
  @ViewChild('rapport') rapportElement!: ElementRef;
  @ViewChild('rapportform') rapportformElement!: ElementRef;

  constructor(private authService: AuthService, private router: Router) { }

  scrollToRapport(): void {
    this.rapportElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToRapportform(): void {
    this.rapportformElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }


  ngOnInit(): void {
  }
}
