import { Component, OnInit } from '@angular/core';
import {ArtistService} from "../services/artist/artist.service";
import {MatTableDataSource} from "@angular/material/table";
import {Artist} from "../models/artist";
import {RateService} from "../services/rate/rate.service";
import {Rate} from "../models/rate";

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {

  artistList!: any;
  rate!:Rate
  val!: number
  value = 0;
  constructor(private artistService: ArtistService, private rateService:RateService) {
    this.rate={}as Rate;
   }

  ngOnInit(): void {
    this.getArtists();
  }

  getArtists(){
    this.artistService.getAll().subscribe((response: any) => {
      this.artistList = response.content;
      console.log("Artistas")
      console.log(this.artistList)
    });
  }

  follow(artist: Artist) {
    console.log('artist id to follow: ' + artist.id);
    artist.followers++;
    this.artistService.update(artist.id, artist).subscribe((response: any) => {
      console.log(response);

      this.artistList = this.artistList.map((o: Artist) => {
        if (o.id === response.id) {
          o = response;
        }
        return o;
      });

    });
  }

  new_rate( aId: number){
    console.log('rate:' + aId)
    this.rate.rates=aId;



  }



  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    this.val = value;
    return value;
  }

}
