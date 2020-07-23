import { Component, OnInit } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projects: Project[] = [
    {
      name: "Vue, Buy and Sell",
      description: "Auction site created using Vue, C# ASP.NET Core and MongoDB. Still a work in progress but currently includes user authentication with JWT, Buefy for compoent styling, search functionality and many more plans!",
      url: "http://google.com",
      sourceCode: "https://github.com/Zimbardoex/vue-auction",
      websiteImage: "https://www.websitetooltester.com/wp-content/uploads/2018/01/000webhost-homepage.png",
      technologyLogos: [
        {
          src: "https://vuejs.org/images/logo.png",
          altText: "Vue framework logo."
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQV5HFn-szZBigFeZDu68F9pw3aEBs9XKHcaQ&usqp=CAU",
          altText: "Asp dot net logo."
        },
        {
          src: "../../assets/mongo.png",
          altText: "MongoDB logo."
        },
        {
          src: "https://img.stackshare.io/service/10410/26799900.png",
          altText: "Buefy logo."
        },
      ]
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
