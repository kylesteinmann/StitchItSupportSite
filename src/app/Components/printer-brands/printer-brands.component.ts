import { Component, OnInit } from '@angular/core';
import { ButtonsService } from 'src/app/Services/buttons.service';

@Component({
  selector: 'app-printer-brands',
  templateUrl: './printer-brands.component.html',
  styleUrls: ['./printer-brands.component.css']
})
export class PrinterBrandsComponent implements OnInit {
  information = "Please choose an option above."
  constructor(public buttonsService:ButtonsService) { }

  ngOnInit(): void {
  }
  onSawgrassInformation() {
    this.information = "Sawgrass support is handled by Sawgrass directly. Visit their website at https://care.sawgrassink.com or give them a call at 888.874.0599 "
  }
}
