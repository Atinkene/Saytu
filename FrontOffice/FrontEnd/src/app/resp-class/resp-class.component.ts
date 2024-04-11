import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resp-class',
  templateUrl: './resp-class.component.html',
  styleUrls: ['./resp-class.component.css']
})
export class RespClassComponent implements OnInit {
  @ViewChild('planning') planningElement!: ElementRef;
  @ViewChild('avis') avisElement!: ElementRef;

  constructor(private authService: AuthService, private router: Router) { }

  scrollToPlanning(): void {
    this.planningElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToAvis(): void {
    this.avisElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnInit(): void {
  }

}
