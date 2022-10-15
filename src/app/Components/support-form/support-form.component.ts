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


  constructor(public ticketService: TicketService, private router:Router ) { }

  ngOnInit(): void {
  }

    }


