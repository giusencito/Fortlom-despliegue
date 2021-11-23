import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {CommentService} from "../services/comment/comment.service";

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  commentData: any;
  dataSource: MatTableDataSource<any>;

  constructor(private commentService : CommentService) {
    this.commentData = {
      id: 4,
      CommentDescription: "",
      PublicationID: 3,
      UserID: 1,
      Date: ""
    }
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
  }

  postComment(txt: HTMLTextAreaElement): void {
    this.commentData.CommentDescription = txt.value;
    this.commentService.create(this.commentData).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map((o:any)=>{return o;});
    });
    txt.value = "";
  }
}
