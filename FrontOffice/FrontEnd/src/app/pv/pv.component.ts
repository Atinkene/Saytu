import { Component, OnInit, OnDestroy } from '@angular/core';
import { Pv } from './models/pv.model';
import { PvService } from './pv.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pv',
  templateUrl: './pv.component.html',
  styleUrls: ['./pv.component.css']
})
export class PvComponent implements OnInit, OnDestroy {
  pvs: Pv[] = [];
  pvSubscription!: Subscription;

  constructor(private readonly pvService: PvService) {}

  ngOnInit(): void {
    this.fetchPvs();
  }

  fetchPvs(): void {
    this.pvSubscription = this.pvService.getAllPv().subscribe({
      next: (pvs: Pv[]) => {
        this.pvs = pvs;
      },
      error: (error) => {
        console.error('Error fetching PVs:', error);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.pvSubscription) {
      this.pvSubscription.unsubscribe();
    }
  }
}
