/**
 * ListEquipment Component
 * Displays list of all equipment
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';
import { EquipmentServiceService } from '../service/equipment-service.service';
import { Equipment } from '../models/equipment.model';
import { DisplayEquipment } from '../display-equipment/display-equipment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-equipment',
  standalone: true,
  imports: [CommonModule, DisplayEquipment],
  templateUrl: './list-equipment.html',
  styleUrl: './list-equipment.css'
})
export class ListEquipment implements OnInit{
  selectedEquipment: Equipment | null = null; // currently selected equipment
  equipmentList: Equipment[] = []; // list of all equipment

  constructor(
    private route: ActivatedRoute,
    private service: EquipmentServiceService
  ) {}

  /**
   * Populates list from database return
   */
  ngOnInit(): void {
    console.log('Getting Equipment...');
    this.service.getEquipment((equipment: Equipment[]) => {
      this.equipmentList = equipment;
    });
  }

  /**
   * Sets the equipment item to display details for
   * Called when users selects item
   * @param item Selected equipment to view
   */
  onSelectEquipment(item: Equipment): void {
  this.selectedEquipment = item;
  }
}
