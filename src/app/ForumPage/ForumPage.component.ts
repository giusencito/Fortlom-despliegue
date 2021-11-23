import { MatTableDataSource } from '@angular/material/table';
import { ForumcommentService } from './../services/forumcomment/forumcomment.service';
import { Forumcomment } from './../models/forumcomment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ForumService } from './../services/forum/forum.service';
import { Forum } from '../models/forum';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario/usuario.service';
@Component({
  selector: 'app-ForumPage',
  templateUrl: './ForumPage.component.html',
  styleUrls: ['./ForumPage.component.css']
})
export class ForumPageComponent implements OnInit {
  forum!:Forum
  forumname!:string;
  usuario!:Usuario
  username!:string;
  userlastname!:string
  forumdescription!:string
  newcommentform!:FormGroup
  public idforum!:number
  Forumcomment!:Forumcomment
  dataSource1 !:MatTableDataSource<any>;
  idactualuser!:number
  date!:Date
  constructor(private service:ForumService,private route:ActivatedRoute,private service2:UsuarioService,private formBuilder:FormBuilder,private servecommen:ForumcommentService) {
   this.forum={}as Forum
   this.usuario={}as Usuario
   this.Forumcomment={}as Forumcomment
   this.dataSource1 = new MatTableDataSource<any>();
   this.date=new Date()
   }

  ngOnInit() {
    let pod=parseInt(this.route.snapshot.paramMap.get('forumid')!);
    let id= pod;
    this.idforum=id;
    this.getidforum(this.idforum)
    let pad=parseInt(this.route.snapshot.paramMap.get('fanaticid')!);
    let id2= pad;
    this.idactualuser=id2;
    this.newcommentform=this.formBuilder.group({

      comment:['',Validators.required]




    })

  }
  getidforum(id:number){

    this.service.getById(id).subscribe((response:any)=>{

     this.forum=response;
      console.log(this.forum);
      this.forumname=this.forum.ForumName;
      this.forumdescription=this.forum.ForumDescription
      console.log(this.forum.usuario)
      this.getidUser(this.forum.usuario)

    });


  }
  getidUser(id:number){

    this.service2.getById(id).subscribe((response:any)=>{

      this.usuario=response;
       console.log(this.usuario);
       this.username=this.usuario.name
       this.userlastname=this.usuario.lastName;

    });


  }

  NewForumComment(){

    this.servecommen.create(this.Forumcomment).subscribe((response: any) => {
      this.dataSource1.data.push( {...response});
      this.dataSource1.data = this.dataSource1.data.map((o: any) => { return o; });
      alert("se agrego un comentario")

    });


  }

crearcomentariodeforo(){

this.Forumcomment.UsuarioId=this.idactualuser
this.Forumcomment.Date=this.date
this.Forumcomment.ForumId=this.idforum
this.NewForumComment()
this.newcommentform.reset();



}


Limpiar(){

this.newcommentform.reset();



}


}
