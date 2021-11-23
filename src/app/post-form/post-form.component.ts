import { Component, OnInit } from '@angular/core';
import {PublicacionService} from "../services/publicacion/publicacion.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  postData: any;
  dataSource: MatTableDataSource<any>;

  constructor(private postService: PublicacionService) {
    this.postData = {
      id: 4,
      PublicationName: "Post Name",
      PublicationDescription: "",
      Likes: 0,
      Date: "",
      UserID: 2
    };
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
  }

  postPost(txt: HTMLTextAreaElement): void {
    this.postData.PublicationDescription = txt.value;
    this.postService.create(this.postData).subscribe((response: any) => {
      this.dataSource.data.push( {...response});
      this.dataSource.data = this.dataSource.data.map((o: any) => { return o; });
      console.log(this.dataSource);
    });
    txt.value = "";
  }
}
