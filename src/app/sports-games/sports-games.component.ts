import { Component, OnInit } from '@angular/core';

import {Products} from'../models/product.model'

@Component({
  selector: 'app-sports-games',
  templateUrl: './sports-games.component.html',
  styleUrls: ['./sports-games.component.css']
})
export class SportsGamesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Product: Products[] = [
    
    {
      ProductTitle: "FIFA-20",
      Description: "The series centers around illicit street racing and in general tasks players to complete various types of races while evading the local law enforcement in police pursuits.It tells the story of street racer Tobey Marshall, who sets off to race cross-country as a way of avenging his friend's death at the hands of a rival racer",
      ProductImage: "../../assets/FIFA-20.jpg",
      DownloadLink: "#",
      ShareLink: "#"
    }
    ,
    {
      ProductTitle: "NBK 2K19",
      Description: "Take on the most fearless drivers and become the next Asphalt Legend in this brand new arcade racing experience. In Asphalt 9: Legends, players will be able to take the wheel of over 50 prestigious dream cars across the most amazing real world locations.Asphalt 9: Legends is a racing video game developed by Gameloft.",
      ProductImage: "../../assets/NBK.jpg",
      DownloadLink: "#",
      ShareLink: "#"
    }
    ,
    {
      ProductTitle: "Baseball",
      Description: "The 2020 FIA Formula One World Championship was the motor racing championship for F1 cars which marked the 70th anniversary of the first Formula One World Drivers' Championship. The championship was recognised by the governing body of international motorsport, the (FIA) as the highest class for racing cars.",
      ProductImage: "../../assets/BaseBall.jpg",
      DownloadLink: "#",
      ShareLink: "#"
    }

  ]
}
