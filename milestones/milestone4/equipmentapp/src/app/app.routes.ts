import { Routes } from '@angular/router';
import { CreateEquipment } from './create-equipment/create-equipment';
import { ListEquipment } from './list-equipment/list-equipment';
import { DisplayEquipment } from './display-equipment/display-equipment';
import { EditEquipment } from './edit-equipment/edit-equipment';
import { DeleteEquipment } from './delete-equipment/delete-equipment';

export const routes: Routes = [
  { path: 'create', component: CreateEquipment},
  { path: 'list-equipment', component: ListEquipment},
  { path: 'display/:id', component: DisplayEquipment},
  { path: 'edit-equipment/:id', component: EditEquipment},
  { path: 'delete-equipment/:id', component: DeleteEquipment},
];
