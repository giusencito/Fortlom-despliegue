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
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-ForumPage',
  templateUrl: './ForumPage.component.html',
  styleUrls: ['./ForumPage.component.css'],
  providers: [DatePipe]
})
export class ForumPageComponent implements OnInit {
  isHidden=true
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
  constructor(private service:ForumService,private route:ActivatedRoute,private service2:UsuarioService,private formBuilder:FormBuilder,private servecommen:ForumcommentService,public datepipe: DatePipe) {
   this.forum={}as Forum
   this.usuario={}as Usuario
   this.Forumcomment={}as Forumcomment
   this.dataSource1 = new MatTableDataSource<any>();

   }

  ngOnInit() {
    let pod=parseInt(this.route.snapshot.paramMap.get('forumid')!);
    let id= pod;
    this.idforum=id;
    this.getidforum(this.idforum)
    let pad=parseInt(this.route.snapshot.paramMap.get('id')!);
    let id2= pad;
    this.idactualuser=id2;
    this.newcommentform=this.formBuilder.group({

      comment:['',Validators.required]




    })

  }
  getidforum(id:number){

    this.service.getById(id).subscribe((response:any)=>{

     this.forum=response;
     console.log("inicio");
      //console.log(this.forum);
      this.forumname=this.forum.forumName;
      this.forumdescription=this.forum.forumDescription
      //console.log(this.forum.user)
      this.getidUser(this.forum.user.id)

    });


  }
  getidUser(id:number){

    this.service2.getById(id).subscribe((response:any)=>{

      this.usuario=response;
       //console.log(this.usuario);
       this.username=this.usuario.name
       this.userlastname=this.usuario.lastName;

    });


  }

  NewForumComment(userid:number,forumid:number){

    this.servecommen.create(this.Forumcomment,userid,forumid).subscribe((response: any) => {
      this.dataSource1.data.push( {...response});
      this.dataSource1.data = this.dataSource1.data.map((o: any) => { return o; });
      alert("se agrego un comentario")

    });


  }

crearcomentariodeforo(){
  this.date=new Date();
//this.Forumcomment.user=this.idactualuser
let latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd')!;
this.Forumcomment.date=latest_date
//this.Forumcomment.forum=this.idforum
console.log(this.Forumcomment)
console.log(this.idactualuser,this.idforum)
this.NewForumComment(this.idactualuser,this.idforum)
//this.newcommentform.reset();



}


Limpiar(){

this.newcommentform.reset();



}


getartists(){

  this.service.getAll().subscribe((response: any)=>{

    const ap=response.content.find((a:any)=>{
      console.log('idactual')
        console.log(a.id)
        console.log('requerido')
        console.log(this.idactualuser)
        return  a.id === this.idactualuser



    })

    if(ap){

      this.isHidden=false

    }






   })



  }
getfanatic(){

this.service2.getAll().subscribe((response: any)=>{

  const ap=response.content.find((a:any)=>{
    console.log('idactual')
      console.log(a.id)
      console.log('requerido')
      console.log(this.idactualuser)
      return  a.id === this.idactualuser



  })

  if(ap){

    this.isHidden=true

  }






 })


}



























}
