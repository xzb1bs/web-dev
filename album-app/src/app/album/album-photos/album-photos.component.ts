import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: any[] = [];
  albumId!: number;

  constructor(private route: ActivatedRoute, @Inject(AlbumsService) private albumsService: AlbumsService) {}

  ngOnInit() {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));

    this.albumsService.getPhotosByAlbumId(this.albumId).subscribe((photos: any[]) => {
      this.photos = photos;
    });
  }
}