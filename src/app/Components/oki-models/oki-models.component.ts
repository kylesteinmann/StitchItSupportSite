import { Component, OnInit } from '@angular/core';
import { ButtonsService } from 'src/app/Services/buttons.service';

@Component({
  selector: 'app-oki-models',
  templateUrl: './oki-models.component.html',
  styleUrls: ['./oki-models.component.css']
})
export class OkiModelsComponent implements OnInit {

  constructor(public buttonsService:ButtonsService) { }

  ngOnInit(): void {
  }

}
