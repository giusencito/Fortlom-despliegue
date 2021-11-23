import { FanaticService } from './../services/fanatic/fanatic.service';
import { ArtistService } from './../services/artist/artist.service';
import { Component, OnInit } from '@angular/core';
import {AppRoutingModule} from "../app-routing.module";
import {ActivatedRoute} from "@angular/router";
import { Artist } from '../models/artist';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {
  isHidden=true
  dataSource !:MatTableDataSource<any>;
  dataSource2 !:MatTableDataSource<any>;
  iddepaso!:number
  constructor(private $route: ActivatedRoute,private service:ArtistService,private service2:FanaticService) { this.dataSource = new MatTableDataSource<any>();
    this.dataSource2 = new MatTableDataSource<any>();
  }
  ngOnInit() {

    console.log(+this.$route.snapshot.params['id']);
    this.iddepaso=+this.$route.snapshot.params['id']
    this.getfanatic()
    this.getartists()

  }
  getAllArtits(){
    this.service.getAll().subscribe((response: any) => {
      this.dataSource.data = response.content;
      console.log("datos");
      console.log(response.content)
      console.log(this.dataSource.data.length)
    });


  }
  getAllFanticss(){
    this.service2.getAll().subscribe((response: any) => {
      this.dataSource2.data = response.content;
      console.log("datos");
      console.log(response.content)
      console.log(this.dataSource.data.length)
    });


  }
  getartists(){

    this.service.getAll().subscribe((response: any)=>{

      const ap=response.content.find((a:any)=>{
        console.log('idactual')
          console.log(a.id)
          console.log('requerido')
          console.log(this.iddepaso)
          return  a.id === this.iddepaso



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
        console.log(this.iddepaso)
        return  a.id === this.iddepaso



    })

    if(ap){

      this.isHidden=true

    }






   })


}






}
