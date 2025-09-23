import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipment } from '../models/equipment.model';

@Injectable({ providedIn: 'root' })
export class EquipmentServiceService {

  // Constructor
  constructor(private http: HttpClient) {}

  // Http connection propery
  private host = "http://localhost:5000"

  /**
   * Get list of all equipment
   * @param callback
   */
  public getEquipment(callback: (equipment: Equipment[]) => void): void {
    this.http.get<Equipment[]>(this.host + "/equipment").subscribe((equipment: Equipment[]) => {
      callback(equipment);
    });
  }

  /**
   * Get an equipment by ID
   * @param id Id of equipment
   * @param callback
   */
  public getEquipmentById(id: number, callback: (equipment: Equipment) => void): void {
    this.http.get<Equipment[]>(`${this.host}/equipment?equipmentId=${id}`)
      .subscribe(data => {
      callback(data[0]);
    });
  }

  /**
   * Add a piece of equipment to the database
   * @param equipment Item to be added to DB
   * @param callback
   */
  public createEquipment(equipment: Equipment, callback: () => void): void {
    this.http.post<Equipment>(this.host + "/equipment", equipment).subscribe((data) => {
      callback();
    });
  }

  /**
   * Update an existing equipment record
   * @param equipment Updated equipment item
   * @param callback
   */
  public updateEquipment(equipment: Equipment, callback: () => void): void {
    this.http.put<Equipment>(this.host + "/equipment", equipment).subscribe((data) => {
      callback();
    });
  }

  /**
   * Delete equipment by ID
   * @param id Id of equipment to delete
   * @param callback
   */
  public deleteEquipment(id: number, callback: () => void): void {
    this.http.delete(this.host + '/equipment/' + id).subscribe(() => callback());
  }
}
