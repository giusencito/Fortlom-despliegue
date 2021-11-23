import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  idnumber!:number
  constructor(private cd:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    let pod=parseInt(this.route.snapshot.paramMap.get('fanaticid')!);
    let id= pod;
    this.idnumber=id;


  }

enterfanaticforum(){

  this.cd.navigate(['/HomeFanatic',this.idnumber,'FanaticForum'])


}

}
