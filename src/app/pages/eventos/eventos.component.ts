import { Component, OnInit } from '@angular/core';
import { Videos } from 'src/app/intefaces/info-video.interface';
import { InfoContactoService } from 'src/app/services/info-contacto.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  videos: Videos[] = [];

  constructor( public videosServices: InfoContactoService ) { }

  ngOnInit(): void {
    this.videosServices.getVideos()
      .subscribe( videos => this.videos = videos);
  }


  

}
