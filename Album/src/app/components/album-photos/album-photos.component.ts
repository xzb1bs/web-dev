import { Component, OnInit } from '@angular/core';
import { AlbumPhoto } from '../../Interfaces/Interface';
import { AlbumService } from '../../services/album.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { warn } from 'console';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit{
  albumsPhoto: AlbumPhoto[] = [];
  albumId: number | null = null;
  albumPhoto?: AlbumPhoto;


  constructor(private albumService: AlbumService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.albumService.selectedPhoto.subscribe(albumPhoto => {
      if(Array.isArray(albumPhoto)){
        this.albumsPhoto = albumPhoto;
        
      }
    });

    this.albumService.selectedNewAlbumPhoto.subscribe(photo => {
      if(photo){
        this.albumsPhoto.push(photo);
      }
    });
    this.route.paramMap.subscribe(params => {
      this.albumId = Number(params.get('id'));
      
    });
    
  }

  

  
}   
