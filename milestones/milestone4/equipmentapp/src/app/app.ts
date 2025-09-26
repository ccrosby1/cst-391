/**
 * App Component
 * Main component of application
 * Handles navigation
 */
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
  protected readonly title = signal('Gym Equipment Catalog'); // Title
  version: string = '1.0'; // App Version

  constructor(private router: Router) {}

  /**
   * Shows alert box with app/author details
   */
  displayVersion() {
    alert(`Author: Cody Crosby\n` +
      `Class: CST-391\n` +
      `App Version: ${this.version}`);
  }

  /**
   * Navigates to equipment list
   */
  displayEquipmentCatalog() {
    this.router.navigate(['list-equipment'], {
      queryParams: { data: new Date() }
    });
  }

  /**
   * Navigates to creation form
   */
  goToCreate() {
    this.router.navigate(['/create']);
  }

  /**
   * Navigates to intro page
   */
  displayIntro() {
    this.router.navigate(['/intro']);
  }
}
