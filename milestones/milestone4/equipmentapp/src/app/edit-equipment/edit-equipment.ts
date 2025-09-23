import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EquipmentServiceService } from '../service/equipment-service.service';
import { Equipment } from '../models/equipment.model';

@Component({
  selector: 'app-edit-equipment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-equipment.html',
  styleUrl: './edit-equipment.css'
})
export class EditEquipment implements OnInit{
  equipmentId!: number;
  equipment: Equipment = {
    equipmentId: 0,
    name: '',
    category: '',
    price: 0,
    weight: 0,
    isAvailable: false
  };

  constructor(
    private route: ActivatedRoute,
    private service: EquipmentServiceService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.equipmentId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Editing equipment:', this.equipmentId);
    this.service.getEquipmentById(this.equipmentId, (data: Equipment) => {
      this.equipment = data;
    });
  }

  onSubmit(): void {
    this.service.updateEquipment(this.equipment, () => {
      console.log(`Equipment updated: ${this.equipment.equipmentId}`);
      this.router.navigate(['/list-equipment']);
    });
  }
}
