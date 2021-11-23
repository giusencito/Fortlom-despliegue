import { Component, OnInit, Input } from '@angular/core';
import {UsuarioService} from "../services/usuario/usuario.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  customTitle: string;
  @Input()
  customText: string;
  @Input()
  userId: Number; //change

  userInfo: any;

  constructor(private userService: UsuarioService) {
    this.customTitle = "...";
    this.customText = "...";
    this.userId = 0//change
  }

  ngOnInit(): void { //changed all inside this
    this.userService.getById(this.userId)
      .subscribe((response: any) => {
        this.userInfo = response;
    })
  }

}
