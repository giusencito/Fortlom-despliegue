import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {PublicacionService} from "../services/publicacion/publicacion.service";
import {CommentComponent} from "../comment/comment.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  studentData: any;
  dataSource: MatTableDataSource<any>;
  haveInfo = false;

  constructor(private postService: PublicacionService) {
    this.studentData = {}
    this.dataSource = new MatTableDataSource<any>();
    this.haveInfo = false;
  }

  ngOnInit(): void {
  }

  getPosts(): void {
    this.postService.getAll().subscribe((response: any) => {
      this.dataSource.data = response.content;
      this.studentData = this.dataSource.data;
      console.log(this.studentData)
      this.haveInfo = true;
    });
  }

}
