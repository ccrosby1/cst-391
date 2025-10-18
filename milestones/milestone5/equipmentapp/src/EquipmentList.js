/**
 * Renders a list of EquipmentCard components and manages deletion events
 */
import React from 'react';
import EquipmentCard from './Card';
import { useNavigate } from 'react-router-dom';
import dataSource from './dataSource';

const EquipmentList = (props) => {
    const navigate = useNavigate();

    // Handles user selecting equipment card
    const handleSelection = (equipmentId, uri) => {
        props.onClick(equipmentId, navigate);
    };

    // eletes equipment and triggers list refresh
    const handleDeleteEquipment = async (equipmentId) => {
        try {
            await dataSource.delete(`/equipment/${equipmentId}`);
            props.onDelete(); 
        } catch (error) {
            console.error("Failed to delete equipment:", error);
        }
    };

    const equipmentCards = props.equipmentList.map((equipment) => (
        <EquipmentCard
            key={equipment.equipmentId}
            equipment={equipment}
            onClick={handleSelection}
            onDelete={handleDeleteEquipment}
        />
    ));

    return <div className='d-flex flex-wrap justify-content-start'>{equipmentCards}</div>;
};

export default EquipmentList;
