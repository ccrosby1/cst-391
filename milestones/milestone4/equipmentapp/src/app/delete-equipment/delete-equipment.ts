import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EquipmentServiceService } from '../service/equipment-service.service';
import { Equipment } from '../models/equipment.model';

@Component({
  selector: 'app-delete-equipment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-equipment.html',
  styleUrl: './delete-equipment.css'
})
export class DeleteEquipment implements OnInit {
  equipmentId!: number;
  equipment: Equipment | null = null;
  showDetails = false;

  constructor(
    private service: EquipmentServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.equipmentId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Deleting equipment: ', this.equipmentId);
  }

  onSubmit(): void {
    this.service.deleteEquipment(this.equipmentId, () => {
      console.log(`Equipment deleted: ${this.equipmentId}`);
      this.router.navigate(['/list-equipment']);
    });
  }

  onCancel(): void {
    this.router.navigate(['/list-equipment']);
  }
}
