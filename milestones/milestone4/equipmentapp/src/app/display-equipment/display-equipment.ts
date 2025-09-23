import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Equipment } from '../models/equipment.model';

@Component({
  selector: 'app-display-equipment',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './display-equipment.html',
  styleUrl: './display-equipment.css'
})
export class DisplayEquipment {
  @Input() equipment!: Equipment;

}
