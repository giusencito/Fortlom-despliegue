import {Component, OnInit, ViewChild} from '@angular/core';
import {Comment} from "../models/comment";
import {CommentService} from "../services/comment/comment.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {NgForm} from "@angular/forms";
import * as _ from 'lodash';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EventCreateComponent } from '../event-create/event-create.component';
import {DatePipe} from '@angular/common';
@Component({
  selector: 'app-comment-table',
  templateUrl: './comment-table.component.html',
  styleUrls: ['./comment-table.component.css'],
  providers: [DatePipe]
})
export class CommentTableComponent implements OnInit {

  commentdata!: Comment;
  comments:Comment[]=[];
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'CommentDescription','PublicationID','UsuarioId','actions'];
  iduser!:number;
  idpublic!:number
  @ViewChild('EventForm', {static: false})
  EventForm!: NgForm;
  public current_date=new Date();
  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;

  isEditMode = false;

  constructor(private eventService: CommentService,private dialog:MatDialog,public datepipe: DatePipe) {
    this.commentdata = {} as Comment;
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit():void{
    this.dataSource.paginator = this.paginator;
    this.getAllEvents();
    console.log(this.comments);
    console.log(this.displayedColumns);
    console.log(this.isEditMode)
  }

  getAllEvents() {
    this.eventService.getAll().subscribe((response: any) => {
      this.dataSource.data = response.content;
      this.dataSource.paginator=this.paginator;

      console.log(this.dataSource.data)
    });
  }
  getUserId(id :number){


    return this.dataSource.data[id-1].user.id


    }
    getPublicId(id :number){


      return this.dataSource.data[id-1].publication.id


      }
  deleteItem(id: number) {
    this.eventService.delete(id).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.filter((o: Comment) => {
        return o.id !== id ? o : false;
      });
    });
    console.log(this.dataSource.data);
  }

  addEvent(userid:number,publicationId:number) {
    this.eventService.create(this.commentdata,userid,publicationId).subscribe((response: any) => {
      this.dataSource.data.push( {...response});
      this.dataSource.data = this.dataSource.data.map((o: any) => { return o; });
    });
  }

  editItem(element: Comment) {
    this.commentdata = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelEdit() {
    this.isEditMode = false;
    this.EventForm.resetForm();
  }

  deleteEdit(id:number){
    console.log(id);
    this.commentdata.id = _.cloneDeep(id);
    this.deleteItem(this.commentdata.id);
  }

  onCreate(){
    const dialogconfig=new MatDialogConfig();
    dialogconfig.disableClose=true;
    dialogconfig.autoFocus=true;
    dialogconfig.width="60%"
    this.dialog.open(EventCreateComponent,dialogconfig);
  }

  updateEvent() {
    this.eventService.update(this.commentdata.id, this.commentdata).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.map((o: Comment) => {
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
      console.log(this.commentdata);
      if (this.isEditMode) {
        this.updateEvent();
        console.log("se actualizo")
      } else {
        var sa=this.datepipe.transform(this.current_date, 'MMMM d, y, h:mm:ss a z')!;
        console.log(sa)
        this.commentdata.date=sa
        console.log(this.commentdata )
        this.addEvent(this.iduser,this.idpublic);
      }
    }else{
      console.log('Invalid data');
    }
  }
}
