import { Component, OnInit, Input } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {CommentService} from "../services/comment/comment.service";
import {CommentComponent} from "../comment/comment.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  studentData: any;
  dataSource: MatTableDataSource<any>;
  haveInfo = false;
  @Input()
  textPart = "..."
  @Input()
  titlePart = "..."

  constructor(private commentService: CommentService) {
    this.studentData = {}
    this.dataSource = new MatTableDataSource<any>();
    this.haveInfo = false;
  }

  ngOnInit(): void {
  }

  likePost(): void {
    alert("Liking post");
  }
  commentPost(): void {
    alert("Posting comment");
  }
  getComments(): void {
    this.commentService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
      this.studentData = this.dataSource.data;
      this.haveInfo = true;
    });
  }
  talk(): void{
    console.log("aqui estoy");
  }
}