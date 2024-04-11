import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resp-pedagogique',
  templateUrl: './resp-pedagogique.component.html',
  styleUrl: './resp-pedagogique.component.css'
})
export class RespPedagogiqueComponent {
  @ViewChild('avis') avisElement!: ElementRef;
  @ViewChild('upplanning') upplanningElement!: ElementRef;
  constructor(private authService: AuthService, private router: Router) { }

  scrollToAvis(): void {
   this.avisElement.nativeElement.scrollIntoView({behavior: 'smooth'});
  }

  scrollToUpplanning(): void {
    this.upplanningElement.nativeElement.scrollIntoView({behavior: 'smooth'});
   }
  ngOnInit(): void {
  }
}
