import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario/usuario.service';

@Component({
  selector: 'app-UserInformationforForum',
  templateUrl: './UserInformationforForum.component.html',
  styleUrls: ['./UserInformationforForum.component.css']
})
export class UserInformationforForumComponent implements OnInit {
  user!:Usuario
  username!:string
  userlastname!:string
  @Input() idcomment!:number
  constructor(private service:UsuarioService) {
    this.user={}as Usuario

  }

  ngOnInit() {
   this.getidUser(this.idcomment)



  }
getidUser(id:number){

    this.service.getById(id).subscribe((response:any)=>{

      this.user=response;
       console.log(this.user);
       this.username=this.user.name
       this.userlastname=this.user.lastName;

    });


  }





}
