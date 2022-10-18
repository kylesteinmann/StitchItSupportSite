import { Component, OnInit } from '@angular/core';
import { ButtonsService } from 'src/app/Services/buttons.service';

@Component({
  selector: 'app-type-of-machine',
  templateUrl: './type-of-machine.component.html',
  styleUrls: ['./type-of-machine.component.css']
})
export class TypeOfMachineComponent implements OnInit {

  constructor(public buttonsService: ButtonsService) { }

  ngOnInit(): void {
  }

}
