import { UsuarioService } from './../services/usuario/usuario.service';
import { FanaticService } from './../services/fanatic/fanatic.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Fanatic } from './../models/fanatic';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-FanaticRegister',
  templateUrl: './FanaticRegister.component.html',
  styleUrls: ['./FanaticRegister.component.css']
})
export class FanaticRegisterComponent implements OnInit {
  public signupform!:FormGroup;
  dataSource !:MatTableDataSource<any>;
  dataSource2 !:MatTableDataSource<any>;
  user!:Usuario;
  Fanatic!:Fanatic
  date!:Date;
  constructor(private formBuilder:FormBuilder,private route:Router,private service:FanaticService,private service2:UsuarioService) {
    this.user={}as Usuario;
    this.dataSource = new MatTableDataSource<any>();
    this.dataSource2 = new MatTableDataSource<any>();
    this.Fanatic={} as Fanatic
    this.date=new Date()
   }


  ngOnInit() {console.log(this.date)
    this.signupform=this.formBuilder.group({
      name:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      alias:['',Validators.required],

     })
     this.getAllUsers()
  }
  registerUser(){

    this.service2.create(this.user).subscribe((response: any) => {
      this.dataSource.data.push( {...response});
      this.dataSource.data = this.dataSource.data.map((o: any) => { return o; });
    });


  }
  getAllUsers(){
    this.service2.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
      console.log(response)
    });


  }
  registerFanatic(){

    this.service.create(this.Fanatic).subscribe((response: any) => {
      this.dataSource2.data.push( {...response});
      this.dataSource2.data = this.dataSource2.data.map((o: any) => { return o; });
    });


  }

  onSubmit(){
    this.user.Registration=this.date
    let fanaticid=this.dataSource.data.length+1
    this.Fanatic.id=fanaticid
    this.registerUser()
    this.registerFanatic()
    this.signupform.reset();
    this.route.navigate(['/login'])
  }





}
