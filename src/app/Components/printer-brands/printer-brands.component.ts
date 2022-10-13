import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-printer-brands',
  templateUrl: './printer-brands.component.html',
  styleUrls: ['./printer-brands.component.css']
})
export class PrinterBrandsComponent implements OnInit {
  information = "Please choose an above option."
  constructor() { }

  ngOnInit(): void {
  }
  onSawgrassInformation() {
    this.information = "Sawgrass support is handled by Sawgrass directly. Visit their website at https://care.sawgrassink.com or give them a call at 888.874.0599 "
  }
}
