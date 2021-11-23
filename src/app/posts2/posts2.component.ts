import {Component , OnInit, ViewChild} from '@angular/core';
import {Publicacion} from "../models/publicacion";
import {PublicacionService} from "../services/publicacion/publicacion.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {NgForm} from "@angular/forms";
import * as _ from 'lodash';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EventCreateComponent } from '../event-create/event-create.component';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-posts2',
  templateUrl: './posts2.component.html',
  styleUrls: ['./posts2.component.css'],
  providers: [DatePipe]
})
export class Posts2Component implements OnInit {

  postdata!: Publicacion;
  posts:Publicacion[]=[];
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['id','PostName','PostDescription','ArtistID','Likes','actions'];
  idartists!:number
  @ViewChild('EventForm', {static: false})
  EventForm!: NgForm;
  public current_date=new Date();
  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;

  isEditMode = false;

  constructor(private eventService: PublicacionService,private dialog:MatDialog,public datepipe: DatePipe) {
    this.postdata = {} as Publicacion;
    this.dataSource = new MatTableDataSource<any>();

  }

  ngOnInit():void{
    this.dataSource.paginator = this.paginator;
    this.getAllEvents();

    //console.log(this.getArtistId(1))
  }

  getAllEvents() {
    this.eventService.getAll().subscribe((response: any) => {
      this.dataSource.data = response.content;
      this.dataSource.paginator=this.paginator;

      console.log(this.dataSource.data)
    });
  }

  deleteItem(id: number) {
    this.eventService.delete(id).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.filter((o: Publicacion) => {
        return o.id !== id ? o : false;
      });
    });
    console.log(this.dataSource.data);
  }

  addEvent(id:number) {
    this.eventService.create(this.postdata,id).subscribe((response: any) => {
      this.dataSource.data.push( {...response});
      this.dataSource.data = this.dataSource.data.map((o: any) => { return o; });
    });
  }

  editItem(element: Publicacion) {
    this.postdata = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelEdit() {
    this.isEditMode = false;
    this.EventForm.resetForm();
  }

  deleteEdit(id:number){
    console.log(id);
    this.postdata.id = _.cloneDeep(id);
    this.deleteItem(this.postdata.id);
  }

  onCreate(){
    const dialogconfig=new MatDialogConfig();
    dialogconfig.disableClose=true;
    dialogconfig.autoFocus=true;
    dialogconfig.width="60%"
    this.dialog.open(EventCreateComponent,dialogconfig);

  }
  getArtistId(id :number){

     //console.log(id)
     //console.log(this.dataSource.data[0].artist.id)
     return this.dataSource.data[id-1].artist.id


    }

  updateEvent() {
    this.eventService.update(this.postdata.id, this.postdata).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.map((o: Publicacion) => {
        if (o.id === response.id) {
          o = response;
        }
        return o;
      });
      this.cancelEdit();
    });
  }

  onSubmit() {
    if(this.EventForm.form.valid){
      console.log(this.postdata);
      if (this.isEditMode) {
        this.updateEvent();

        console.log("se actualizo")
      } else {
        var sa=this.datepipe.transform(this.current_date, 'MMMM d, y, h:mm:ss a z')!;
        console.log(sa)
        this.postdata.date=sa;
        this.addEvent(this.idartists);
      }
    }else{
      console.log('Invalid data');
    }
  }

}
