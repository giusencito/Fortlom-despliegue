import {Component, OnInit, ViewChild} from '@angular/core';
import {Forum} from "../../Fanatic-Forum/Fanatic-Forummodel";
import {MatTableDataSource} from "@angular/material/table";
import {NgForm} from "@angular/forms";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ForumService} from "../../services/forum/forum.service";
import * as _ from "lodash";
import {EventCreateComponent} from "../../event-create/event-create.component";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  forumdata !:Forum;
  forumdatabyid !:Forum;
  forums:Forum[]=[];
  dataSource !:MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'ForumName', 'ForumDescription','actions'];

  @ViewChild('ForumForm', {static: false})
  ForumForm!: NgForm;

  @ViewChild(MatSort)
  sort !:MatSort;
  @ViewChild(MatPaginator,{static: false}) paginator !:MatPaginator;
  searchKey!:string;
  isEditMode = false;
  numerot:number=1
  constructor(private forumService: ForumService,private dialog:MatDialog) {
    this.forumdata = {} as Forum;
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit():void{
    this.dataSource.paginator = this.paginator;
    this.getAllForums();
    console.log(this.forums);
    console.log(this.displayedColumns);
    console.log(this.isEditMode)
  }

  getAllForums() {
    this.forumService.getAll().subscribe((response: any) => {
      this.dataSource.data = response.content;
      this.dataSource.paginator=this.paginator;

      console.log(this.dataSource.data)
    });
  }

  deleteItem(id: number) {
    this.forumService.delete(id).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.filter((o: Forum) => {
        return o.id !== id ? o : false;
      });
    });
    console.log(this.dataSource.data);
  }

  addForum(id:number) {
    this.forumService.create(this.forumdata,id).subscribe((response: any) => {
      this.dataSource.data.push( {...response});
      this.dataSource.data = this.dataSource.data.map((o: any) => { return o; });
    });
  }

  editItem(element: Forum) {
    this.forumdata = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelEdit() {
    this.isEditMode = false;
    this.ForumForm.resetForm();
  }

  deleteEdit(id:number){
    console.log(id);
    this.forumdata.id = _.cloneDeep(id);
    this.deleteItem(this.forumdata.id);
  }

  updateForum() {
    this.forumService.update(this.forumdata.id, this.forumdata).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.map((o: Forum) => {
        if (o.id === response.id) {
          o = response;
        }
        return o;
      });
      this.cancelEdit();
    });
  }

  onSubmit() {
    if(this.ForumForm.form.valid){
      console.log(this.forumdata);
      if (this.isEditMode) {
        this.updateForum();
        console.log("se actualizo")
      } else {
        this.addForum(this.numerot);
        }
    }else{
        console.log('Invalid data');
    }
  }

}
