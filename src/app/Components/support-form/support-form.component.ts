import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TicketService } from 'src/app/ticket.service';

@Component({
  selector: 'app-support-form',
  templateUrl: './support-form.component.html',
  styleUrls: ['./support-form.component.css']
})
export class SupportFormComponent implements OnInit {

  constructor(private ticketService:TicketService) { }

  ngOnInit(): void {
  }
  onSubmitForm(form:NgForm){
this.ticketService.ticket = (form.value.fullName, form.value.companyName, form.value.email, form.value.phoneNumber,form.value.brand, form.value.description)
console.log(this.ticketService.ticket)
}

}
