import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Album } from '../models/albums.model';

@Component({
  selector: 'app-display-album',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './display-album.html',
  styleUrl: './display-album.css'
})
export class DisplayAlbum {
  @Input() album!: Album;
  showTracks = false;

  toggleTracks(): void {
    this.showTracks = !this.showTracks;
  }
}
