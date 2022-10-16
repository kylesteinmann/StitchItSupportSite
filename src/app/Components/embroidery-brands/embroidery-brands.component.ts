import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-embroidery-brands',
  templateUrl: './embroidery-brands.component.html',
  styleUrls: ['./embroidery-brands.component.css']
})
export class EmbroideryBrandsComponent implements OnInit {
  information ='Please choose an option above.'

  hsiWebsite = "https://www.hsi.us/support"
  constructor() { }

  ngOnInit(): void {
  }
  onTajimaInformation() {
    this.information = "Tajima support is provided by Hirsch Solutions.  Visit their support site at https://www.hsi.us/support or give them a call at 800.394.4426"
  }
  onJanomeInformation() {
    this.information = "Janome support is provided by Janome directly.  Visit their support site at https://www.janome.com/support/ or give them a call at 800.631.0183 Extension 774 (The extension is required)"
  }
}
