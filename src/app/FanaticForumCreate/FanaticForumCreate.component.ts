import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Forum } from '../models/forum';
import { ForumService } from '../services/forum/forum.service';

@Component({
  selector: 'app-FanaticForumCreate',
  templateUrl: './FanaticForumCreate.component.html',
  styleUrls: ['./FanaticForumCreate.component.css']
})
export class FanaticForumCreateComponent implements OnInit {
  public createform!:FormGroup;
  Forum!:Forum
  idnumber!:number;
  dataSource !:MatTableDataSource<any>;
  constructor(private formBuilder:FormBuilder,private service:ForumService,private route:ActivatedRoute,private cd:Router) {
this.Forum={}as Forum;
this.Forum.ForumName
this.dataSource = new MatTableDataSource<any>();
   }

  ngOnInit() {
    this.createform=this.formBuilder.group({
      name:['',Validators.required],
      description:['',Validators.required],
     })
     let pod=parseInt(this.route.snapshot.paramMap.get('fanaticid')!);
    let id= pod;
    this.idnumber=id;
  }

crearforo(){
this.Forum.usuario=this.idnumber

this.AddForum()

this.cd.navigate(['/HomeFanatic',this.idnumber])

}


AddForum(){

  this.service.create(this.Forum).subscribe((response: any) => {
    this.dataSource.data.push( {...response});
    this.dataSource.data = this.dataSource.data.map((o: any) => { return o; });
  });

}










}
