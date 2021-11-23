import { Component, OnInit, ViewChild } from '@angular/core';
import {Event} from '../models/event';
import {EventService} from '../services/event/event.service';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {NgForm} from "@angular/forms";
import * as _ from 'lodash';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EventCreateComponent } from '../event-create/event-create.component';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario/usuario.service';

@Component({
  selector: 'app-event-fanatic',
  templateUrl: './event-fanatic.component.html',
  styleUrls: ['./event-fanatic.component.css']
})
export class EventFanaticComponent implements OnInit {

  eventdata!: Event;
  idevent !:number;
  userdata!: Usuario;
  cont : number = 0;
  listusers : Usuario[] = [];
  events:Event[]=[];
  dataSource!: MatTableDataSource<any>;
  dataSource2!: MatTableDataSource<any>;
  arrayusers !: any;
  arrayevents!: any;
  eventbyid!:any;
  conditionaltype : string = "Test";
  displayedColumns: string[] = ['id','EventName','EventDescription','ArtistID','Likes'];
  showeventartist = false;

  @ViewChild('EventForm', {static: false})
  EventForm!: NgForm;

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;

  constructor(private eventService: EventService,private userService: UsuarioService,private dialog:MatDialog) {
    this.eventdata = {} as Event;
    this.userdata = {} as Usuario;
    this.dataSource = new MatTableDataSource<any>();
    this.dataSource2 = new MatTableDataSource<any>();
  }


  ngOnInit():void {
    this.dataSource.paginator = this.paginator;
    this.getAllEvents();
    this.getListArtist();
  }

  getAllEvents() {
    this.eventService.getAll().subscribe((response: any) => {
      this.dataSource.data = response.content;
      this.dataSource.paginator=this.paginator;
      this.arrayevents = response.content;
      console.log(this.arrayevents)
    });
  }

  getListArtist(){
    this.eventService.getAll().subscribe((response: any) => {
      this.dataSource.data = response.content;
      this.dataSource.paginator=this.paginator;
      this.arrayevents = response.content;

      let n = this.arrayevents.length;

      this.userService.getAll().subscribe((response: any) => {
        this.dataSource2.data = response;
        this.dataSource2.paginator=this.paginator;
        this.arrayusers = response.content;
        console.log(this.arrayusers)

        let n2 = this.arrayusers.length;

        for(let i = 0; i<n2;i++){
          if(this.arrayevents[0].ArtistID == this.arrayusers[i].id){
            this.listusers.push(this.arrayusers[i]);
          }
        }

        for(let i = 0; i<n;i++){
          for(let j = 0; j<n2;j++){
            if(this.arrayevents[i].ArtistID == this.arrayusers[j].id){
              if(this.listusers[j] != this.arrayusers[j])this.listusers.push(this.arrayusers[j]);
            }
          }
        }

      });
      console.log(this.listusers)
    });
  }

  Increasinglikes(id:number){
    this.eventService.getById(id).subscribe((response: any) => {
      this.dataSource.data = response;
      this.dataSource.paginator=this.paginator;
      this.eventdata = response

      var presentlikes = this.eventdata.likes;
      var finalLikes = presentlikes + 1;
      this.eventdata.likes = finalLikes

      this.eventService.update(this.eventdata.id, this.eventdata).subscribe((response: any) => {
        this.arrayevents = this.arrayevents.map((o: Event) => {
          if (o.id === response.id) {
            o = response;
          }
          return o;
        });
      });

    });

  }

  ShowEventsArtist(){
    this.showeventartist = true;
    console.log(this.showeventartist)
  }

  NotShowEventsArtist(){
    this.showeventartist = false;
    console.log(this.showeventartist)
  }
}
