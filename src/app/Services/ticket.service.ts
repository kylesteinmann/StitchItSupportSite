import { Injectable } from '@angular/core';
import { Ticket } from '../ticket.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  ticket: Ticket = {
    fullName: '',
    companyName: '',
    email: '',
    makeModel: '',
    description: '',
    phoneNumber: '',
  };
  ticketSubmitted = { success: 'false' };
  constructor(private router: Router) {}

  onSubmitForm(form: NgForm) {
    this.ticket = {
      fullName: form.value.fullName,
      companyName: form.value.companyName,
      email: form.value.email,
      phoneNumber: form.value.phoneNumber,
      makeModel: form.value.makeModel,
      description: form.value.description,
    };
    this.ticketSubmitted.success = 'true';
    console.log(this.ticket);
    this.router.navigateByUrl('/submitSuccess');
    setTimeout(() => this.router.navigateByUrl('/typeOfMachine'), 4000);
    setTimeout(() => (this.ticketSubmitted.success = 'false'), 4000);
  }
}
