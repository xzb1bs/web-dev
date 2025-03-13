import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Album, AlbumPhoto } from '../Interfaces/Interface';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  
  private albumsUrl = 'https://jsonplaceholder.typicode.com/albums';
  private albumPhotoUrl = 'https://jsonplaceholder.typicode.com/albums';
//for Detailing
  private albumDetailed = new BehaviorSubject<Album | null>(null);
  selectedAlbum = this.albumDetailed.asObservable();

  selectAlbum(album: Album){
    this.albumDetailed.next(album);
  }

//for Photos
  private albumPhoto = new BehaviorSubject<AlbumPhoto[]>([]);
  
  selectedPhoto = this.albumPhoto.asObservable();

  selectPhoto(albumPhotos: AlbumPhoto[]){
    this.albumPhoto.next(albumPhotos);
    
  }

//receive Photo
  private newAlbumPhoto = new BehaviorSubject<AlbumPhoto | null>(null);
  selectedNewAlbumPhoto = this.newAlbumPhoto.asObservable();
  appendPhoto(albumPhoto: AlbumPhoto){
    this.newAlbumPhoto.next(albumPhoto);
  } 

  constructor(private http: HttpClient) { 

  }

  getAlbum(): Observable<Album[]> {
    return this.http.get<Album[]>(this.albumsUrl);
  }

  getAlbumById(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.albumsUrl}/${id}`);
  }
  

  getPhotos(id: number): Observable<AlbumPhoto[]> {
    return this.http.get<AlbumPhoto[]>(`${this.albumPhotoUrl}/${id}/photos`);
  }

  // deleteAlbum(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.albumsUrl}/${id}`);
  // }
  

}
