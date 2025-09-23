import { Injectable } from '@angular/core';
//import exampledata from '../../data/sample-music-data.json';
import { Artist } from './../models/artists.model';
import { Album } from '../models/albums.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class MusicServiceService {

  // Constructor
  constructor(private http: HttpClient) {}

  // Http connection propery
  private host = "http://localhost:5000"

  // A list of albums pulled from a JSON file and stored in memory to serve as the database
  //albums: Album[] = exampledata;

  // Method to get a list of all artists
  public getArtists(callback: (artists: Artist[]) => void): void {

    this.http.get<Artist[]>(this.host + "/artists").subscribe((artists: Artist[]) => {
      callback(artists);
    });
  }

  // Get list of all albums
  public getAlbums(callback: (albums: Album[]) => void): void {
    this.http.get<Album[]>(this.host + '/albums').subscribe((albums: Album[]) => {
      callback(albums);
    });
  }

  // Get all albums from given artist
  public getAlbumsOfArtist(artistName: String, callback: (album: Album[]) => void): void {
    let request = this.host + `/albums/${artistName}`;
    console.log('request', request);
    this.http.get<Album[]>(request).subscribe((albums: Album[]) => {
      console.log('have albums', albums);
      callback(albums);
    });
  }

  // Add a new album to db
  public createAlbum(album: Album, callback: () => void): void {
    this.http.post<Album>(this.host + "/albums", album).subscribe((data) => {
      callback();
    });
  }

  // Update an existing album
  public updateAlbum(album: Album, callback: () => void): void {
    this.http.put<Album>(this.host + "/albums", album).subscribe((data) => {
      callback();
    });
  }

  // Delete album by ID
  public deleteAlbum(id: number, callback: () => void): void {
    this.http.delete(this.host + "/albums/" + id).subscribe((data) => {
      callback();
    });
  }
}
