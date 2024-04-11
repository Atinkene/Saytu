import { Component, OnInit } from '@angular/core';
import { RapportService } from './rapport.service';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css']
})
export class RapportComponent implements OnInit {
  rapports: any[] = [];

  constructor(private rapportService: RapportService) { }

  ngOnInit(): void {
    this.rapportService.getAllRapports().subscribe(data => {
      this.rapports = data;
    });
  }
}
