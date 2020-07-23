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
      url: null,
      sourceCode: "https://github.com/Zimbardoex/vue-auction",
      websiteImage: "../../assets/vue-buy-sell.png",
      technologyLogos: [
        {
          src: "../../assets/vue.png",
          altText: "Vue framework logo."
        },
        {
          src: "../../assets/dotnet.jpeg",
          altText: "Asp dot net logo."
        },
        {
          src: "../../assets/mongo.png",
          altText: "MongoDB logo."
        },
        {
          src: "../../assets/buefy.png",
          altText: "Buefy logo."
        },
      ]
    },
    {
      name: "Media-Analytics.org",
      description: "Website created in my final year of the degree. Worked in a team of three to provide an accessable portal to statisical word use data gathered from multiple media outlets. Utilises React & Material UI on the front end and Express & MongoDB on the backend.",
      url: "https://media-analytics.org",
      sourceCode: "https://github.com/op-analytics/Media-Analytics",
      websiteImage: "../../assets/media-analytics.png",
      technologyLogos: [
        {
          src: "../../assets/react.png",
          altText: "React framework logo."
        },
        {
          src: "../../assets/express.png",
          altText: "ExpressJS logo."
        },
        {
          src: "../../assets/mongo.png",
          altText: "MongoDB logo."
        },
        {
          src: "../../assets/material-ui.png",
          altText: "Buefy logo."
        },
      ]
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
