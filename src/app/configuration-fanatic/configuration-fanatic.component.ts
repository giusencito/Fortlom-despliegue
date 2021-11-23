import { Component, OnInit,ViewChild } from '@angular/core';
import {Fanatic} from '../models/fanatic';
import {Usuario} from '../models/usuario';
import {FanaticService} from '../services/fanatic/fanatic.service';
import {UsuarioService} from '../services/usuario/usuario.service';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {NgForm} from "@angular/forms";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-configuration-fanatic',
  templateUrl: './configuration-fanatic.component.html',
  styleUrls: ['./configuration-fanatic.component.css']
})
export class ConfigurationFanaticComponent implements OnInit {

  fanaticdata!: Fanatic;
  userdata!: Usuario;
  idnumber!:number;
  numberuser : number = 5;
  dataSource!: MatTableDataSource<any>;
  arraygenders : string[] = [];
  aleatorygender: string[] = ["Progresive Rock","Sound Engineering","2000 Wave","Complex","2010 Wave","Hard Rock","Classic Metal"]

  @ViewChild('UserForm', {static: false})
  UserForm!: NgForm;

  @ViewChild('FanaticForm', {static: false})
  FanaticForm!: NgForm;

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;

  constructor(private fanaticService: FanaticService,private userService: UsuarioService,private dialog:MatDialog,private route:ActivatedRoute) {
    this.fanaticdata = {} as Fanatic;
    this.userdata = {} as Usuario;
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit():void {
    this.dataSource.paginator = this.paginator;
    console.log(this.arraygenders);
    this.getAllFanatics();
    this.getAllUsers();

    let pod=parseInt(this.route.snapshot.paramMap.get('id')!);
    let id= pod;
    this.idnumber=id;

    this.getFanaticByUserId();
  }

  AddGenders(){
    var n = this.aleatorygender.length;
    console.log(n);
    var i = Math.floor(Math.random() * (n-0)) + 0;
    console.log(i);
    var genderselection = this.aleatorygender[i];
    console.log(genderselection)
    this.arraygenders.push(genderselection);
    console.log(this.arraygenders);
  }

  getAllFanatics() {
    this.fanaticService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
      this.dataSource.paginator=this.paginator;

      console.log(response)
    });
  }

  getAllUsers() {
    this.userService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
      this.dataSource.paginator=this.paginator;

      console.log(response)
    });
  }

  updateFanatic() {
    console.log(this.fanaticdata.id)
    this.fanaticService.update(this.fanaticdata.id, this.fanaticdata).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.map((o: Fanatic) => {
        if (o.id === response.id) {
          o = response;
        }
        return o;
      });
    });
  }

  updateUser() {
    console.log(this.userdata.id);
    this.userService.update(this.userdata.id, this.userdata).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.map((o: Usuario) => {
        if (o.id === response.id) {
          o = response;
        }
        return o;
      });
    });
  }

  getByIdFanatic(id:number) {
    this.fanaticService.getById(id).subscribe((response: any) => {
      this.dataSource.data = response;
      this.dataSource.paginator=this.paginator;

      console.log(response);
    });
  }

  getByIdUser(id:number) {
    this.userService.getById(id).subscribe((response: any) => {
      this.dataSource.data = response;
      this.dataSource.paginator=this.paginator;
      this.userdata = response;
      console.log(this.userdata);
    });
  }

  getFanaticByUserId(){
    console.log(this.idnumber)
    this.fanaticService.getById(this.idnumber).subscribe((response: any) => {
      this.dataSource.data = response;
      this.dataSource.paginator=this.paginator;
      this.fanaticdata = response;
      console.log(this.fanaticdata);

        this.userService.getById(this.fanaticdata.id).subscribe((response: any) => {
          this.dataSource.data = response;
          this.dataSource.paginator=this.paginator;
          this.userdata = response;
          console.log(this.userdata)

        });
    });
  }

}
