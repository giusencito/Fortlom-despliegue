import { Fanatic } from './../models/fanatic';
import { Artist } from './../models/artist';
import { FanaticService } from './../services/fanatic/fanatic.service';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario/usuario.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { ArtistService } from '../services/artist/artist.service';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {
  public loginform!:FormGroup;
  iddepaso!:Number;
  dataSource !:MatTableDataSource<any>;
  Artist!:Artist
  Fanatic!:Fanatic
  constructor(private formBuilder:FormBuilder,private route:Router,private service:UsuarioService,private servicefana:FanaticService,private serivcearti:ArtistService) {
    this.dataSource = new MatTableDataSource<any>();
   this.Fanatic={}as Fanatic
   this.Artist={}as Artist
   }


  ngOnInit() {
    this.loginform=this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]



     })
    this.getAllUsers();
  }
onSubmit(){
this.getUser()
  }
getAllUsers(){
    this.service.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
      console.log("datos");
      console.log(response.content)
      console.log(this.dataSource.data.length)
    });


  }
  getUser(){

    this.service.getAll()
    .subscribe((response: any)=>{
       const ap=response.content.find((a:any)=>{
         console.log(a.Email);
         console.log(this.loginform.value.email)
         console.log(a.password)
         console.log(this.loginform.value.password)
         this.iddepaso=a.id;
          return a.email === this.loginform.value.email && a.password===this.loginform.value.password;
       });
        if(ap){
        alert("Login successfully");
        this.getartist()
        this.getfanatic()




        }else{
          alert("User not found");
        }

      },err=>{

        alert("something go wrong")
      });


  }


  getartist(){
  console.log('busqueda de artista')
   this.serivcearti.getAll().subscribe((response: any)=>{

    const ap=response.content.find((a:any)=>{
      console.log('idactual')
        console.log(a.id)
        console.log('requerido')
        console.log(this.iddepaso)
        return  a.id === this.iddepaso



    })

    if(ap){
      alert("Login successfully");
      this.route.navigate(['/HomeArtist',this.iddepaso])

    }






   })



  }
  getfanatic(){
    console.log('busqueda de fanatico')
     this.servicefana.getAll().subscribe((response: any)=>{

      const ap=response.content.find((a:any)=>{
        console.log('idactual')
          console.log(a.id)
          console.log('requerido')
          console.log(this.iddepaso)
      })

      if(ap){
        alert("Login successfully");
        this.route.navigate(['/HomeFanatic',this.iddepaso])

      }






     })



    }

  getidArtist(id:Number){

    this.serivcearti.getById(id).subscribe((response:any)=>{

      this.Artist=response;


    });


  }






















}
