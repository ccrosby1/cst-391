import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { Equipment } from "./equipment.model";
import { equipmentQueries } from './equipment.queries';


export const readEquipment = async () => {
    return execute<Equipment[]>(equipmentQueries.readEquipment, []);
};

export const readEquipmentByEquipmentId = async (equipmentId: number) => {
    return execute<Equipment[]>(equipmentQueries.readEquipmentByEquipmentId, [equipmentId]);
};

export const createEquipment = async (equipment: Equipment) => {
    return execute<OkPacket>(equipmentQueries.createEquipment,
        [equipment.name, equipment.category, equipment.price, equipment.weight, equipment.isAvailable]);
};

export const updateEquipment = async (equipment: Equipment) => {
    return execute<OkPacket>(equipmentQueries.updateEquipment,
        [equipment.name, equipment.category, equipment.price, equipment.weight, equipment.isAvailable, equipment.equipmentId]);
};

export const deleteEquipment = async (equipmentId: number) => {
    return execute<OkPacket>(equipmentQueries.deleteEquipment, [equipmentId]);
};
