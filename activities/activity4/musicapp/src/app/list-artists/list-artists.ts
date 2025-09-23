import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';
import { MusicServiceService } from '../service/music-service.service';
import { Artist } from '../models/artists.model';
import { CommonModule } from '@angular/common';
import { ListAlbums } from '../list-albums/list-albums';

@Component({
  selector: 'app-list-artists',
  standalone: true,
  imports: [CommonModule, ListAlbums],
  templateUrl: './list-artists.html',
  styleUrl: './list-artists.css'
})
export class ListArtists implements OnInit{
  selectedArtist: Artist | null = null;
  artists: Artist[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: MusicServiceService
  ) {}

  ngOnInit(): void {
    console.log("Getting Artists...");
    this.service.getArtists((artists: Artist[]) => {
      this.artists = artists;
      console.log('this.artists', this.artists);
    });
  }

  onSelectArtist(artist: Artist) {
    this.selectedArtist = artist;
  }

}
