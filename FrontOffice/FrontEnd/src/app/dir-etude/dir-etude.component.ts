import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dir-etude',
  templateUrl: './dir-etude.component.html',
  styleUrl: './dir-etude.component.css'
})
export class DirEtudeComponent {
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
