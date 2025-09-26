/**
 * Equipment Model
 * Model for equipment items
 */
export interface Equipment {
    equipmentId: number,
    name: string,
    category: string,
    price: number,
    weight: number,
    isAvailable: boolean
}
