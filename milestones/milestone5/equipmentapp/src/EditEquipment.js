import React, { useState } from 'react';
import dataSource from './dataSource';
import { useNavigate } from 'react-router-dom';

const EditEquipment = (props) => {
    let equipment = {
        equipmentId: 0,
        name: '',
        category: '',
        price: 0,
        weight: 0,
        isAvailable: true
    };
    let newCreation = true;

    if (props.equipment) {
        equipment = props.equipment;
        newCreation = false;
    }

    const [name, setName] = useState(equipment.name || "");
    const [category, setCategory] = useState(equipment.category || "");
    const [price, setPrice] = useState(equipment.price || 0);
    const [weight, setWeight] = useState(equipment.weight || 0);
    const [isAvailable, setIsAvailable] = useState(equipment.isAvailable ? 1 : 0);

    const navigate = useNavigate();

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const editedEquipment = {
            equipmentId: equipment.equipmentId,
            name,
            category,
            price,
            weight,
            isAvailable
        };

        if (newCreation) {
            await dataSource.post('/equipment', editedEquipment);
        } else {
            await dataSource.put('/equipment', editedEquipment);
        }

        props.onEditEquipment(navigate);
    };

    const handleCancel = () => {
        navigate("/");
    };

    return (
        <div>
            <h1 className="text-center mb-4">{newCreation ? "Create New" : "Edit"} Equipment</h1>
            <div className="container d-flex justify-content-center">
                <form onSubmit={handleFormSubmit} className="card shadow-sm p-4" style={{ maxWidth: '600px', width: '100%' }}>
                    <div className="form-group">
                        <label htmlFor="equipmentName">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="equipmentName"
                            placeholder="Enter equipment name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                        />

                        <label htmlFor="equipmentCategory">Category</label>
                        <input
                            type="text"
                            className="form-control"
                            id="equipmentCategory"
                            placeholder="Enter category"
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                            required
                        />

                        <label htmlFor="equipmentPrice">Price</label>
                        <input
                            type="number"
                            className="form-control"
                            id="equipmentPrice"
                            placeholder="Enter price"
                            value={price}
                            onChange={e => setPrice(Number(e.target.value))}
                            required
                        />

                        <label htmlFor="equipmentWeight">Weight</label>
                        <input
                            type="number"
                            className="form-control"
                            id="equipmentWeight"
                            placeholder="Enter weight"
                            value={weight}
                            onChange={e => setWeight(Number(e.target.value))}
                            required
                        />

                        <label htmlFor="equipmentAvailable">Available</label>
                        <select
                            id="equipmentAvailable"
                            className="form-control"
                            value={isAvailable}
                            onChange={e => setIsAvailable(Number(e.target.value))}
                        >
                            <option value={1}>Yes</option>
                            <option value={0}>No</option>
                        </select>
                    </div>

                    <div className="mt-3 text-center">
                        <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                        <button type="submit" className="btn btn-warning ms-2">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditEquipment;
