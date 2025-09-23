import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MusicServiceService } from '../service/music-service.service';

@Component({
  selector: 'app-delete-album',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-album.html',
  styleUrl: './delete-album.css'
})
export class DeleteAlbum implements OnInit {
  albumId!: number;

  constructor(
    private service: MusicServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Ready to delete album with id', this.albumId);
  }

  onSubmit(): void {
    this.service.deleteAlbum(this.albumId, () => {
      console.log(`Album ${this.albumId} deleted successfully`);
      window.alert(`Album ${this.albumId} deleted`);
      this.router.navigate(['/list-artist']);
    });
  }
}
