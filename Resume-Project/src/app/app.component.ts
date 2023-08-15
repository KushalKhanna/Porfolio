import { Component, OnInit } from '@angular/core';
import { DownloadService } from './download.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Resume-Project';
  aboutMe = [1,0,0] ;

  ngOnInit(): void {}

  constructor(private downloadService: DownloadService) {}

  
  public experienceClick() {
    this.aboutMe = [1,0,0];
    
  }
  
  public educationClick() {
    this.aboutMe = [0,1,0];
    
  }
  
  public skillsClick() {
    this.aboutMe = [0,0,1];
  }
  
  facebookClick() {
    window.open("https://www.facebook.com", "_blank");
  }
  
  linkedInClick() {
    window.open("https://www.linkedin.com/in/kushal-khanna/", "_blank");
  }
  
  githubClick() {
    window.open("https://www.github.com/KushalKhanna/", "_blank");
  }

  downloadResume(): void {
    const fileName = "Kushal's Resume.pdf";
    this.downloadService.downloadFile(fileName);
  }

}
