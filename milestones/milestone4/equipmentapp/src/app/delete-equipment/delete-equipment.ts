/**
 * DeleteEquipment Component
 * Handels deletion of equipment item
 */
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
  equipmentId!: number; // Id of equipment to delete

  constructor(
    private service: EquipmentServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  /**
   * Gets Id from route parameter and logs in console
   */
  ngOnInit(): void {
    this.equipmentId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Deleting equipment: ', this.equipmentId);
  }

  /**
   * Passes id to service to remove equipment.
   * Called when user confirms delete request
   */
  onSubmit(): void {
    this.service.deleteEquipment(this.equipmentId, () => {
      console.log(`Equipment deleted: ${this.equipmentId}`);
      this.router.navigate(['/list-equipment']);
    });
  }

  /**
   * Returns user to equipment list w/out deletion
   * Called when user cancels delete
   */
  onCancel(): void {
    this.router.navigate(['/list-equipment']);
  }
}
