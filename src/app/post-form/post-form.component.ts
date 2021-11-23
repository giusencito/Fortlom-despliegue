import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import {PublicacionService} from "../services/publicacion/publicacion.service";
import {MatTableDataSource} from "@angular/material/table";
import {MultimediaService} from "../services/multimedia/multimedia.service";
import {ActivatedRoute} from "@angular/router";
import { Publicacion } from '../models/publicacion';
import { Multimedia } from '../models/multimedia';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  aux1:any;
  aux2:any;
  auxLinks:any = [];
  postData: Publicacion;
  dataSource: MatTableDataSource<any>;
  dataSource2: MatTableDataSource<any>;
  multimediaDialog = false;
  multimedia!:Multimedia
  t!:number
  constructor(private postService: PublicacionService,
              private multimediaService: MultimediaService,
              private $route: ActivatedRoute) {
                this.multimedia={}as Multimedia
    this.postData={}as Publicacion
    this.dataSource = new MatTableDataSource<any>();
    this.dataSource2 = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.getAllStudents()
  }

  postPost(txt: HTMLTextAreaElement): void {
    this.postData.publicationDescription = txt.value;
    this.postData.likes=0
    this.postData.publicationName="la publicacion"
    let today = new Date(); //change
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(); //change
    this.postData.date = date; //change
    console.log(this.dataSource2.data);
    this.postService.create(this.postData, +this.$route.snapshot.params['id']).subscribe((response: any) => {
      this.dataSource2.data.push( {...response});
      console.log(this.dataSource2.data);
      console.log(this.dataSource2.data.length);
      this.t=this.dataSource2.data.length
      this.dataSource2.data = this.dataSource.data.map((o: any) => { return o; });
      console.log(this.auxLinks)
      if(this.auxLinks.length > 0){

        console.log("bbbbbbbbbbbbb")
        for (let i of this.auxLinks){
             console.log("aaaaaa")
             console.log(i)
            this.multimedia.link=i
            console.log(this.t)
            this.multimediaService.create(this.multimedia, this.t).subscribe((response: any) => {
              console.log(response);
            })
        }

      }


    });


    txt.value = "";
  }

  getAllStudents() {
    this.postService.getAll().subscribe((response: any) => {
      this.dataSource2.data = response.content;


      console.log( this.dataSource2.data)
    });
}
  getLinkFromDialog(txt: HTMLInputElement): void {
    this.auxLinks.push(txt.value);
  }

}
