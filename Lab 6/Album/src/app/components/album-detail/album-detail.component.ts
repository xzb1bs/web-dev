import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../../Interfaces/Interface';
import { AlbumService } from '../../services/album.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{
  

  

  album!: Album;
  constructor(private albumService: AlbumService, private route: ActivatedRoute, 
              private router: Router){


  }
  ngOnInit(): void {
      this.albumService.selectedAlbum.subscribe(album => {
        if(album){
          this.album = album;
        }
      });
  }
  
  viewPhotos(id: number){
    if(id < 101){
      this.albumService.getPhotos(id).subscribe({
        next: (data) => {
          this.albumService.selectPhoto(data);  
        }
      });
    }
    
    this.router.navigate(['/albums', id, 'photos']);

  }


}
