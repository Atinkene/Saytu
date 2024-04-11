import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coord-pedagogique',
  templateUrl: './coord-pedagogique.component.html',
  styleUrl: './coord-pedagogique.component.css'
})
export class CoordPedagogiqueComponent {
  @ViewChild('rapport') rapportElement!: ElementRef;
  @ViewChild('pv') pvElement!: ElementRef;
  @ViewChild('rapportform') rapportformElement!: ElementRef;
  @ViewChild('pvform') pvformElement!: ElementRef;

  constructor(private authService: AuthService, private router: Router) { }

  scrollToRapport(): void {
    this.rapportElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToPv(): void {
    this.pvElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToRapportform(): void {
    this.rapportformElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToPvform(): void {
    this.pvformElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  
  ngOnInit(): void {
  }
}
