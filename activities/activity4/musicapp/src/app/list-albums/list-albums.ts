import { Component, Input, OnInit } from '@angular/core';
import { MusicServiceService } from '../service/music-service.service';
import { DisplayAlbum } from '../display-album/display-album';
import { Artist } from '../models/artists.model';
import { Album } from '../models/albums.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-albums',
  standalone: true,
  imports: [CommonModule, DisplayAlbum],
  templateUrl: './list-albums.html',
  styleUrl: './list-albums.css'
})
export class ListAlbums implements OnInit{
  @Input() artist!: Artist;

  albums: Album[] = [];
  selectedAlbum: Album | null = null;

  constructor(private service: MusicServiceService) {}

  ngOnInit(): void {
    console.log("Getting Albums...");
    this.service.getAlbumsOfArtist(this.artist.artist, (albums: Album[]) => {
      this.albums = albums;
      console.log('this.albums', this.albums);
    });
  }

  public onSelectedAlbum(album: Album): void {
    this.selectedAlbum = album;
  }
}
