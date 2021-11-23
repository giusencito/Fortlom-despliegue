import {Component , OnInit, ViewChild} from '@angular/core';
import {Artist} from '../models/artist';
import {Usuario} from '../models/usuario';
import {ArtistService} from '../services/artist/artist.service';
import {UsuarioService} from '../services/usuario/usuario.service';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {NgForm} from "@angular/forms";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  artistdata!: Artist;
  userdata!: Usuario;
  idnumber!:number
  numberuser : number = 3;
  dataSource!: MatTableDataSource<any>;
  arraygenders : string[] = [];
  aleatorygender: string[] = ["Progresive Rock","Sound Engineering","2000 Wave","Complex","2010 Wave","Hard Rock","Classic Metal"]

  @ViewChild('UserForm', {static: false})
  UserForm!: NgForm;

  @ViewChild('ArtistForm', {static: false})
  ArtistForm!: NgForm;

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;

  constructor(private artistService: ArtistService,private userService: UsuarioService,private dialog:MatDialog,private route:ActivatedRoute) {
    this.artistdata = {} as Artist;
    this.userdata = {} as Usuario;
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit():void{
    this.dataSource.paginator = this.paginator;
    console.log(this.arraygenders);
    this.getAllArtists();
    this.getAllUsers();

    let pod=parseInt(this.route.snapshot.paramMap.get('id')!);
    let id= pod;
    this.idnumber=id;

    this.getArtistByUserId();
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

  getAllArtists() {
    this.artistService.getAll().subscribe((response: any) => {
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

  updateArtist() {
    console.log(this.artistdata.id)
    this.artistService.update(this.artistdata.id, this.artistdata).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.map((o: Artist) => {
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

  getByIdArtist(id:number) {
    this.artistService.getById(id).subscribe((response: any) => {
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

  getArtistByUserId(){
      console.log(this.idnumber)
      this.artistService.getById(this.idnumber).subscribe((response: any) => {
        this.dataSource.data = response;
        this.dataSource.paginator=this.paginator;
        this.artistdata = response;
        console.log(this.artistdata);

        this.userService.getById(this.artistdata.id).subscribe((response: any) => {
          this.dataSource.data = response;
          this.dataSource.paginator=this.paginator;
          this.userdata = response;
          console.log(this.userdata)

        });
    });
  }


}
