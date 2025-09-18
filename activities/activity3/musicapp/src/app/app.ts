import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('My Music Collection');
  version: string = '1.0';

  constructor(private router: Router) {}

  displayVersion() {
    alert(`App Version: ${this.version}`);
  }

  displayArtistList() {
    this.router.navigate(['list-artist'], {
      queryParams: { data: new Date() }
    });
  }

  goToCreate() {
    this.router.navigate(['/create']);
  }
}
