import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { ArtistService } from '../services/artist/artist.service';
import { Artist } from '../models/artist';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario/usuario.service';
@Component({
  selector: 'app-ArtistRegister',
  templateUrl: './ArtistRegister.component.html',
  styleUrls: ['./ArtistRegister.component.css']
})
export class ArtistRegisterComponent implements OnInit {
  public signupform!:FormGroup;
  dataSource !:MatTableDataSource<any>;
  dataSource2 !:MatTableDataSource<any>;
  user!:Usuario;
  artist!:Artist
  date!:Date;
  constructor(private formBuilder:FormBuilder,private route:Router,private service:ArtistService,private service2:UsuarioService) {
    this.user={}as Usuario;
    this.dataSource = new MatTableDataSource<any>();
    this.dataSource2 = new MatTableDataSource<any>();
    this.artist={} as Artist
    this.date=new Date()
   }

  ngOnInit() {
    console.log(this.date)
    this.signupform=this.formBuilder.group({
      name:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],

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
  registerArtist(){

    this.service.create(this.artist).subscribe((response: any) => {
      this.dataSource2.data.push( {...response});
      this.dataSource2.data = this.dataSource2.data.map((o: any) => { return o; });
    });


  }
  onSubmit(){
   this.user.Registration=this.date
   this.artist.Followers=0
   this.artist.Tag=0
   let artistid=this.dataSource.data.length+1
   this.artist.id=artistid
   this.registerUser()
   this.registerArtist()
   this.signupform.reset();
   this.route.navigate(['/login'])

  }



}
