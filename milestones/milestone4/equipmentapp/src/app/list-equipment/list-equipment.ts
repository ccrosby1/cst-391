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
  selectedEquipment: Equipment | null = null;
equipmentList: Equipment[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: EquipmentServiceService
  ) {}

  ngOnInit(): void {
    console.log('Getting Equipment...');
    this.service.getEquipment((equipment: Equipment[]) => {
      this.equipmentList = equipment;
    });
  }

  onSelectEquipment(item: Equipment): void {
  this.selectedEquipment = item;
  }
}
