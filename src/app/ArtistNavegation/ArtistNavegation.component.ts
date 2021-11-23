import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-ArtistNavegation',
  templateUrl: './ArtistNavegation.component.html',
  styleUrls: ['./ArtistNavegation.component.css']
})
export class ArtistNavegationComponent implements OnInit {

  idnumber!:number
  constructor(private cd:Router,private route:ActivatedRoute) { }

  ngOnInit() {let pod=parseInt(this.route.snapshot.paramMap.get('id')!);
  let id= pod;
  this.idnumber=id;
  console.log(this.idnumber)
}
enterhome(){

  this.cd.navigate(['/HomeArtist',this.idnumber])

}












enterForum(){
    this.cd.navigate(['/HomeArtist',this.idnumber,'ArtistForum'])
    let pod=parseInt(this.route.snapshot.paramMap.get('id')!);
    let id= pod;
    this.idnumber=id;

  }

  enterposts(){

    this.cd.navigate(['/HomeArtist',this.idnumber,'posts'])


  }
  enterEvents(){}
  enterConfigurationArtist(){

    this.cd.navigate(['/HomeArtist',this.idnumber,'ConfigureArtist'])

  }

  enterEvent(){

    this.cd.navigate(['/HomeArtist',this.idnumber,'Event'])


  }







}
