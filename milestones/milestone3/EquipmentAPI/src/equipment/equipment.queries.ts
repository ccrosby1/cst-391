export const equipmentQueries = {
	readEquipment:
		`SELECT equipmentId, name, category, price, weight, isAvailable FROM equipment`,
	readEquipmentByEquipmentId:
		`SELECT equipmentId, name, category, price, weight, isAvailable FROM equipment WHERE equipmentId = ?`,
	createEquipment:
		`INSERT INTO equipment (name, category, price, weight, isAvailable) VALUES (?, ?, ?, ?, ?)`,
	updateEquipment:
		`UPDATE equipment SET name = ?, category = ?, price = ?, weight = ?, isAvailable = ? WHERE equipmentId = ?`,
	deleteEquipment:
		`DELETE FROM equipment WHERE equipmentId = ?`,
}
