import { Component, OnInit } from '@angular/core';
import {Products} from '../models/product.model'
@Component({
  selector: 'app-action-games',
  templateUrl: './action-games.component.html',
  styleUrls: ['./action-games.component.css']
})
export class ActionGamesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
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


  ]
}
