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
    let pod=parseInt(this.route.snapshot.paramMap.get('id')!);
    let id= pod;
    this.idnumber=id;
    console.log(this.idnumber)

  }



enterevent(){
  console.log(this.idnumber)
  this.cd.navigate(['/HomeFanatic',this.idnumber,'Event'])


}

enterartists(){
  console.log(this.idnumber)
  this.cd.navigate(['/HomeFanatic',this.idnumber,'artists'])
}

enterfanaticforum(){
  console.log(this.idnumber)
  this.cd.navigate(['/HomeFanatic',this.idnumber,'FanaticForum'])


}
enterPublication(){

 console.log(this.idnumber)
this.cd.navigate(['/HomeFanatic',this.idnumber,'posts'])


}
enterHome(){
  console.log(this.idnumber)
  this.cd.navigate(['/HomeFanatic',this.idnumber])
}

enterConfigurationFanatic(){
  this.cd.navigate(['/HomeFanatic',this.idnumber,'ConfigureFanatic']);
}

}
