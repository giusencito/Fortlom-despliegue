import { UsuarioService } from './../services/usuario/usuario.service';
import { Component, OnInit, Input } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {CommentService} from "../services/comment/comment.service";
import {PublicacionService} from "../services/publicacion/publicacion.service";
import {ReportService} from "../services/report/report.service";
import {MultimediaService} from "../services/multimedia/multimedia.service";
import {ActivatedRoute} from "@angular/router";
import { Usuario } from '../models/usuario';
import { Report } from '../models/report';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  aux: any;
  studentData: any;
  dataSource: MatTableDataSource<any>;
  haveInfo = false;
  havePosts = false;
  report!:Report
  orderedMultimedia:any = [];
  relatedUser!: Usuario;

  @Input()
  textPart = "...";
  @Input()
  titlePart = "...";
  @Input()
  fullPost : any;

  constructor(private commentService: CommentService,
              private postService: PublicacionService,
              private reportService: ReportService,
              private multimediaService: MultimediaService,
              private usuarioservice: UsuarioService,
              private $route: ActivatedRoute) {
    this.report={}as Report
    this.studentData = {}
    this.dataSource = new MatTableDataSource<any>();
    this.haveInfo = false;
    this.havePosts = false;
  }

  ngOnInit(): void {
    this.multimediaService.getallmultimediabypublication(this.fullPost.id) //changed
      .subscribe((response: any) => {
        this.orderedMultimedia = response.content;
        console.log(this.orderedMultimedia);
        this.haveInfo = true;
      })
    this.usuarioservice.getById(this.fullPost.artist.id)
      .subscribe((response: any) => {
        this.relatedUser = response;
        console.log("artista")
        console.log(this.relatedUser);
      })
  }

  likePost(): void {
    this.fullPost.likes += 1;
    this.postService.update(this.fullPost.id, this.fullPost)
      .subscribe((response: any) => {
        console.log(response);
      });
  }

  getComments(id:any): void {
    id = Number(id);
    this.commentService.getallcommentsbypublication(id).subscribe((response: any) => {
      this.dataSource.data = response.content;
      this.studentData = this.dataSource.data;
      //this.haveInfo = true;
      this.havePosts = true;
    });
  }

  flagPost(): void {
    this.aux = {
      ReportDescription: "Insultos frecuentes",
      UserMain: +this.$route.snapshot.params['id'],
      PostReported: this.fullPost.id
    }
    this.report.reportDescription="publicacion inapropiada"
    this.reportService.create(this.report,+this.$route.snapshot.params['id'],this.relatedUser.id)
      .subscribe((response: any) => {
        console.log(response);
      });
  }
}
