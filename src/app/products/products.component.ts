import { Component, OnInit } from '@angular/core';

import {Products} from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {

  Product: Products[] = [
    {
      ProductTitle: "Halo-5",
      Description: "Guardians is a first-person shooter, with players experiencing most gameplay through the eyes of a playable character. The camera switches to a third-person view for some cinematics and gameplay sequences. The game preserves many of the core features of the Halo franchise's gameplay experience.",
      ProductImage: "../../assets/Halo-5.jpg",
      DownloadLink: "#",
      ShareLink: "#",
    }
    ,
    {
      ProductTitle: "GTA-5",
      Description: "Taking the fundamental concepts of open-world freedom, ambient activity and mission-based gameplay of the Grand Theft Auto series and making them available to multiple players in an incredibly dynamic online world, GTA Online offers the freedom to explore alone or work cooperatively with friends to complete missions.",
      ProductImage: "../../assets/GTA-5.jpg",
      DownloadLink: "#",
      ShareLink: "#",
    }
    ,
    {
      ProductTitle: "GOD OF WAR",
      Description: "Ares, in Greek religion, god of war or, more properly, the spirit of battle. Unlike his Roman counterpart, Mars, he was never very popular, and his worship was not extensive in Greece. He represented the distasteful aspects of brutal warfare and slaughter.Based in ancient mythology.the Greek God of War Ares..",
      ProductImage: "../../assets/God of War.jpg",
      DownloadLink: "#",
      ShareLink: "#"
    }
    ,
    {
      ProductTitle: "Need For Speed",
      Description: "The series centers around illicit street racing and in general tasks players to complete various types of races while evading the local law enforcement in police pursuits.It tells the story of street racer Tobey Marshall, who sets off to race cross-country as a way of avenging his friend's death at the hands of a rival racer",
      ProductImage: "../../assets/Need for speed.jpg",
      DownloadLink: "#",
      ShareLink: "#"
    }
    ,
    {
      ProductTitle: "Asphalt-9",
      Description: "Take on the most fearless drivers and become the next Asphalt Legend in this brand new arcade racing experience. In Asphalt 9: Legends, players will be able to take the wheel of over 50 prestigious dream cars across the most amazing real world locations.Asphalt 9: Legends is a racing video game developed by Gameloft.",
      ProductImage: "../../assets/Asphalt-9.jpg",
      DownloadLink: "#",
      ShareLink: "#"
    }
    ,
    {
      ProductTitle: "F1 -2020",
      Description: "The 2020 FIA Formula One World Championship was the motor racing championship for F1 cars which marked the 70th anniversary of the first Formula One World Drivers' Championship. The championship was recognised by the governing body of international motorsport, the (FIA) as the highest class for racing cars.",
      ProductImage: "../../assets/F1-2020.jpg",
      DownloadLink: "#",
      ShareLink: "#"
    }

  ]
}
