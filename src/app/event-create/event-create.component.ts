import { Event } from '../models/event'; 
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventService } from '../services/event/event.service';
import { EventComponent } from '../event/event.component';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {
  event_data !: Event;
  EventForm!: NgForm;

  constructor() { 
    this.event_data = {} as Event
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.event_data) 
  }
}
