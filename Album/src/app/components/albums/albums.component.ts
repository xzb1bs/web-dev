import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlbumService } from '../../services/album.service';
import { CommonModule } from '@angular/common';
import { Album, AlbumPhoto } from '../../Interfaces/Interface';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit, OnDestroy{
  private albumSubscription!: Subscription;

  albums: Album[] = [];
  updTitle: string = '';
  splitted: string[] = [];
  loading = false;
  errorMessage = '';
  idCount: number = 100;
  crTitle: string = '';
  imgUrl: string = '';
  

  constructor(private albumService: AlbumService, private router: Router){

  }
  ngOnInit(): void {
    this.fetchAlbums();
    // this.idCount = this.albums.length;
      
  }
  ngOnDestroy(): void {
      if(this.albumSubscription){
        this.albumSubscription.unsubscribe();
      }
  }


  fetchAlbums(): void{
    this.loading = true;
    this.albumSubscription = this.albumService.getAlbum().subscribe({
      next: (data) => {
        this.albums  = data;
        this.loading = false;
      },

      error: (err) => {
        this.errorMessage = 'failed to load albums.';
        this.loading = false;
        console.error(err);
      }
    });
    
  }

  // removeAlbum(id: number) {
  //   this.albumService.deleteAlbum(id).subscribe({
  //     next: () => {
  //       this.albums = this.albums.filter(album => album.id !== id);
  //     },
  //     error: (err) => console.error('Failed to delete album', err)
  //   });
  // }

  removeById(id: number){
    this.albums = this.albums.filter(album => album.id !== id);
  }
  

  //For Detailing
  viewDetails(album: Album){
    this.albumService.selectAlbum(album);
    this.router.navigate(['/albums', album.id]);
  }
  
  changeTitle(){
    let updId = 0;
    if(this.updTitle){
      this.splitted = this.updTitle.split(' ');
      
      updId = Number(this.splitted.at(-1));
      this.splitted = this.splitted.slice(0, this.splitted.length - 1);
      this.updTitle = this.splitted.join(' ');

      this.albums.map((album) => {
        if(updId === album.id){
          album.title = this.updTitle;
        }
      })
      this.updTitle = '';
    }
    else{
      alert("You did not entered any value!!!");
    }
  }

  inc: number = 1;

  createAlbum(){
    
    if(this.crTitle){
      const album: Album = {
        title: this.crTitle,
        id: ++this.idCount,
        userId: 0
      }
      const albumPhoto: AlbumPhoto = {
        title: this.crTitle,
        albumId: ++this.idCount,
        id: this.inc++,
        url: this.imgUrl,
        thumbnailUrl: this.imgUrl
      }

      this.albums.push(album);
      this.albumService.appendPhoto(albumPhoto);
      this.crTitle = '';
      this.imgUrl = '';
      
      
    }
    else{
      alert('Enter value!!!');
    }
  }
}
