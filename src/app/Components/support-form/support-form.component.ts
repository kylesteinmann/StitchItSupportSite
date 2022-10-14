import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/ticket.model';
import { TicketService } from 'src/app/ticket.service';
@Component({
  selector: 'app-support-form',
  templateUrl: './support-form.component.html',
  styleUrls: ['./support-form.component.css']
})
export class SupportFormComponent implements OnInit {

  constructor(private ticketService: TicketService, private router:Router, ) { }

  ngOnInit(): void {
  }
  onSubmitForm(form: NgForm) {
    this.ticketService.ticket = ({
      fullname: form.value.fullName,
      companyName: form.value.companyName,
      email: form.value.email,
      phoneNumber: form.value.phoneNumber,
      makeModel: form.value.makeModel,
      description: form.value.description
    })

    console.log(this.ticketService.ticket)
    this.router.navigateByUrl("/typeOfMachine")
  }

}
