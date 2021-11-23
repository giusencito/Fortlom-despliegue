import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from '../models/artist';
import {ArtistService} from "../services/artist/artist.service";

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent implements OnInit {

  artistdata!: Artist;
  
  constructor(private artistService: ArtistService,
    private $route: ActivatedRoute) { 
    this.artistdata = {} as Artist;
  }

  ngOnInit(): void {
    this.artistService.getById(this.$route.snapshot.params['id']).subscribe((response: any) => {
      this.artistdata = response;
    });
  }

  follow() {
    this.artistdata.followers++;
    this.artistService.update(this.artistdata.id, this.artistdata).subscribe((response: any) => {
      console.log(response);
    });
  }
}
