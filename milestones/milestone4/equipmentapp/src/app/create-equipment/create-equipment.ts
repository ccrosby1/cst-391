import { Component, OnInit } from '@angular/core';
import { Equipment } from '../models/equipment.model';
import { EquipmentServiceService } from '../service/equipment-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-create-equipment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-equipment.html',
  styleUrls: ['./create-equipment.css']
})
export class CreateEquipment implements OnInit {

  equipment: Equipment = {
    equipmentId: Math.floor(Math.random() * 1000000),
    name: '',
    category: '',
    price: 0,
    weight: 0,
    isAvailable: true
  };

  wasSubmitted: boolean = false;

  constructor(private service: EquipmentServiceService) { }

  ngOnInit() {}

  public onSubmit() {
    console.log('Creating equipment:', this.equipment);
    this.service.createEquipment(this.equipment, () => {
      console.log('Equipment created!');
      this.wasSubmitted = true;
    });
  }
}
