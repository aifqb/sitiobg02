import { Component, OnInit } from '@angular/core';
import { Videos } from 'src/app/intefaces/info-video.interface';
import { InfoContactoService } from 'src/app/services/info-contacto.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  videos: Videos[] = [];

  constructor( public videosServices: InfoContactoService ) { }

  ngOnInit(): void {
    this.videosServices.getVideos()
      .subscribe( videos => this.videos = videos);
  }

}
